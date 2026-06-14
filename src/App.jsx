import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import Cart from "./components/Cart";
import Formulario from "./components/Formulario";
import FormularioLogin from "./components/Formulario-login";

function App() {
  return (
    <div>
      <Navbar />
     {/*  <Home /> */}
      <Pizza />
      {/* <Formulario /> */}
      {/* <FormularioLogin /> */}
      {/* <Cart /> */}
      <Footer />
    </div>
  );
}

export default App;
