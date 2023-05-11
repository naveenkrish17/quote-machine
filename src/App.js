import React from 'react';
import Quote from './components/Quote';
import { useSelector } from 'react-redux';


function App() {
  const bgColor = useSelector(state => state.newColor);
  document.body.style.backgroundColor = bgColor;
  document.body.style.transition = 'background-color 0.5s ease';
    return (
    <div className="App">
      <Quote />
    </div>
  );
}

export default App;
