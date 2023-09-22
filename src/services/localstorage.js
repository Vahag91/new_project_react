const getData = (key)=>{

    const data = localStorage.getItem(key)
    return JSON.parse(data)
}


const saveData = (key,value)=>{

    const data = JSON.stringify(value)
    localStorage.setItem(key,data)
}

const deleteData = (key)=>{
    localStorage.removeItem(key)
}


export {
    getData,
    saveData,
    deleteData
}