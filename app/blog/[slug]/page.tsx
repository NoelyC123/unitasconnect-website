import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { posts } from "@/lib/posts";
import { postContent } from "@/lib/post-content";
import "../blog.css";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | UnitasConnect`,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = postContent[slug];

  return (
    <>
      <Nav />
      <main style={{ backgroundColor: "#f8f4ee" }}>
        {/* Header */}
        <section
          className="pt-32 pb-16 px-6"
          style={{ backgroundColor: "#1a1f2e" }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <a
                href="/blog"
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: "#6b7f95" }}
              >
                ← Blog
              </a>
              <span style={{ color: "#2d3a50" }}>/</span>
              <span
                className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(201,146,58,0.15)", color: "#c9923a" }}
              >
                {post.category}
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
              style={{ color: "#f8f4ee" }}
            >
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm" style={{ color: "#6b7f95" }}>
              <span>Noel Collins · UnitasConnect</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="blog-content">{content}</div>

            {/* CTA */}
            <div
              className="mt-16 p-8 rounded-xl"
              style={{ backgroundColor: "#1a1f2e" }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9923a" }}>
                Need Support?
              </p>
              <p className="text-xl font-bold mb-3" style={{ color: "#f8f4ee" }}>
                Let&apos;s talk about your funding or strategy goals.
              </p>
              <p className="text-base mb-6" style={{ color: "#a8b4c4" }}>
                Discovery calls are free. No commitment, no pressure — just an
                honest conversation about what would help your organisation.
              </p>
              <a
                href="https://calendly.com/unitasconnect/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded transition-all hover:opacity-90"
                style={{ backgroundColor: "#c9923a", color: "#1a1f2e" }}
              >
                Book a Free Discovery Call
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
