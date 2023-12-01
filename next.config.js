/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

const nextConfig = withNextIntl({
  images: {
    remotePatterns: [{
      hostname: "picsum.photos"
    }, {
      hostname: "loremflickr.com"
    }]
  }
})

module.exports = nextConfig
