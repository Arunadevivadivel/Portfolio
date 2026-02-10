import { ArrowRight } from "lucide-react";
import blogUxTrust from "@/assets/blog-ux-trust.jpg";
import blogUiMistakes from "@/assets/blog-ui-mistakes.jpg";
import blogDesignProcess from "@/assets/blog-design-process.jpg";

const posts = [
  {
    image: blogUxTrust,
    category: "UI/UX",
    title: "How Good UX Improves User Trust",
    description: "Explore how thoughtful design decisions build credibility and keep users coming back.",
  },
  {
    image: blogUiMistakes,
    category: "Design Tips",
    title: "UI Design Mistakes to Avoid",
    description: "Common pitfalls that hurt usability and how to fix them in your next project.",
  },
  {
    image: blogDesignProcess,
    category: "Case Study",
    title: "My Process for Designing User-Centered Apps",
    description: "A step-by-step look at how I approach every design challenge from research to delivery.",
  },
];

const categoryColors: Record<string, string> = {
  "UI/UX": "bg-primary text-primary-foreground",
  "Design Tips": "bg-accent text-accent-foreground",
  "Case Study": "bg-secondary text-secondary-foreground",
};

const Blog = () => {
  return (
    <section id="blog" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="section-label mb-3 block">Blog</span>
          <h2 className="section-title max-w-lg">
            Design Insights &amp; Articles
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category]}`}
                >
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-warm-brown transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {post.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-warm-brown transition-colors"
                >
                  Read More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="#" className="btn-outline inline-block">
            View All Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
