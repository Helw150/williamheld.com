module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "William Held • Software Engineer • New York University Abu Dhabi", // Site title.
  siteTitleAlt: "William Held", // Alternative site title for SEO.
  siteLogo: "/logos/logo.png", // Logo used for SEO and manifest.
  siteUrl: "williamheld.com", // Domain of your website without pathPrefix.
  pathPrefix: "/williamheld.com", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "William Held is a software engineer and student at New York University Abu Dhabi. His experience is focused in the areas of data driven Natural Language Processing and building User Interfaces in Facebook's React. He graduates in 2019 and will be pursuing jobs in data science and product management roles.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-105844685-1", // GA tracking ID.
  disqusShortname: "williamheld-com", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "William Held", // Username to display in the author segment.
  userTwitter: "WilliamBarrHeld", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "New York, New York", // User location to display in the author segment.
  userAvatar:
    "https://pbs.twimg.com/profile_images/984461647162077184/kT0LBxty_400x400.jpg", // User avatar to display in the author segment.
  userDescription:
    "William Held is a software engineer and student at New York University Abu Dhabi. His experience is focused in the areas of data driven Natural Language Processing and building User Interfaces in Facebook's React.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Helw150",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/WilliamBarrHeld",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:me@williamheld.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. William Held", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
