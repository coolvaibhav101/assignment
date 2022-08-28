import React, { useContext, useState } from 'react'
import "./addPopUP.css"
import {IoClose } from "react-icons/io5";
import DataContext from '../../context';

const Index = ({setPopUP}:any) => {
    const {create,tempDataList,setTempDataList,dataList} = useContext(DataContext);

  const [name, setName] = useState("");

  const ifExist = (data:any) =>{
    const [filteredData] = data.filter((elem:any)=>{
        return  elem.name.toLowerCase() === name.toLowerCase() &&
                elem.type === create
    })
    if (filteredData) {
        return true
    }else{
        return false
    }
  }
  
  const filterOut = (data:any ,name:string) =>{
    const filteredData = data.findIndex((elem:any )=>{
        return  elem.name.toLowerCase() !== name.toLowerCase() &&
                elem.type === "folder"
    })
    console.log(data);
    console.log(filteredData);
    
    return filteredData
  }
    const handleSubmit = (e:any) =>{
        e.preventDefault();
        if(ifExist(tempDataList)){
            alert(`This name ${create} already exist`)
        }else{
            alert("created")
            let newData:any = {
                name,
                type:create
            }
            if (create === 'folder') {
                newData['files'] = []
            }
            setTempDataList([...tempDataList,newData])
            const newDataList = dataList
            // console.log(newDataList);
            let array = []
            const data = newDataList.map((elem:any)=>{
                console.log(newDataList);
                
            })
            // console.log(data);
            filterOut(newDataList,'Folder');
        }
    }
  return (
    <div className='addPopUP'>
        <div className="popUpDivContainer">
        <div className="cross" onClick={()=>setPopUP(false)}> <IoClose/> </div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" >Type {create} name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} required/>
            <button>Add</button>
        </form>
        </div>
    </div>
  )
}

export default Index