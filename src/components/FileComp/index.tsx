import React, { useContext } from 'react'
import { FcFile } from 'react-icons/fc';
import { FcFolder } from 'react-icons/fc';
import DataContext from '../../context';

const Index = ({data,i}:any ) => {

  const {folderPath,setFolderPath,setTempDataList} = useContext(DataContext);

  
  const handleClick = (e:any) => {
    if (e.detail === 2) {
      if (data.type === "file"){
        alert(data.name+".txt");
      }else{
        setFolderPath([...folderPath ,{name:data.name ,i} ])
        setTempDataList(data.files)
      }
    }
  };
  const handleContextMenu = (e:any) => {
    e.preventDefault();
    console.log(e.pageX);
    console.log(e.pageY);
  };
  return (
    <div className="fileComp" onClick={handleClick} onContextMenu={handleContextMenu}>
      <div className="icon">{ data.type === "file"? <FcFile/> : <FcFolder/> } </div>
      <div className="title">{ data.type === "file"? `${data.name}.txt`: data.name }</div>
    </div>
  )
}

export default Index