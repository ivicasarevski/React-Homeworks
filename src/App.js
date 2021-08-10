
import './App.css';
import React from 'react';
import Header from './Header';
import Body from './Body';
import Counter from './Counter'
import Heading from './Reusable components/Heading'
import Calculator from './Reusable components/Calculator'


function App() {
  return (
    <>
      <Header />
      <Heading title="This title is coming from App.js" />
      <Counter />
      <Calculator />
     
    </>
  );
}

export default App;
