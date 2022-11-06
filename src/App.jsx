
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cars from "./views/cars/Cars";
import Home from './views/home/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cars" element={<Cars />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
