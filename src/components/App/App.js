import React from 'react';
import './App.css';
import Header from '../Header';
import Content from '../Content';
import Menu from '../Menu';
import Footer from '../Footer';


export function App() {
  return (
    
    <React.StrictMode>
      
      <Header />
      <Menu />
      <Content /> 
      <Footer />
    </React.StrictMode>
   
  );
}