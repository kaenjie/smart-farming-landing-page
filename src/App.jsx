import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ProblemSolution from "./components/ProblemSolution";
import Features from "./components/Features";
import AboutContact from "./components/AboutContact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-ink-900 dark:bg-navy-950 dark:text-white">
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <ProblemSolution />
          <Features />
          <AboutContact />
          <FAQ />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
