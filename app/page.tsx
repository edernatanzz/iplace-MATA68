import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/modulos";
import Team from "./components/team";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
            <Header />
            <Hero />
            <Features />
            <Team />
            <Contact />
            <Footer />
        </div>
  );
}
