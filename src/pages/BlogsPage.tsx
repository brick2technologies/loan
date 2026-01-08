// src/pages/BlogsPage.tsx
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Personal Loan in 2026 – Complete Guide",
    excerpt:
      "With interest rates fluctuating and new RBI guidelines in place, here's everything you need to know before applying for a personal loan this year.",
    date: "January 05, 2026",
    readTime: "8 min read",
    image: "/images/blog/personal-loan-guide.jpg",
    category: "Personal Loan",
    slug: "/blog/how-to-choose-personal-loan-2026",
  },
  {
    id: 2,
    title: "Business Loan vs Working Capital Loan: Which One is Right for You?",
    excerpt:
      "Confused between a term loan and working capital loan? We break down the differences, use cases, and eligibility so you can make the best choice.",
    date: "December 28, 2025",
    readTime: "6 min read",
    image: "/images/blog/business-vs-working-capital.jpg",
    category: "Business Loan",
    slug: "/blog/business-loan-vs-working-capital",
  },
  {
    id: 3,
    title: "Loan Against Securities: A Smart Way to Get Funds Without Selling Investments",
    excerpt:
      "Learn how you can borrow against your shares & mutual funds at low rates while your portfolio continues to grow.",
    date: "December 15, 2025",
    readTime: "7 min read",
    image: "/images/blog/loan-against-securities.jpg",
    category: "Loan Against Securities",
    slug: "/blog/loan-against-securities-guide",
  },
  {
    id: 4,
    title: "Home Loan Interest Rates in 2026: What to Expect & How to Get the Lowest Rate",
    excerpt:
      "Latest trends, RBI updates, and expert tips to secure the best home loan deal in the current market.",
    date: "January 01, 2026",
    readTime: "10 min read",
    image: "/images/blog/home-loan-rates-2026.jpg",
    category: "Home Loan",
    slug: "/blog/home-loan-rates-2026",
  },
  {
    id: 5,
    title: "Top 7 Mistakes to Avoid When Applying for a Business Loan",
    excerpt:
      "Common errors that lead to rejection and how you can improve your chances of approval.",
    date: "November 20, 2025",
    readTime: "5 min read",
    image: "/images/blog/business-loan-mistakes.jpg",
    category: "Business Loan",
    slug: "/blog/business-loan-mistakes",
  },
  {
    id: 6,
    title: "Equipment Financing: Why It’s Better Than Paying Cash for Machinery",
    excerpt:
      "Discover the benefits of financing machinery instead of using business capital – with real examples.",
    date: "October 30, 2025",
    readTime: "6 min read",
    image: "/images/blog/equipment-financing-benefits.jpg",
    category: "Equipment Financing",
    slug: "/blog/equipment-financing-benefits",
  },
];

export default function BlogsPage() {
  return (
    <main className="bg-[#E5E7EB] min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/blog-pattern.png')] opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="amplessoft text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Latest insights, tips, and guides to help you choose and manage the right loan for your needs.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-[#0B0E14]/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-sm text-gray-500 mb-2">
                    {post.date} • {post.readTime}
                  </span>

                  <h3 className="amplessoft text-2xl font-bold text-[#0B0E14] mb-4 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-700 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <Link
                    to={post.slug}
                    className="
                      inline-flex items-center
                      text-[#0B0E14]
                      font-semibold
                      hover:text-black
                      transition-colors
                      mt-auto
                    "
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination (Optional - you can make it dynamic later) */}
          <div className="flex justify-center items-center gap-6 mt-16">
            <button className="px-6 py-3 rounded-full bg-[#0B0E14] text-white hover:bg-black transition-colors disabled:opacity-50" disabled>
              Previous
            </button>
            <span className="text-lg font-semibold text-[#0B0E14]">Page 1 of 3</span>
            <button className="px-6 py-3 rounded-full bg-[#0B0E14] text-white hover:bg-black transition-colors">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0F172A] to-[#1E2937] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold mb-8">
            Need Help Choosing the Right Loan?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Compare 30+ lenders instantly. Get the lowest rates. Apply in minutes — all free.
          </p>
          <Link
            to="/"
            className="
              inline-block
              bg-white
              hover:bg-gray-100
              text-[#0B0E14]
              font-bold
              text-lg
              px-12
              py-5
              rounded-xl
              shadow-lg
              transition-all
              transform
              hover:scale-105
            "
          >
            Compare Loans Now →
          </Link>
        </div>
      </section>
    </main>
  );
}