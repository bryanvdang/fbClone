// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
const path = require("path");

module.exports = {
  images: {
    domains: [
      "links.papareact.com",
      "platform-looaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "res.cloudinary.com",
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
