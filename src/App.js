import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [items,setItems]=useState([]);
  const [filtredItems,setFiltredItems] = useState([])
  const inputRef = useRef()

  function onSubmit(e){
    e.preventDefault()
    const value = inputRef.current.value
    if (value === "") return 
    setItems(prev => {
      return [...prev,value]
    })
    inputRef.current.value=""
    setFiltredItems(prev => {
      return [...prev,value]
    })
    
  }
  
  function onChange(e){
    e.preventDefault()
    const value = e.target.value
    setFiltredItems(
      items.filter(item => item.toLowerCase().includes(value.toLowerCase()))
      )
   
  }

  
  return (
    <div className="App">
      <h1>Search</h1>
      <input onChange={onChange}type="search"/>
      <form onSubmit={onSubmit}>
        New Item : <input type="text"   ref={inputRef} />
        <button>Add</button>
        <h3>Items List:</h3>
          {
          filtredItems.map(item => (
            <div>{item}</div>
          ))}
      </form>
    </div>
  );
}

export default App;
