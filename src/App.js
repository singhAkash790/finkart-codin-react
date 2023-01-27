import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grid from "./components/Grid";
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" component={<Home/>} />
        <Route path='grid' component={<Grid/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
