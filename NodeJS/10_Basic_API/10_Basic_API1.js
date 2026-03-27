// 10_Basic_API1.js

const http = require('http');
const products = require('./data1');
//const data = require('./data1').default; 

http.createServer((req, resp) => {

    resp.writeHead(200, {'Content-Type': 'application\json'});

    resp.write(JSON.stringify(products));

    resp.end();
}).listen(6009);




// nodemon .\10_Basic_API1.js

// http://localhost:6009/



// Categories of HTTP Status Codes
    // 1xx: Informational
    // These codes indicate that the server has received the request and is continuing to process it.

    // 2xx: Success
    // These codes indicate that the client’s request was successfully received, understood, and processed.

    // 3xx: Redirection
    // These codes indicate that the client must take additional action to complete the request (e.g., being redirected to another URL).

    // 4xx: Client Error
    // These codes indicate that the client made a mistake, such as providing incorrect data or requesting a non-existent resource.

    // 5xx: Server Error
    // These codes indicate that the server encountered an error while processing the request.

// Common HTTP Status Codes in Detail
    // 1xx: Informational
        // 100 Continue:
        // The server has received the initial part of the request and the client should continue sending the rest.
        // Example:
        // A client sends a large file and checks if the server is ready to accept it.

    // 2xx: Success
        // 200 OK:
        // The request was successful, and the server is responding with the requested resource.
        // Example: A successful GET request for a webpage or API endpoint.

        // 201 Created:
        // The request was successful, and a new resource was created.
        // Example: Creating a new user in a database with a POST request.

        // 202 Accepted:
        // The server has accepted the request but has not yet processed it.
        // Example: Submitting a job for background processing, like uploading a video for later encoding.

        // 204 No Content:
        // The request was successful, but the server has nothing to send back.
        // Example: Successfully deleting a resource but not returning any content.

    // 3xx: Redirection
        // 301 Moved Permanently:
        // The requested resource has been permanently moved to a new URL.
        // Example: Redirecting from http://example.com to https://example.com.

        // 302 Found:
        // The requested resource is temporarily available at a different URL.
        // Example: Redirecting users during website maintenance.

        // 304 Not Modified:
        // Indicates that the resource has not changed since the last request.
        // Example: Used with caching to reduce bandwidth usage.

    // 4xx: Client Error
        // 400 Bad Request:
        // The server cannot process the request due to invalid syntax.
        // Example: Sending malformed JSON in an API request.

        // 401 Unauthorized:
        // Authentication is required, and the client has not provided valid credentials.
        // Example: Accessing a protected API without a valid token.

        // 403 Forbidden:
        // The client is not allowed to access the resource, even if authenticated.
        // Example: Trying to delete a resource without proper permissions.

        // 404 Not Found:
        // The requested resource could not be found on the server.
        // Example: Accessing a non-existent webpage or API endpoint.

        // 405 Method Not Allowed:
        // The HTTP method used is not supported for the requested resource.
        // Example: Sending a POST request to an endpoint that only supports GET.

    // 5xx: Server Error
        // 500 Internal Server Error:
        // The server encountered an unexpected condition that prevented it from fulfilling the request.
        // Example: A bug in server-side code causes the request to fail.

        // 502 Bad Gateway:
        // The server received an invalid response from an upstream server.
        // Example: A proxy server is unable to connect to a backend server.

        // 503 Service Unavailable:
        // The server is temporarily unable to handle the request (e.g., overloaded or under maintenance).
        // Example: A website is down due to high traffic.

        // 504 Gateway Timeout:
        // The server did not receive a response from an upstream server in time.
        // Example: A load balancer times out while waiting for a backend service to respond.