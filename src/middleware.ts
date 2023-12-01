import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ch"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(delen)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
