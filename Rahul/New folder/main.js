


function lowercase(){

    var text=document.getElementById("text");
    var value = text.value;
    var lowercase = value.toLowerCase();
    text.value = lowercase;

}

function copy(){

    var text=document.getElementById("text").value;
    navigator.clipboard.writeText(text)

}