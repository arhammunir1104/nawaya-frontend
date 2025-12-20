import { AppContextProvider } from "./context/AppContext"
import AppRoutes from "./routes/AppRoutes"

function App() {


  return (
   <>
   <AppContextProvider>
    <AppRoutes/>
    </AppContextProvider>
   </>
  )
}

export default App
