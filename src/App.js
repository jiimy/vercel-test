import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Sub from './page/Sub';
import "./App.css";

function App() {
  return (
    <div className="App">
        메인
      <Routes>
        <Route path={'/sub'} element={<Sub />} />
      </Routes>
    </div>
  );
}

export default App;
