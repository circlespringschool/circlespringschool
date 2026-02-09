#!/usr/bin/env node

// Circle Spring Academy - Deployment Test Suite
const https = require('https');
const http = require('http');

class DeploymentTester {
    constructor(baseUrl) {
        this.baseUrl = baseUrl.replace(/\/$/, ''); // Remove trailing slash
        this.results = [];
    }

    async runAllTests() {
        console.log('🚀 Starting Circle Spring Academy Deployment Tests...\n');
        console.log(`Testing site: ${this.baseUrl}\n`);

        // Core page tests
        await this.testPage('/', 'Home Page');
        await this.testPage('/academics.html', 'Academics Page');
        await this.testPage('/student-life.html', 'Student Life Page');
        await this.testPage('/activities.html', 'Activities Page');
        await this.testPage('/aboutcirclesprings.html', 'About Page');
        await this.testPage('/contactus.html', 'Contact Page');
        await this.testPage('/success.html', 'Success Page');

        // Admin and CMS tests
        await this.testPage('/admin/', 'Admin Panel');
        await this.testPage('/admin/index.html', 'Admin Index');

        // Clean URL redirects
        await this.testRedirect('/academics', '/academics.html', 'Academics Clean URL');
        await this.testRedirect('/student-life', '/student-life.html', 'Student Life Clean URL');
        await this.testRedirect('/activities', '/activities.html', 'Activities Clean URL');
        await this.testRedirect('/about', '/aboutcirclesprings.html', 'About Clean URL');
        await this.testRedirect('/contact', '/contactus.html', 'Contact Clean URL');

        // Static assets
        await this.testAsset('/src/styles/style.css', 'Main CSS');
        await this.testAsset('/src/js/app.js', 'Main JavaScript');
        await this.testAsset('/src/imgs/logo-BBA39KOS.webp', 'Logo Image');
        await this.testAsset('/src/imgs/hero.webp', 'Hero Image');

        // Security headers test
        await this.testSecurityHeaders('/');

        // Performance tests
        await this.testPageSpeed('/');

        this.printResults();
    }

    async testPage(path, name) {
        try {
            const response = await this.makeRequest(path);
            if (response.statusCode === 200) {
                this.logSuccess(`✅ ${name}: OK (${response.statusCode})`);
                
                // Check for essential content
                if (path === '/') {
                    if (response.body.includes('Circle Spring Academy')) {
                        this.logSuccess(`   ✅ Contains school name`);
                    } else {
                        this.logError(`   ❌ Missing school name`);
                    }
                }
                
                if (path === '/contactus.html') {
                    if (response.body.includes('data-netlify="true"')) {
                        this.logSuccess(`   ✅ Netlify Forms enabled`);
                    } else {
                        this.logError(`   ❌ Netlify Forms not detected`);
                    }
                }
                
            } else {
                this.logError(`❌ ${name}: Failed (${response.statusCode})`);
            }
        } catch (error) {
            this.logError(`❌ ${name}: Error - ${error.message}`);
        }
    }

    async testRedirect(fromPath, toPath, name) {
        try {
            const response = await this.makeRequest(fromPath, false);
            if (response.statusCode === 200) {
                this.logSuccess(`✅ ${name}: Redirect working (${response.statusCode})`);
            } else if ([301, 302].includes(response.statusCode)) {
                this.logSuccess(`✅ ${name}: Redirect found (${response.statusCode})`);
            } else {
                this.logError(`❌ ${name}: Unexpected status (${response.statusCode})`);
            }
        } catch (error) {
            this.logError(`❌ ${name}: Error - ${error.message}`);
        }
    }

    async testAsset(path, name) {
        try {
            const response = await this.makeRequest(path);
            if (response.statusCode === 200) {
                this.logSuccess(`✅ ${name}: Loaded (${response.statusCode})`);
                
                // Check cache headers
                if (response.headers['cache-control']) {
                    this.logSuccess(`   ✅ Cache headers present`);
                }
            } else {
                this.logError(`❌ ${name}: Failed (${response.statusCode})`);
            }
        } catch (error) {
            this.logError(`❌ ${name}: Error - ${error.message}`);
        }
    }

    async testSecurityHeaders(path) {
        try {
            const response = await this.makeRequest(path);
            const headers = response.headers;
            
            console.log('\n🔒 Security Headers Test:');
            
            const securityHeaders = {
                'x-frame-options': 'X-Frame-Options',
                'x-xss-protection': 'X-XSS-Protection',
                'x-content-type-options': 'X-Content-Type-Options',
                'referrer-policy': 'Referrer-Policy'
            };
            
            for (const [header, displayName] of Object.entries(securityHeaders)) {
                if (headers[header]) {
                    this.logSuccess(`   ✅ ${displayName}: ${headers[header]}`);
                } else {
                    this.logError(`   ❌ ${displayName}: Missing`);
                }
            }
        } catch (error) {
            this.logError(`❌ Security Headers Test: Error - ${error.message}`);
        }
    }

    async testPageSpeed(path) {
        try {
            const startTime = Date.now();
            const response = await this.makeRequest(path);
            const loadTime = Date.now() - startTime;
            
            console.log('\n⚡ Performance Test:');
            this.logSuccess(`   ✅ Page load time: ${loadTime}ms`);
            
            if (loadTime < 1000) {
                this.logSuccess(`   ✅ Excellent performance (< 1s)`);
            } else if (loadTime < 3000) {
                this.logSuccess(`   ✅ Good performance (< 3s)`);
            } else {
                this.logError(`   ⚠️  Slow performance (> 3s)`);
            }
            
            // Check content size
            const contentLength = response.body.length;
            this.logSuccess(`   ✅ Content size: ${(contentLength / 1024).toFixed(2)} KB`);
            
        } catch (error) {
            this.logError(`❌ Performance Test: Error - ${error.message}`);
        }
    }

    makeRequest(path, followRedirects = true) {
        return new Promise((resolve, reject) => {
            const url = `${this.baseUrl}${path}`;
            const isHttps = url.startsWith('https://');
            const client = isHttps ? https : http;
            
            const options = {
                method: 'GET',
                headers: {
                    'User-Agent': 'Circle-Spring-Academy-Test-Suite/1.0'
                }
            };
            
            const req = client.get(url, options, (res) => {
                let body = '';
                
                res.on('data', (chunk) => {
                    body += chunk;
                });
                
                res.on('end', () => {
                    resolve({
                        statusCode: res.statusCode,
                        headers: res.headers,
                        body: body
                    });
                });
            });
            
            req.on('error', (error) => {
                reject(error);
            });
            
            req.setTimeout(10000, () => {
                req.destroy();
                reject(new Error('Request timeout'));
            });
        });
    }

    logSuccess(message) {
        console.log(message);
        this.results.push({ type: 'success', message });
    }

    logError(message) {
        console.log(message);
        this.results.push({ type: 'error', message });
    }

    printResults() {
        const successes = this.results.filter(r => r.type === 'success').length;
        const errors = this.results.filter(r => r.type === 'error').length;
        
        console.log('\n' + '='.repeat(60));
        console.log('📊 TEST RESULTS SUMMARY');
        console.log('='.repeat(60));
        console.log(`✅ Passed: ${successes}`);
        console.log(`❌ Failed: ${errors}`);
        console.log(`📈 Success Rate: ${((successes / (successes + errors)) * 100).toFixed(1)}%`);
        
        if (errors === 0) {
            console.log('\n🎉 All tests passed! Your Circle Spring Academy website is ready for production!');
        } else {
            console.log('\n⚠️  Some tests failed. Please review the issues above.');
        }
        
        console.log('\n📋 Next Steps:');
        console.log('1. Test the contact form by submitting a message');
        console.log('2. Access the admin panel and test CMS functionality');
        console.log('3. Check mobile responsiveness on different devices');
        console.log('4. Set up custom domain if desired');
        console.log('5. Configure email notifications for form submissions');
    }
}

// Usage
if (process.argv.length < 3) {
    console.log('Usage: node test-deployment.js <your-netlify-url>');
    console.log('Example: node test-deployment.js https://amazing-name-123456.netlify.app');
    process.exit(1);
}

const siteUrl = process.argv[2];
const tester = new DeploymentTester(siteUrl);
tester.runAllTests().catch(console.error);