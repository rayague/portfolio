/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://portfolio-cnkp.vercel.app',
    generateRobotsTxt: true,
    exclude: ['/blog', '/form', '/home', '/api/*', '/posts/*'],
    outDir: './public',
  };
