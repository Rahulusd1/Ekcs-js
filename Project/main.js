function allCap(){
    var text = document.getElementById("text"); // textarea
    
    var inputValue = text.value; // textarea.value

    var upper = inputValue.toUpperCase(); // UPPER CASE

    text.value = upper // UPPER CASE
}

function allLow(){
    var text = document.getElementById("text");

    var inputValue = text.value;

    var lower = inputValue.toLowerCase();

    text.value = lower;
}

function copy(){
    var text = document.getElementById("text").value
    navigator.clipboard.writeText(text)
}

function firstChar(){
    var text = document.getElementById("text")
    var inputValue = text.value
    var space = inputValue.split(" "); // ["abc", "bc3"]
    var newArr = [];
    for(var i = 0; i < space.length; i++){
        var value = space[i];
        var sum = value.charAt(0).toUpperCase() + value.slice(1)
        newArr.push(sum)
    }
    var finalValue = newArr.join("  ");
    console.log(finalValue);
    text.value = finalValue;
}