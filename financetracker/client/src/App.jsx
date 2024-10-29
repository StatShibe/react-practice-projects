import './App.css'
import InsertData from './pages/insertdata'
import ShowData from './pages/showdata'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<InsertData/>}/>
              <Route path="/show" element = {<ShowData/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
    