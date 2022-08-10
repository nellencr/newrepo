import React from 'react';
import './App.css';
import Data from './components/Data';
import Card from './components/Card'
import Navbar from './components/Navbar';
import Header from "./components/Header"


export default function App() {
  const cards = Data.map(item =>{
    return(
      <Card 
      key={item.key}
      item={item}
      />
    )
  })
  return (
    <div className="App">
    <Navbar />
    <Header />
    <section className="cards-list">
       {cards}
    </section>
    </div>
  );
}

