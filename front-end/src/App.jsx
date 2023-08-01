import { CustomToastContainer } from "./components/CustomToastContainer";
import { UserProvider } from "./components/contexts/userContext"
import Header from "./components/headerComponents/Header"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <CustomToastContainer/>
    <UserProvider>
    <Header/>
    </UserProvider>

    </>
  )
}

export default App
