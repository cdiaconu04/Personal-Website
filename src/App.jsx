import logo from './logo.svg';
import headshot from './images/1727488282356.jpg';
import './App.css';
import Navbar from "./components/navbar"
import motion from 'framer-motion';

function App() {
  return (
    <div className="w-full">
      <Navbar/>
      
      {/* First section */}
      <div className="w-full bg-black">

        <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden">

          <div>

            <p className="text-4xl text-white font-bold">
              Hello, I'm
            </p>
            <h1 className="text-7xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 text-transparent bg-clip-text leading-relaxed">
              Cristian Diaconu
            </h1>
            
          </div>

          <div>
            <img className="rounded-full ms-auto w-80 h-80" src={headshot} />


          </div>

          
          
        </div>
      </div>

      {/* Second section */}
      <div className="w-full bg-black">
        <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden">

        </div>
      </div>


    </div>

    
    
  );
}

export default App;
