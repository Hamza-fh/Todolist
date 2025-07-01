const ul = document.querySelector(".tasks");
const box = document.querySelector(".box-input");
const inp = document.getElementById("input");
const btn2 = document.querySelector(".btnadd2");
btn2.addEventListener("click",function(){
    const inpvl = inp.value.trim();
    const li = document.createElement("li");
    li.setAttribute("class","item");
    const span = document.createElement("span");
    span.setAttribute("class","task");
    span.textContent =inpvl;
    const div = document.createElement("div");
    div.setAttribute("class","box");
    const btncheck =document.createElement("button");
    btncheck.setAttribute("class","check");
    const btnremove =document.createElement("button");
    btnremove.setAttribute("class","remove");
    btncheck.innerHTML=`<i class='bx bx-check'style="color:white;font-size:18px;" ></i>`;
    btnremove.innerHTML=`<i class='bx bx-x' style="color:white;font-size:18px;"></i>`;
    div.appendChild(btncheck);
    div.appendChild(btnremove);
    li.appendChild(span);
    li.appendChild(div);
    ul.appendChild(li);
    btncheck.addEventListener("click",function(){
        span.classList.toggle("done");
    });
    btnremove.addEventListener("click",function(){
        ul.removeChild(li);
    });
    inp.value="";
});