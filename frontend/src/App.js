import React from 'react';
import './App.css';
import Header from './Components/Header';
import LaptopList from './Components/Laptop_list';

function App() {

  const [filterClick, setFilterClick] = React.useState('')
  return (
    <div className="App">
      <Header 
        headerText="Welcome to ng laptop inventoy app"
        link="/Admin"
        text2="Admin"
        filterClick={(data)=>{setFilterClick(data)}}
      />
      <LaptopList filterClick={filterClick}/>

      <hr />
      <code style={{ bottom: 0 }}>Created By : jagan</code>
    </div>
  );
}

export default App;
