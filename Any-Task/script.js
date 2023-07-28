const val=document.querySelector("#add")
const submit=document.querySelector("#submission");
const clear__items=document.querySelector("#clear");
const enter=document.querySelector("#add");

//Date Function
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date=new Date();
document.querySelector("#dates").textContent=`${date.getDate()},${months[date.getMonth()]} ${date.getFullYear()}`;

//Adding items
i=1
const adding__items=function(){
    let html='';
    html+=`
    <div id="i${i}">
    <input type="checkbox" class="items" onclick="remove(i${i})"><label class="item__name"">${val.value}</label>
    <br>
    </div>`
    document.querySelector("#list__container").innerHTML+=html;
    val.value='';
    i++
}
submit.addEventListener('click',adding__items);
enter.addEventListener('keyup',(e)=>{
    if(e.key=="Enter"){
        let html='';
        html+=`
        <div id="i${i}">
        <input type="checkbox" class="items" onclick="remove(i${i})"><label class="item__name">${enter.value}</label>
        <br>
        </div>`
        document.querySelector("#list__container").innerHTML+=html;
        val.value='';
        i++
    }
});

//Clear All Items
clear__items.addEventListener('click',function(){
    document.querySelector("#list__container").remove();
    i=1;
    const box=document.createElement("div");
    box.id="list__container";
    document.querySelector("#lists").appendChild(box);
})

//Removing Items by each
function remove(val){
    val.remove();
}