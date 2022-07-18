let form=document.querySelector("form");
let ls=localStorage.getItem('todo');
let todo=ls?JSON.parse(ls):[];

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let inpdata=form[0].value;
    todo.push(inpdata)
    localStorage.setItem('todo',JSON.stringify(todo))
    location.reload()
})

// to display our tasks we will use map

todo.map((data,index)=>{
    document.querySelector("tbody").innerHTML+=`
    <tr>
    <td>${data}</td>
    <td onclick="del(${index})">delete</td>
    </tr>
    `;
})

function del(e){
    let deleted=todo.filter((data,index)=>{
        return index!==e;
    })
    localStorage.setItem('todo',JSON.stringify(deleted))
    location.reload()
}

