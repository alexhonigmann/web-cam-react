import React from 'react';
import './App.css';

import NewsGermany from './Components/NewsGermany';
import NewsGB from './Components/NewsGB';
import NewsFrance from './Components/NewsFrance';
import NewsUsa from './Components/NewsUsa';

function App() {
  return (
    <div className="App">
      {/* <City />  */}
      <NewsGermany />
      <NewsGB />
      <NewsFrance />
      <NewsUsa />
      {/* <Webcam />
      <Footer /> */}
    </div>
  );
}

export default App;
