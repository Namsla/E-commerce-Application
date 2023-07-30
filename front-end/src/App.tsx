import HomePage from "./pages/home-page/homePage";
import { FilterProvider } from "./context/filter-context";

function App() {
  return (
    <div className="App dark:bg-dark">
      <FilterProvider>
        <HomePage />
      </FilterProvider>
    </div>
  );
}

export default App;
