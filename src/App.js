import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "containers/Home";

import "styles/common.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
