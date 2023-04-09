function enterButton() {

    var search = document.getElementById("search").value;

    if (search.match("html")) {
        document.getElementById("demo").innerHTML = "HTML is a markup language used for designing documents";
    } else if (search.match("css")){
        document.getElementById("demo").innerHTML = "HTML is a markup language used for designing documents";
    } else if (search.match("javascript")){
        document.getElementById("demo").innerHTML = "HTML is a markup language used for designing documents";
    }
}

