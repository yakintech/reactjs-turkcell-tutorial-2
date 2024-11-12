import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Suppliers from "./pages/Suppliers";
import SupplierDetail from "./pages/SupplierDetail";
import StateIntro from "./state/StateIntro";
import StateIntro2 from "./state/StateIntro2";
import StateIntro3 from "./state/StateIntro3";
import SuppliersTable from "./state/SuppliersTable";
import ProductsTable from "./state/ProductsTable";

function App() {


  return <ProductsTable />


  return <>
    <nav>
      <ul style={{display:'flex', justifyContent:'space-between'}}>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        <li><Link to={'/suppliers'}>Suppliers</Link></li>

      </ul>
    </nav>
    <hr />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/suppliers/:id" element={<SupplierDetail />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
    <hr />
    <p>Site Footer</p>
  </>
}

export default App;
