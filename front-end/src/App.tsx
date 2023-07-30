import HomePage from "./pages/home-page/homePage";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App dark:bg-dark">
      <CartProvider>
        <FilterProvider>
          <HomePage />
        </FilterProvider>
      </CartProvider>
    </div>
  );
}

export default App;
