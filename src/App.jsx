import { Route, BrowserRouter as Router, Routes} from
'react-router-dom';
import { Home, About, Projects, Contact} from './pages'
import Navbar from './components/Navbar';
import { StarsCanvas } from "./models";

const App = () => {
  return (
    <main className='bg-black-500 h-[100vh]'>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <StarsCanvas /> */}
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    </main>
  )
}

export default App;