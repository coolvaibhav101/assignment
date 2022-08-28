import React, { useContext, useState } from 'react'
import { Navbar ,FileComp} from "../../components";
import "./fileExplorer.css"
import DataContext from '../../context';


const Index = () => {

  const {tempDataList} = useContext(DataContext);

  tempDataList.sort((a:any, b:any) => a.type < b.type ? 1 : -1)

  return (
    <div className='FileExplorer' >
      <Navbar/>
      <div className="fileContainer">
        {React.Children.toArray(tempDataList.map((elem:any,i:number)=><FileComp data={elem} i={i}/>))}
      </div>
    </div>
  )
}

export default Index