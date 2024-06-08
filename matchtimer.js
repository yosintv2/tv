(function() {
    // The domains you want to allow
    const allowedDomains = ["yosintv9999.blogspot.com", "40.reducemyweight.net", "anotherdomain.com"];

    // Get the current URL
    const currentUrl = window.location.hostname;

    // Check if the current URL matches any of the allowed domains
    const isAllowed = allowedDomains.some(domain => currentUrl === domain || currentUrl === `www.${domain}`);

    // If the current URL is not allowed, redirect to google.com
    if (!isAllowed) {
        window.location.href = "https://www.google.com";
    }
})();
