import React, { useContext } from 'react'
import { IoMdArrowBack } from 'react-icons/io';
import "./header.css"
import DataContext from '../../context';
const Index = () => {

  const {setInputPopUP,setCreate,folderPath,dataList,setTempDataList,setFolderPath} = useContext(DataContext);
    const createNew = (action:string) =>{
      setInputPopUP(true)
      setCreate(action)
    }
    
  const ifExist = (data:any , name:any) =>{
    const [filteredData] = data.filter((elem:any)=>{
        return  elem.name.toLowerCase() === name.toLowerCase() &&
                elem.type === "folder"
    })
    return filteredData
  }

    const onBack = () =>{
      folderPath.pop()
      let forNewArray = dataList
      folderPath.map((elm:any)=>{
        const newArray =ifExist(forNewArray,elm.name)
        forNewArray = newArray.files
        return forNewArray
      })
      setTempDataList(forNewArray)
      setFolderPath(folderPath)
    }

    return(
    <header>
        <div className="buttons lock" onClick={()=>onBack()}><IoMdArrowBack/></div>
        <div className="newBox">
        <div className="new" onClick={()=>createNew("file")  }>New File</div>
        <div className="new" onClick={()=>createNew("folder")}>New Folder</div>
        </div>
    </header>
    )}

export default Index