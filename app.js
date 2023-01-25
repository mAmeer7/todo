let input= document.querySelector('#inputTask')
let addbutton = document.querySelector('#addbtn')
let newtask= document.querySelector('#task')
let cabtn= document.querySelector('#cabtn')

console.log(input.value)

addbutton.addEventListener('click',function(){
    // we are creating a div
    let task= document.createElement('div');
    //adding a class to that div
    task.classList.add('tasks')
    //create a list item
    let li= document.createElement('li')
    li.innerText=`${input.value}`;
    console.log( li.innerText=`${input.value}`)
    task.appendChild(li)


    let checkbtn= document.createElement('button')
    checkbtn.innerText='C';
    checkbtn.classList.add('checkbtn')
    task.appendChild(checkbtn)

    let delbtn= document.createElement('button')
    delbtn.innerText='Del';
    delbtn.classList.add('delbtn')
    task.appendChild(delbtn)


    if(input.value===''){
        alert('Enter some task first')
    } else{
        newtask.append(task)
        input.value=''
    }

        checkbtn.addEventListener('click',function(){
            //we will select first child of task div that is li.
            task.firstChild.style.textDecoration='line-through'
        }),

        delbtn.addEventListener('click',function(e){
            let target = e.target;
            //it will select parent div task and remove it.
            target.parentElement.remove();
        })
    

    })