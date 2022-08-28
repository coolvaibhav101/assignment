import React, { useContext } from 'react';
import './App.css';
import FileExplorer from "./pages/FileExplorer"
import {AddPopUP} from "./components"
import DataContext from './context';

function App() {

  const {inputPopUP,setInputPopUP} = useContext(DataContext);

  return (
    <div className="App">
       {inputPopUP && <AddPopUP setPopUP={setInputPopUP}/>} 
      <FileExplorer/>
    </div>
  );
}

export default App;
