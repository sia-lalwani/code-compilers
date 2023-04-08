function aboutButton(){
    window.open("./about.html");
}
function logIn(){
    window.open("./index.html");
}
function github(){
    window.open("https://github.com/sia-lalwani/code-compilers");
}
function enterButton() {

    var search = document.getElementById("search").value;
    if (search.match("html", "css", "javascript")) {
        onclick=window.open("./search.html");
    } else {
        alert("The word does not exist in the dictionary");
        return;
    } 
}
function historyButton(){
    window.open("")
}
function vocaButton(){
    window.open("./")
}

