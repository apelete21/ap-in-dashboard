import { BrowserRouter, useLocation } from "react-router-dom"
import AdminRoutes from "./routes/AdminRoutes"
import "./assets/style/dashboard.css"
import { AppContextProvider } from "./Contexts/AppContext"

function App() {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <AdminRoutes />
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App
