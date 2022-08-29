import React, { useContext, useEffect, useState } from 'react'
import { Navbar ,FileComp,ContextMenu} from "../../components";
import "./fileExplorer.css"
import DataContext from '../../context';


const Index = () => {

  const {tempDataList} = useContext(DataContext);
    tempDataList.sort((a:any, b:any) => a.type < b.type ? 1 : -1)
  const [show, setShow] = useState(false)
  const [points, setPoints] = useState({x:0, y:0})
  useEffect(() => {
    const handleClick = () => setShow(false)
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, []);
  
  return (
    <div className='FileExplorer' >
      <Navbar/>
      <div className="fileContainer">
        {React.Children.toArray(tempDataList.map((elem:any,i:number)=><FileComp data={elem} i={i} setShow={setShow} setPoints={setPoints}/>))}
      </div>
      {show && <ContextMenu points={points}/>}

    </div>
  )
}

export default Index