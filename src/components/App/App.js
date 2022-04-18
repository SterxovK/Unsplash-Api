import { useState } from 'react';
import './App.css';
import Input from './Input/Input'
import Button from './Button/Button'

function App() {

  const[searchQuery, setSearchQuery] = useState('Amsterdam')

  const handleFormSubmit = (e) => {
    e.preventDefault()
  }

  const handleImputChange = (value) => {
    setSearchQuery(value)
  }

  return (
    <div className="App">
      <div className="app__content">
        <h1>{searchQuery}</h1>
        <form className="app__search" onSubmit={handleFormSubmit}>
          <Input 
          placeholder={"Search free high-resolutuon photos"}
          handleChange={handleImputChange}/>
          <Button title={"Search"} />
        </form>
        <div className="app__cards"></div>
      </div>
    </div>
  );
}

export default App;
