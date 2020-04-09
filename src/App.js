import React from 'react';
import './App.css';
import City from "./Components/City";



// import NewsGermany from './Components/NewsGermany';
// import NewsGB from './Components/NewsGB';
// import NewsFrance from './Components/NewsFrance';
// import NewsUsa from './Components/NewsUsa';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <City />
      {/* <NewsGermany />
      <NewsGB />
      <NewsFrance />
      <NewsUsa /> */}
      <Footer />
    </div>
  );
}

export default App;
