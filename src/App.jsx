import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails"
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>

      <Route element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />

      </Route>
    </Routes>
  );
}

export default App;