import { Provider } from "react-redux";
import { store } from "./store";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Provider store={store}>
      <Dashboard></Dashboard>
    </Provider>
  );
}

export default App;
