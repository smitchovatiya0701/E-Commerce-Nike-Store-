import "./App.css";
import { Hero ,Sales,FlexContent ,Stories, Footer, Navbar, Cart} from "./component/inddex";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,footerAPI
} from "./data/data";
// api
//  import useProductInfo from './custumhook/useProductInfo'

function App() {
  // api
  // const products = useProductInfo()

  return (
    <>
     <Navbar/>
     <Cart/>
      <main className=" flex flex-col gap-16 relative">
        {/* api   <Hero products ={products}/> */}
       
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight}  ifExists/>
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story}/>
        <Footer footerAPI={footerAPI}/>
      
      </main>
    </>
  );
}

export default App;
