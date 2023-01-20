import './App.css';
import Blog from './pages/Blog';
import Homepage from './pages/Homepage';
import {Routes,Route} from 'react-router-dom'
function App() {
  
  return (
    <div className='app'>
      <Routes>
        <Route index path='/' element={<Homepage />}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </div>
  );
}

export default App;
