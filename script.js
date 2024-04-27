function buttonclick(val){
    document.getElementById("output").value+=val;    
}

function buttonClear(){
    document.getElementById("output").value=""
}

function resultClick(){
    var text = document.getElementById("output").value
    var result = eval(text)
    document.getElementById("output").value = result
}
