import './App.css';
import { useEffect, useState } from 'react';
import { IcebreakerQuestionService } from './api/IcebreakerQuestionService';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import IcebreakerQuestionList from './pages/icebreakerQuestion/IcebreakerQuestionList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import MainNavigation from './components/MainNavigation';

function App() {
  
  return (
    <Router>
      <div className="App">
        <MainNavigation />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/icebreakerquestion' element={<IcebreakerQuestionList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
