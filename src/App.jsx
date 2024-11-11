import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import JsxEvents from "./jsxSample/JsxEvents";
import Product from "./jsxSample/Product";
import Users from "./jsxSample/Users";

function App() {

  return <>
    <SiteHeader />
    <hr />
    <Users />
    <Product />
    <JsxEvents />
    <hr />
    <SiteFooter />
  </>
}

export default App;
