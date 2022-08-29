export const addInArray = (array:any,path:any,elemForAdd:any) =>{

    const oneNested = (array:any,path:any,elemForAdd:any) =>{
            if (path.slice(1)[0] === undefined) {
                array[path[0]].files.push(elemForAdd)
            }else{
                oneNested(array[path[0]].files,path.slice(1),elemForAdd)
            }
    }
        // If Its Starting Folder
        if (path[0] === undefined) {
            array.push(elemForAdd)
        // If Its in Nested Folder
        }else{
            oneNested(array,path,elemForAdd)
        }
    return array
}
export const removeInArray = (array:any,path:any,index:number) =>{

    const oneNested = (array:any,path:any,index:any) =>{
            if (path.slice(1)[0] === undefined) {
                array[path[0]].files.splice(index, 1);
            }else{
                oneNested(array[path[0]].files,path.slice(1),index)
            }
    }
        // If Its Starting Folder
        if (path[0] === undefined) {
            array.splice(index, 1);
        // If Its in Nested Folder
        }else{
            oneNested(array,path,index)
        }
    return array
}
