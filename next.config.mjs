/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  unoptimized: true
	},
	output: 'export',
	experimental: {
	  plugins: [
		{
		  name: 'next-sitemap',
		  options: {
			config: './next-sitemap.config.js',
		  },
		},
		{
		  name: 'next-robots',
		  options: {
			policy: [
			  {
				userAgent: '*',
				disallow: ['/private', '/admin'],
				sitemap: 'https://rayonweb.com/sitemap.xml',
			  },
			],
		  },
		},
		{
			name: 'google-analytics',
			options: {
			  gaId: 'G-07YQHLNN77', // Replace with your GA4 tracking ID
			  link: 'https://www.googletagmanager.com/gtag/js?id=G-07YQHLNN77', // Add this line
			},
		  },
	  ],
	},
  };
  
  export default nextConfig;