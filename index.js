function d(){
    var con=document.createElement('div');
    var container=document.createElement('div');
    var text=document.getElementById('text');
    var result=text.value;
    if (result!=""){
        var fun=document.createElement('h1');
        fun.textContent=result;
        con.appendChild(fun);
        var but=document.createElement("button");
        but.textContent="X"
        but.setAttribute('id','delete')
        con.appendChild(but);
        con.setAttribute('id','box')
        container.appendChild(con)
        container.setAttribute('id','outbox')
        document.body.appendChild(container);
        but.addEventListener('click',()=>{
            container.remove();
        })
    }
    else{
        window.alert('oops you did not enter some thing...!');
    }
}