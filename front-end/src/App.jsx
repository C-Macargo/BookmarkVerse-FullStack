import { UserProvider } from "./components/contexts/userContext"
import Header from "./components/headerComponents/Header"

function App() {

  return (
    <>
    <UserProvider>
    <Header/>
    </UserProvider>

    </>
  )
}

export default App
