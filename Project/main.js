function allCap(){
    var text = document.getElementById("text"); // textarea
    
    var inputValue = text.value; // textarea.value

    var upper = inputValue.toUpperCase(); // UPPER CASE

    text.value = upper // UPPER CASE
}