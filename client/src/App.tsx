import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { JsxElement } from 'typescript'
import Authentication from './Components/Authentication'
import Navbar from './Components/Navbar'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
// <BrowserRouter>
//     <Navbar />
//     <Routes>
//       <Route path='/' element={<Authentication />} />
//     </Routes>
//   </BrowserRouter>
