import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

import ScrollProgress from "./ScrollProgress";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="header-shim position-relative">
      <ScrollProgress />
      </div>
      
      {children}
      <Footer />
    </div>
  );
}