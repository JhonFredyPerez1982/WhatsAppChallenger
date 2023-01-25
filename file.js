
( ( )=>{const createTask=() => {
        const question=document.querySelector("[data-question]");
        const value="space thought can asignar some value to one type data and do self-operation among they...<br> it´s:<br>byte,short,int,long;<br>float,double;<br>char,bolean;";
        question.classList.add("card");
        const content=`${value}`;
      question.innerHTML=content;
    };
    const btn=document.querySelector("[data-question]").addEventListener("click",createTask);

    let nIntervId;

        nIntervId = setInterval(flashText, 100);
       
function flashText() {
    const Elem = document.getElementById("paint");
    if (Elem.className === "box1") {
        Elem.className = "box2";
    } else {
        Elem.className = "box1";
    }
}
})( )