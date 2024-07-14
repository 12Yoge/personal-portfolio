import About from "components/About/index";
import Header from "components/Header";
import Projects from "components/Projects/index";

import Banner from "containers/Home/Banner";

import "containers/Home/home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Projects />
    </>
  );
};

export default Home;
