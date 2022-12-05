const addUser = document.querySelector("#addUser")


const readDataFromStorage = (itemKey="user",resType="json") =>{
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

const writeDataToStorage = (data,itemKey="user")=> localStorage.setItem(itemKey, JSON.stringify(data))


const addNewUser = (e) =>{
    e.preventDefault()
    const user = { 
        id: Date.now(), 
         
    }
    user.status= addUser.elements.status.value
    user.name= addUser.elements.name.value
    user.age= addUser.elements.age.value
    console.log(user)
    data = readDataFromStorage()
    data.push(user)
    writeDataToStorage(data)
    displayInfo()
}

const createMyElement = (
    parent, 
    el, 
    txt=null, 
    classes=null, 
    attr=null)=>{
        const myElement = document.createElement(el)
        parent.appendChild(myElement)
        if(txt) 
            myElement.innerText=txt
        if(classes)
            myElement.classList = classes
        if(attr) 
            attr.forEach(at=> 
                myElement.setAttribute(at.key, at.val)
                )
        return myElement
    }

const body = document.querySelector("body")
const dataWrap = document.querySelector("#dataWrap")
const table = document.querySelector("table")

displayInfo()

function displayInfo(){
    let d = readDataFromStorage()
    //console.log(d);
    let i = 0
    d.forEach(e => {     
        const myAttr = [
            {key: "onClick", val:`del(${i})`},
         
        ]
        const myAttr2 = [
            {key: "onClick", val: `update(${i})`}
         
        ]
      let tr = createMyElement(table, "tr")
      createMyElement(tr,"td",d[i].id)
      createMyElement(tr,"td",d[i].name)
      createMyElement(tr,"td",d[i].age)
      createMyElement(tr,"td",d[i].status)
      createMyElement(tr,"button" ,"delete",null,myAttr)
      createMyElement(tr,"button" ,"update",null,myAttr2)
     
      i++
    
    
})
}
function del(userId){
    let k = readDataFromStorage()
    k[userId].status= "";
    writeDataToStorage(k)
    //displayInfo()
}


function update(userId){
    let k = readDataFromStorage()
     if(k[userId].status=="active"){ k[userId].statue = "inactive";
     }else{
        k[userId].status ="active";
     }
     
     writeDataToStorage(k)   
    // displayInfo() 
}
addUser.addEventListener("submit", (e)=> addNewUser(e))
   
