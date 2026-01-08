import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PersonalLoanPage from "./pages/PersonalLoanPage";
import HomeLoanPage from "./pages/HomeLoanPage";
import VehicleLoanPage from "./pages/VehicleLoan";
import ScrollToTop from "./components/ScrollToTop";
import MedicalLoanPage from "./pages/MedicalLoanPage";
import EducationLoanPage from "./pages/EducationLoanPage";
import GoldLoanPage from "./pages/GoldLoanPage";
import BusinessLoanPage from "./pages/BusinessLoanPage";
import WorkingCapitalLoanPage from "./pages/WorkingCapitalLoanPage";
import TermLoanPage from "./pages/TermLoanPage";
import EquipmentFinancingPage from "./pages/EquipmentLoanPage";
import ConstructionFinancingPage from "./pages/ConstructionFinancingPage";
import LoanAgainstSecuritiesPage from "./pages/LoanAgainstSecuritiesPage";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogsPage from "./pages/BlogsPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
// import ScrollResetAndGSAPCleanup from "./components/ScrollResetAndGSAPCleanup";

export default function App() {
  return (
    <>
    {/* <ScrollResetAndGSAPCleanup /> */}
      <Navbar />
      <ScrollToTop />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal-loan" element={<PersonalLoanPage />} />
          <Route path="/home-loan" element={<HomeLoanPage />}/>
          <Route path="/vehicle-loan" element={<VehicleLoanPage />}/>
          <Route path="/medical-loan" element={<MedicalLoanPage />}/>
          <Route path="/education-loan" element={<EducationLoanPage />}/>
          <Route path="/gold-loan" element={<GoldLoanPage />}/> 
          <Route path="/business-loan" element={<BusinessLoanPage />}/>
          <Route path="/working-capital-loan" element={<WorkingCapitalLoanPage />}/>
          <Route path="/term-loan" element={<TermLoanPage />}/>
          <Route path="/equipment-loan" element={<EquipmentFinancingPage />}/>
          <Route path="/construction-financing" element={<ConstructionFinancingPage />}/>
          <Route path="/loan-against-securities" element={<LoanAgainstSecuritiesPage />}/> 


          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />


        </Routes>
      </main>

      <Footer />
    </>
  );
}
