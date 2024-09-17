import { Provider } from "react-redux";
import { store } from "./store";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-[url('/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner.jpg')] bg-cover bg-center min-h-screen">
        <Dashboard></Dashboard>
      </div>
    </Provider>
  );
}

export default App;
