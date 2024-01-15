import { Route, BrowserRouter as Router, Routes} from
'react-router-dom';
import { Home, Trailer, Soundtrack, Contact} from './pages'
import Navbar from './components/Navbar';
import { StarsCanvas } from "./models";

const App = () => {
  return (
    <main className='bg-black-500'>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <StarsCanvas /> */}
                <Route path="/trailer" element={<Trailer/>}/>
                <Route path="/sountrack" element={<Soundtrack/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    </main>
  )
}

export default App;