(function() {
    // The domains you want to allow
    const allowedDomains = ["www.yosin-tv.net", "livee.singhyogendra.com.np", "www.yosintv.net", "yosintv9999.blogspot.com"];

    // Get the current URL
    const currentUrl = window.location.hostname;

    // Check if the current URL matches any of the allowed domains
    const isAllowed = allowedDomains.some(domain => currentUrl === domain || currentUrl === `www.${domain}`);

    // If the current URL is not allowed, redirect to the main allowed domain
    if (!isAllowed) {
        window.location.href = `https://${allowedDomains[0]}`;
    }
})();
