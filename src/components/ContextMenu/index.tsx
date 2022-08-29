import React, { useContext } from 'react'
import  "./contexMenu.css";
import { removeInArray } from "../../utils/functions";
import DataContext from '../../context';

const Index = ({points}:any) => {

const {folderPath,setFolderPath,setTempDataList,dataList,tempDataList,target} = useContext(DataContext);

const handleClick = () => {
    const {data , i} = target
    if (data.type === "file"){
    alert(data.name+".txt");
    }else{
    setFolderPath([...folderPath ,{name:data.name ,i} ])
    setTempDataList(data.files)
    }
};
  const remove = () =>{
    const {i} = target

    const newPath = folderPath.map((elm:any)=>elm.i)
    let oneSpliceArray = tempDataList.filter((_:any, index:number) => index !== i)
    setTempDataList(oneSpliceArray);
    removeInArray(dataList,newPath,i);
  } 
  return (
    <div className='ContexMenu' style={{top:points.y,left:points.x}}>
        <div className="option" onClick={()=>handleClick()}>Open</div>
        <div className="option" onClick={(e)=>remove()}>Delete</div>
    </div>
  )
}

export default Index