module.exports = {
    // The target site URL
    siteUrl: 'https://www.rayonweb.com',
    // The sitemap filename
    sitemapFilename: 'sitemap.xml',
    // The number of URLs per sitemap file
    chunkSize: 10000,
    // The sitemap index filename
    sitemapIndexFilename: 'sitemap-index.xml',
    // The robots.txt filename
    robotsTxtFilename: 'robots.txt',
    // The generate function
    generate: async (params) => {
      // You can use the `params` object to access the `siteUrl` and other config options
      // Return an array of URLs to include in the sitemap
      return [
        {
          loc: `${params.siteUrl}/`,
          lastmod: new Date().toISOString(),
          changefreq: 'daily',
          priority: 1,
        },
        {
          loc: `${params.siteUrl}/about`,
          lastmod: new Date().toISOString(),
          changefreq: 'weekly',
          priority: 0.8,
        },
        {
            loc: `${params.siteUrl}/service`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: 0.8,
          },
          {
            loc: `${params.siteUrl}/portfolio`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: 0.8,
          },
          {
            loc: `${params.siteUrl}/contact`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: 0.8,
          },
          {
            loc: `${params.siteUrl}/career`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: 0.8,
          },
        // Add more URLs as needed
      ];
    },
  };