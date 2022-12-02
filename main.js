const heads = ["id", "name", "age" , "status" ]

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
  // e.preventDefault();
    const task = {}
    heads.forEach(h=> task[h]= addTask.elements[h].value)
     data = readDataFromStorage()
    data.push(task)
   
    writeDataToStorage(data)


})

}


/*function Delete(X){
    
    data = readDataFromStorage()
    console.log(X)
   const isstatus = (x)=> x ===  ;
    let index =data.findIndex(isstatus) 
    console.log(index);
    data = data.splice(index, 1);
    writeDataToStorage(data)
}*/


if(dataWrap){
    
    const data = readDataFromStorage()
    
    const div2 = document.createElement("div")
    dataWrap.appendChild(div2)
    const s = document.createElement("span")
    const s1 = document.createElement("span")
    const s2 = document.createElement("span")
    const s3 = document.createElement("span")
            s.innerHTML = `id     ,` 
            s1.innerHTML = `name           ,` 
            s2.innerHTML = `age             ,` 
            s3.innerHTML = `status  ` 
            div2.appendChild(s)
        div2.appendChild(s1)
        div2.appendChild(s2)
        div2.appendChild(s3)
      data.forEach(d=>{
        const div = document.createElement("div")
        dataWrap.appendChild(div)
        const p = document.createElement("span")
        const p2 = document.createElement("span")
        const p3 = document.createElement("span")
        const p4 = document.createElement("span")
        const button = document.createElement("button")
        button.id = `${d.id}` 
        // button.onclick = Delete(button.id)
           
            
           
        button.innerText = "delete"
        p.innerHTML = `${d.id}  ` 
        p2.innerHTML = `${d.name}  `
        p3.innerHTML = `${d.age}  `
        p4.innerHTML = `${d.status}  `

        div.appendChild(p)
        div.appendChild(p2)
        div.appendChild(p3)
        div.appendChild(p4)
        div.appendChild(button)
    })

 // <button name="delete" id="delete" onclick="Delete()">delete</button>

}





