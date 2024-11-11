import ProductBox from "./propSample/ProductBox";



function App() {

  const hello = () => {
    alert("Hello")
  }

  return <>
    <ProductBox title="IPhone" price={1000} image="https://m.media-amazon.com/images/I/51PTXV+qkQL._AC_UF1000,1000_QL80_.jpg" description="Apple product" points={[4,3,5,5]} hello={hello} />

    <ProductBox title="Samsung" price={2000} image="https://m.media-amazon.com/images/I/51PTXV+qkQL._AC_UF1000,1000_QL80_.jpg" description="Samsung product"  hello={hello}  />
  </>
}

export default App;
