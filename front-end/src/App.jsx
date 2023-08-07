import { CustomToastContainer } from "./components/CustomToastContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./components/contexts/userContext"
import Header from "./components/headerComponents/Header"
import 'react-toastify/dist/ReactToastify.css';
import SearchPage from "./pages/SearchPage";
import Background from "./components/Background";

function App() {

  return (
    <>
    <CustomToastContainer/>
    <UserProvider>
    <Router>
    <Background>
    <Header/>
          <Routes>
            <Route path="/" element={<div>Hello Home!</div>} />
            <Route path="/search/:title" element={<SearchPage/>} />
          </Routes>
      </Background>
    </Router>
    </UserProvider>
    </>
  )
}

export default App
