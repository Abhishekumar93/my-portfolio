module.exports = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nzsknibxyflthgequfpt.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/my-portfolio/**",
      },
    ],
  },
};
