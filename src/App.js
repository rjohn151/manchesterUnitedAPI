// import './App.css';
import Navbar from './components/Navbar';
import Players from './components/Players';
import Standings from './components/Standings';
import Fixtures from './components/Fixtures';
import Stadium from './components/Stadium';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // npm i react-router-dom


function App() {

  return (
        <Router>
      <div className="App">
        <Navbar />
          <Routes>
            {/* <Route path='/' element={<HistoryDB />}></Route> */}
            <Route path='standings' element={<Standings />}></Route>
            <Route path='players' element={<Players />}></Route>
            <Route path='fixtures' element={<Fixtures />}></Route>
            <Route path='stadium' element={<Stadium />}></Route>
          </Routes>
        
        <Footer />
      </div>
    </Router>

    // <div className="App">
    //   <Navbar/>
    //   <Players />
    // </div>
  );
}

export default App;
