const puppeteer = (await import("puppeteer")).default;

const browser = await puppeteer.launch({
    headless: false,
    args: [
        "--ignore-certificate-errors",
        //     '--allow-external-pages',
        //     '--allow-third-party-modules',
        //     '--data-reduction-proxy-http-proxies',
        //     '--no-sandbox'
    ],
});

export default browser;
