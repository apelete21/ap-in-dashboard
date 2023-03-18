import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import { AppContextProvider } from "./Contexts/AppContext";
import "./assets/style/dashboard.css";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
