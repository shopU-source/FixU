import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./home/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container top-0 z-10">
        <Header />
      </div>
      <div className="flex-grow !mb-4">
        <HomePage />
      </div>
      <div className="bg-purple-300">
        <Footer />
      </div>
    </div>
  );
}
