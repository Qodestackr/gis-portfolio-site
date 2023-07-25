import {
  Contact,
  Footer,
  Header,
  Skills,
} from "../../components";

function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
