import Sub from "./page/Sub";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      메인
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="sub" element={<Sub />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
