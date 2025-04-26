import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"

function App() {
  return (
    <div className="w-full">
      <Navbar/>
      
      {/* First section */}
      <div className="w-full bg-black">

        <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-center relative overflow-hidden">

          <div className="absolute start-0 top-90">

            <p className="text-4xl text-white font-bold">
              Hello, I'm
            </p>
            <h1 className="text-7xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 text-transparent bg-clip-text leading-relaxed">
              Cristian Diaconu
            </h1>
            
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
