import Categories from "./propSample/Categories";
import { categoriesData } from "./data/categoriesData";
import ProductBox from "./propSample/ProductBox";


function App() {


  return <>
    <Categories categoriesData={categoriesData} />
    <ProductBox title="Product 1" price={100} image="https://via.placeholder.com/150" description="Description 1" points={["point 1", "point 2", "point 3"]} hello={() => alert("Hello")} />
  </>
}

export default App;
