/**
 * REP ONE Fitness - Production Server
 * 
 * This server is for serving the built React app in production.
 * For development, use: npm run dev
 * 
 * To build and run production:
 *   npm run build
 *   npm run server
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
const DIST_DIR = path.join(__dirname, 'dist');
const PUBLIC_DIR = __dirname;

// MIME types for serving static files
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav'
};

// Get MIME type based on file extension
function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return MIME_TYPES[ext] || 'application/octet-stream';
}

// Create HTTP server
const server = http.createServer((req, res) => {
    // Log requests
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

    // Parse URL and decode URI components
    let requestPath = decodeURIComponent(req.url.split('?')[0]);
    
    // Default to index.html for root path
    if (requestPath === '/') {
        requestPath = '/index.html';
    }

    // Construct full file path
    const filePath = path.join(__dirname, requestPath);

    // Security check - prevent directory traversal
    const normalizedPath = path.normalize(filePath);
    if (!normalizedPath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Forbidden');
        return;
    }

    // Check if file exists and serve it
    fs.stat(filePath, (err, stats) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>404 - Not Found</title>
                        <style>
                            body { 
                                background: #050505; 
                                color: white; 
                                font-family: 'Inter', system-ui, sans-serif;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                height: 100vh;
                                margin: 0;
                            }
                            .container { text-align: center; }
                            h1 { font-size: 120px; margin: 0; background: linear-gradient(135deg, #0050FF, #00D6FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                            p { color: rgba(255,255,255,0.6); }
                            a { color: #00D6FF; text-decoration: none; }
                            a:hover { text-decoration: underline; }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>404</h1>
                            <p>Page not found</p>
                            <a href="/">Return to REP ONE</a>
                        </div>
                    </body>
                    </html>
                `);
            } else {
                // Server error
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            }
            return;
        }

        // If it's a directory, try to serve index.html
        if (stats.isDirectory()) {
            const indexPath = path.join(filePath, 'index.html');
            fs.access(indexPath, fs.constants.R_OK, (err) => {
                if (!err) {
                    serveFile(indexPath, res);
                } else {
                    res.writeHead(403, { 'Content-Type': 'text/plain' });
                    res.end('Directory listing not allowed');
                }
            });
        } else {
            serveFile(filePath, res);
        }
    });
});

// Serve a file with proper headers
function serveFile(filePath, res) {
    const mimeType = getMimeType(filePath);
    const isImage = mimeType.startsWith('image/');
    
    // Set headers for caching (1 year for images, no cache for HTML)
    const headers = {
        'Content-Type': mimeType,
        'X-Content-Type-Options': 'nosniff'
    };

    if (isImage) {
        // Cache images for 1 year
        headers['Cache-Control'] = 'public, max-age=31536000, immutable';
    } else if (mimeType === 'text/html') {
        // Don't cache HTML
        headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
        headers['Pragma'] = 'no-cache';
        headers['Expires'] = '0';
    } else {
        // Cache other assets for 1 hour
        headers['Cache-Control'] = 'public, max-age=3600';
    }

    // Read and serve the file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error reading file');
            return;
        }

        res.writeHead(200, headers);
        res.end(data);
    });
}

// Start the server
server.listen(PORT, HOST, () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   ██████╗ ███████╗██████╗     ██████╗ ███╗   ██╗███████╗  ║
║   ██╔══██╗██╔════╝██╔══██╗   ██╔═══██╗████╗  ██║██╔════╝  ║
║   ██████╔╝█████╗  ██████╔╝   ██║   ██║██╔██╗ ██║█████╗    ║
║   ██╔══██╗██╔══╝  ██╔═══╝    ██║   ██║██║╚██╗██║██╔══╝    ║
║   ██║  ██║███████╗██║        ╚██████╔╝██║ ╚████║███████╗  ║
║   ╚═╝  ╚═╝╚══════╝╚═╝         ╚═════╝ ╚═╝  ╚═══╝╚══════╝  ║
║                                                            ║
║   Elite Strength Training Experience                       ║
║                                                            ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║   Server running at: http://${HOST}:${PORT}                   ║
║                                                            ║
║   Press Ctrl+C to stop                                     ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
    `);
});

// Handle server errors
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`\nError: Port ${PORT} is already in use.`);
        console.error('Please try a different port or close the application using that port.\n');
    } else {
        console.error('Server error:', err);
    }
    process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n\nShutting down REP ONE server...');
    server.close(() => {
        console.log('Server closed. Goodbye!');
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    console.log('\nReceived SIGTERM. Shutting down gracefully...');
    server.close(() => {
        process.exit(0);
    });
});
