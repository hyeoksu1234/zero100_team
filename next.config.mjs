const repoName = "zero100_team";

const rawBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? repoName : "");

const repoBase = rawBasePath
  ? `/${rawBasePath.replace(/^\/|\/$/g, "")}`
  : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  ...(repoBase && {
    basePath: repoBase,
    assetPrefix: repoBase
  })
};

export default nextConfig;
