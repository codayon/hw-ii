import { Routes, Route } from "react-router";
import "./App.css";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Lookbook from "./pages/Lookbook";
import Pages from "./pages/Pages";
import Shop from "./pages/Shop";
import RootLayout from "./components/layouts/RootLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="collection" element={<Collection />} />
        <Route path="journal" element={<Journal />} />
        <Route path="lookbook" element={<Lookbook />} />
        <Route path="pages" element={<Pages />} />
      </Route>
    </Routes>
  );
}

export default App;
