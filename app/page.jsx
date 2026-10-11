import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Book from "../components/Book";
import Profile from "../components/Profile";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-[1120px] px-5">
        <Nav />
        <main>
          <Hero />
          <Book />
          <Profile />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
