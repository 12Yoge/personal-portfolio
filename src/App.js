import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "containers/Home";

import "styles/common.scss";
import ScrollOnTop from "components/ScrollOnTop/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollOnTop>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ScrollOnTop>
      </BrowserRouter>
    </>
  );
};

export default App;
