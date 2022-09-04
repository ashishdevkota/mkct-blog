import Home from "./container/Home";
import Nav from "./container/Nav";
import Create from "./container/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./container/Blog";
import NotFound from "./container/NotFound";

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
