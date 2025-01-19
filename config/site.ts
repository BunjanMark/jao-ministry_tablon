export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Ministries",
      href: "/ministries",
    },
    {
      label: "Sermons",
      href: "/sermons",
    },
    {
      label: "Get Involved",
      href: "/getinvolved",
    },
    {
      label: "About Us",
      href: "/about-us",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Test",
      href: "/blog",
    },
    {
      label: "About Us",
      href: "/about-us",
    },
  ],
  links: {
    github: "https://github.com/BunjanMark/jao-ministry_tablon",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://www.facebook.com/Notsosho/",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://www.facebook.com/profile.php?id=100090955667788&sk=about",
  },
};
