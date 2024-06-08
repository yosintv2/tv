(function() {
    // The domains you want to allow
    const allowedDomains = ["yosin-tv.net", "livee.singhyogendra.com.np", "yosintv.net"];

    // Get the current URL
    const currentUrl = window.location.hostname;

    // Check if the current URL matches any of the allowed domains
    const isAllowed = allowedDomains.some(domain => currentUrl === domain || currentUrl === `www.${domain}`);

    // If the current URL is not allowed, redirect to the main allowed domain
    if (!isAllowed) {
        window.location.href = `https://${allowedDomains[0]}`;
    }
})();
