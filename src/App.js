import Sub from "./page/Sub";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "components/Footer";

function App() {
  return (
    <div className="App">
      메인
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<NavigatePost />}>
          <Route path="sub" element={<Sub />} />
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

const NavigatePost = () => {
  return (
    <>
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
