// src/pages/CaseStudiesPage.tsx
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "How a Small Retail Business Got ₹25 Lakhs in 48 Hours",
    client: "Shree Fashion House, Surat",
    excerpt:
      "Facing inventory shortage during Diwali season, this family-run retail store needed quick funds. With our help, they secured a working capital loan at 11.5% interest and scaled sales by 80%.",
    date: "December 2025",
    outcome: "80% sales growth, Zero rejections",
    image: "/images/case-studies/retail-success.jpg",
    category: "Working Capital Loan",
    slug: "/case-studies/retail-business-48-hours",
  },
  {
    id: 2,
    title: "From Rejection to Approval: ₹50 Lakhs Home Loan for a Salaried Professional",
    client: "Rahul Sharma, IT Engineer, Bangalore",
    excerpt:
      "Despite 3 previous rejections due to CIBIL issues, we helped Rahul improve his score and get a ₹50 Lakhs home loan approved at 8.75% interest in just 12 days.",
    date: "November 2025",
    outcome: "Lowest rate secured, Home purchased",
    image: "/images/case-studies/home-loan-success.jpg",
    category: "Home Loan",
    slug: "/case-studies/home-loan-after-rejections",
  },
  {
    id: 3,
    title: "Scaling a Manufacturing Unit with ₹40 Lakhs Equipment Financing",
    client: "Precision Tools Pvt Ltd, Pune",
    excerpt:
      "Needed new CNC machines to meet rising demand. We arranged equipment financing with zero collateral at 12% interest — production capacity doubled in 6 months.",
    date: "October 2025",
    outcome: "100% capacity increase, No upfront cash used",
    image: "/images/case-studies/manufacturing-growth.jpg",
    category: "Equipment Financing",
    slug: "/case-studies/manufacturing-equipment-finance",
  },
  {
    id: 4,
    title: "Loan Against Securities: ₹35 Lakhs Without Selling Investments",
    client: "Anjali Mehta, Mutual Fund Investor, Mumbai",
    excerpt:
      "Urgent medical emergency — instead of redeeming mutual funds, we helped her get ₹35 Lakhs against her portfolio at 9.75% interest while investments kept growing.",
    date: "September 2025",
    outcome: "Saved ₹8 Lakhs in taxes & gains, Emergency handled",
    image: "/images/case-studies/las-medical-emergency.jpg",
    category: "Loan Against Securities",
    slug: "/case-studies/loan-against-securities-emergency",
  },
  {
    id: 5,
    title: "Business Expansion: ₹60 Lakhs Term Loan for New Branch",
    client: "Urban Eats Restaurant Chain, Delhi",
    excerpt:
      "Wanted to open 3 new outlets. We guided them through documentation and got a term loan approved at 12.25% interest — all branches operational within 4 months.",
    date: "August 2025",
    outcome: "3 new outlets, 120% revenue growth",
    image: "/images/case-studies/restaurant-expansion.jpg",
    category: "Term Loan",
    slug: "/case-studies/term-loan-restaurant-expansion",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#E5E7EB] min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/case-studies-pattern.png')] opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="amplessoft text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real stories of how we helped individuals and businesses get the right loan — faster, cheaper, and with zero hassle.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-[#0B0E14]/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-sm text-gray-500 mb-2">
                    {study.date} • {study.outcome}
                  </span>

                  <h3 className="amplessoft text-2xl font-bold text-[#0B0E14] mb-4 line-clamp-2">
                    {study.title}
                  </h3>

                  <p className="text-gray-700 mb-6 line-clamp-3 flex-grow">
                    {study.excerpt}
                  </p>

                  <Link
                    to={study.slug}
                    className="
                      inline-flex items-center
                      text-[#0B0E14]
                      font-semibold
                      hover:text-black
                      transition-colors
                      mt-auto
                    "
                  >
                    Read Full Case Study →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination (Optional - can be made dynamic later) */}
          <div className="flex justify-center items-center gap-6 mt-16">
            <button 
              className="px-6 py-3 rounded-full bg-[#0B0E14] text-white hover:bg-black transition-colors disabled:opacity-50" 
              disabled
            >
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
            Ready for Your Success Story?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Compare 30+ lenders. Get the lowest rates. Apply in minutes — all free.
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