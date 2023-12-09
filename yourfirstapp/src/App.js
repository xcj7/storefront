import './App.css';
import{
  BrowserRouter as Router,
  Route,
  Routes
}from "react-router-dom";
import Header from './components/Header';
import NotesListPage from './Pages/NotesListPage';
import NotePage from './Pages/NotePage';

function App() {
  return (
    <Router>
      <div className='container'>
      <div className="App">
      
   <Header />
   <Routes>
   <Route path="/" exact Component={NotesListPage}   />
   <Route path="/note/:id" exact Component={NotePage} />
  
   </Routes>
   </div>
    </div>
      
 
    </Router>
  );
}

export default App;
