import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"

function App() {
  return (
    <div>
      <Navbar/>
      
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        
        <div>
          <p className="text-xl text-white font-bold">Hi, I'm</p>
          <h1 className="text-7xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 text-transparent bg-clip-text leading-relaxed">Cristian</h1>
        </div>
        
      </div>

    </div>
    
  );
}

export default App;
