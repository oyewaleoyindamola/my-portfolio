import './App.css';
import Portfolio from './Components/Portfolio'
import { Routes, Route } from 'react-router';
import HeadContent from './Components/HeadContent'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'
        element = { <Portfolio/>}/>
                <Route path='#HeadContent'
        element = { <HeadContent/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
