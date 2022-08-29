export const addInArray = (array:any,path:number[],elemForAdd:any) =>{

    const oneNested:any = (array:any,path:number[],elemForAdd:any) => path.slice(1)[0] === undefined ? array[path[0]].files.push(elemForAdd) : oneNested(array[path[0]].files,path.slice(1),elemForAdd)

    // If Its Starting Folder else Nested Folder
    path[0] === undefined ? array.push(elemForAdd) : oneNested(array,path,elemForAdd)

    return array
}

export const removeInArray = (array:any,path:number[],index:number) =>{

    const oneNested:any = (array:any,path:number[],index:number) =>path.slice(1)[0] === undefined ? array[path[0]].files.splice(index, 1) : oneNested(array[path[0]].files,path.slice(1),index)
        
    // If Its Starting Folder else Nested Folder
    path[0] === undefined ? array.splice(index, 1) :  oneNested(array,path,index)

    return array
}


// export const addInArray = (array:any,path:any,elemForAdd:any) =>{

//     const oneNested = (array:any,path:any,elemForAdd:any) =>{
//             if (path.slice(1)[0] === undefined) {
//                 array[path[0]].files.push(elemForAdd)
//             }else{
//                 oneNested(array[path[0]].files,path.slice(1),elemForAdd)
//             }
//     }
//         // If Its Starting Folder
//         if (path[0] === undefined) {
//             array.push(elemForAdd)
//         // If Its in Nested Folder
//         }else{
//             oneNested(array,path,elemForAdd)
//         }
//     return array
// }
// export const removeInArray = (array:any,path:any,index:number) =>{

//     const oneNested = (array:any,path:any,index:any) =>{
//             if (path.slice(1)[0] === undefined) {
//                 array[path[0]].files.splice(index, 1);
//             }else{
//                 oneNested(array[path[0]].files,path.slice(1),index)
//             }
//     }
//         // If Its Starting Folder
//         if (path[0] === undefined) {
//             array.splice(index, 1);
//         // If Its in Nested Folder
//         }else{
//             oneNested(array,path,index)
//         }
//     return array
// }
