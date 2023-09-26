let textbox = document.getElementById("textbox");

textbox.addEventListener('input', function () {
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();  // remove space(fron start-End)
    let words = text.split(" ");  // it break the flow when a space occure and count it as a word
    let cleanList = words.filter(function (elm) {
        return elm != "";   // return only non-empty array item
    });
    document.getElementById("word").innerHTML=cleanList.length;
})