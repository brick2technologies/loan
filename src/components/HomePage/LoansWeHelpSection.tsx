import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  User,
  Home,
  HeartPulse,
  Coins,
  GraduationCap,
  Car,
} from "lucide-react";

const loans = [
  {
    title: "Personal Loan",
    description: "Flexible loans for personal needs with quick approvals.",
    icon: User,
    col: "lg:col-span-4",
    row: "lg:row-span-2",
    path: "/personal-loan",
  },
  {
    title: "Vehicle Loan",
    description: "Easy financing for new or used vehicles.",
    icon: Car,
    col: "lg:col-span-4",
    row: "lg:row-span-1",
    path: "/vehicle-loan",
  },
  {
    title: "Home Loan",
    description: "Affordable financing to buy or build your dream home.",
    icon: Home,
    col: "lg:col-span-4",
    row: "lg:row-span-2",
    path: "/home-loan",
  },
  {
    title: "Medical Loan",
    description: "Instant funding for medical emergencies and treatments.",
    icon: HeartPulse,
    col: "lg:col-span-4",
    row: "lg:row-span-1",
    path: "/medical-loan",
  },
  {
    title: "Gold Loan",
    description: "Unlock the value of your gold with secure lending.",
    icon: Coins,
    col: "lg:col-span-6",
    row: "lg:row-span-1",
    path: "/gold-loan",
  },
  {
    title: "Education Loan",
    description: "Support higher education with student-friendly loans.",
    icon: GraduationCap,
    col: "lg:col-span-6",
    row: "lg:row-span-1",
    path: "/education-loan",
  },
];

export default function LoansGridSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#E5E7EB] py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 rounded-full bg-black/5 px-4 py-1 text-xs uppercase tracking-widest text-gray-600">
            Loans We Help With
          </span>

          <h2 className="amplessoft text-4xl lg:text-5xl font-semibold text-gray-900">
            Loan Solutions for Every Need
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Transparent, flexible, and fast loan solutions.
          </p>
        </div>

        {/* ================= BENTO GRID ================= */}
        <motion.div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-12
            gap-6
            auto-rows-[240px]
          "
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {loans.map((loan, index) => {
            const Icon = loan.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className={`${loan.col} ${loan.row} cursor-pointer`}
                onClick={() => navigate(loan.path)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && navigate(loan.path)
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="metallic-border h-full w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white hover:shadow-2xl transition-shadow duration-300">
                  <div className="h-full w-full border border-black/10 rounded-3xl p-6 flex flex-col justify-between">

                    {/* ICON */}
                    <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center">
                      <Icon size={22} className="text-gray-900" />
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h3 className="amplessoft mt-6 text-xl font-semibold text-gray-900">
                        {loan.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {loan.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <span className="text-sm font-medium text-gray-800">
                      Learn more →
                    </span>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ================= FOOT CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-sm font-medium text-gray-800">
            Not sure which loan suits you?{" "}
            <span className="font-semibold">We’ll guide you.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
