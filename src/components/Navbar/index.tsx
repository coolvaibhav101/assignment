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
      })
      setTempDataList(forNewArray)
      setFolderPath(folderPath)
    }

    const add = () =>{
      // console.log(dataList);
      // console.log(folderPath);
      folderPath.map((elem:any)=>{
            // newArray.push({
          //     name : "null Document",
          //     type : "file"
          // })
          console.log(dataList[elem.i]);
        return dataList[elem.i]
      })
      let newArray = dataList
      console.log(newArray);
    }
    return(
    <header>
        <div className="buttons lock" onClick={()=>onBack()}><IoMdArrowBack/></div>
        <div className="newBox">
        <div className="new" onClick={()=>createNew("file")  }>New File</div>
        <div className="new" onClick={()=>createNew("folder")}>New Folder</div>
        </div>
        <button onClick={()=>add()} >
          ok
        </button>
    </header>
    )}

export default Index