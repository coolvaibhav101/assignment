import { ReactNode, useState } from "react";
import DataContext from "./DataContext";
import {preData} from "../utils/preData";


const DataState = ({children} : { children : ReactNode}) => {
  const [dataList, setDataList] = useState(preData)
  const [tempDataList, setTempDataList] = useState(dataList)
  const [inputPopUP, setInputPopUP] = useState(false)
  const [create, setCreate] = useState("")
  const [folderPath, setFolderPath] = useState([])


  return (
    <DataContext.Provider
      value={{
        // States
        dataList,
        setDataList,
        tempDataList,
        setTempDataList,
        inputPopUP,
        setInputPopUP,
        create,
        setCreate,
        folderPath,
        setFolderPath,
      }}
    >

      {children}
    </DataContext.Provider>
  );
};
export default DataState;