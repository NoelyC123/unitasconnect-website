export interface Post {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
}

export const posts: Post[] = [
  {
    slug: "the-hidden-cost-of-grant-applications",
    title: "The Hidden Cost of Grant Applications",
    date: "19 March 2026",
    readTime: "5 min read",
    category: "Strategy",
    excerpt:
      "Applying for grants isn't free. Staff time, opportunity cost, and repeated rejections add up fast. Here's how to decide which opportunities are actually worth pursuing.",
  },
  {
    slug: "how-to-write-a-successful-grant-application",
    title: "How to Write a Successful Grant Application: A Practical Guide",
    date: "13 March 2026",
    readTime: "7 min read",
    category: "Grant Writing",
    excerpt:
      "Most grant applications fail not because the project isn't worthy — but because the application doesn't clearly answer what the funder is asking. Here's how to get it right.",
  },
];
