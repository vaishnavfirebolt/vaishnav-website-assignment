import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <>
    <Navbar/>
     <div className="container my-3">
      <Profile/>
      </div>
    </>
  );
}

export default App;
