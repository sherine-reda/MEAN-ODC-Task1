const heads = ["id", "name", "age" , "status"]

const addTask = document.querySelector("#Task")
const dataWrap = document.querySelector("#dataWrap")

const readDataFromStorage = (itemKey="form",resType="json") =>{
    let data = localStorage.getItem(itemKey)
    if(resType=="json") {
        try{
            data = JSON.parse(data)||[]
        }
        catch(e){
            data = []
        }
    }
    return data
}
const writeDataToStorage = (data,itemKey="form")=> localStorage.setItem(itemKey, JSON.stringify(data))
const DeleteFromStorge = (itemKey="form")=>localStorage.removeItem(itemKey.status)
if(addTask){
    
addTask.addEventListener("submit", (e)=>{
    e.preventDefault()
    const task = {}
    heads.forEach(h=> task[h]= addTask.elements[h].value)
     data = readDataFromStorage()
    data.push(task)
   
    writeDataToStorage(data)


})

}


function Delete(){
    data = readDataFromStorage()
    const isstatus = (element) => element === "status";
    let index =heads.findIndex(isstatus) ;
      data = data.splice(index, 1);
    writeDataToStorage(data)
}


if(dataWrap){
    function generateTableHead(table) {
        let thead = table.createTHead();
      }
    const data = readDataFromStorage()
      const div = document.createElement("div")
      dataWrap.appendChild(div)
             
      data.forEach(d=>{
        const p = document.createElement("span")
        const p2 = document.createElement("span")
        const p3 = document.createElement("span")
        const p4 = document.createElement("span")
        p.innerHTML = d.id
        p2.innerHTML = d.name
        p3.innerHTML = d.age
        p4.innerHTML = d.status

        div.appendChild(p)
        div.appendChild(p2)
        div.appendChild(p3)
        div.appendChild(p4)

    })
    
}





