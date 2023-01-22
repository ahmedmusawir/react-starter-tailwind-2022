import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1 className="text-moose text-7xl">React Starter w/ Tailwind</h1>
          <Link to="/">Home</Link>
          <Link to="/page-one">Page One</Link>
          <Link to="/page-two">Page Two</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
