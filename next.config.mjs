/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  unoptimized: true,  // Disable built-in image optimization if not needed
	},
	output: 'export',  // For static exports
	webpack: (config) => {
	  // Modify webpack config here
	  config.parallelism = 2;  // Set Webpack to use 2 parallel threads (or adjust as needed)
	  return config;
	},
  };
  
  export default nextConfig;
  