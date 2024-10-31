import './App.css'
import InsertData from './pages/insertdata'
import MainPage from './pages/mainpage';
import ShowData from './pages/showdata'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/show" element = {<ShowData/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
    