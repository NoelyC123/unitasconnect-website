import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | UnitasConnect — Funding & Strategy Insights",
  description:
    "Practical advice on grant writing, bid writing, strategic planning and more for VCSEs, SMEs and community organisations across the UK.",
};

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: "#f8f4ee" }}>
        {/* Header */}
        <section
          className="pt-32 pb-16 px-6"
          style={{ backgroundColor: "#1a1f2e" }}
        >
          <div className="max-w-6xl mx-auto">
            <AnimateIn>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9923a" }}>
                Insights
              </p>
              <h1 className="text-5xl font-bold mb-5" style={{ color: "#f8f4ee" }}>
                The UnitasConnect Blog
              </h1>
              <p className="text-lg max-w-xl" style={{ color: "#a8b4c4" }}>
                Practical guidance on funding, strategy, procurement, and
                governance — written for the people running VCSEs, SMEs, and
                community organisations.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <AnimateIn key={post.slug} delay={i * 80}>
                  <a
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col gap-4 p-8 rounded-xl h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #ece6dd",
                    }}
                  >
                    {/* Category + read time */}
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: "rgba(201,146,58,0.1)",
                          color: "#c9923a",
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs" style={{ color: "#9aa8b4" }}>
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      className="text-xl font-bold leading-snug flex-1 group-hover:opacity-80 transition-opacity"
                      style={{ color: "#1a1f2e" }}
                    >
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div
                      className="flex items-center justify-between pt-4 text-xs"
                      style={{ borderTop: "1px solid #f0ebe3", color: "#9aa8b4" }}
                    >
                      <span>{post.date}</span>
                      <span className="font-medium" style={{ color: "#c9923a" }}>
                        Read more →
                      </span>
                    </div>
                  </a>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
