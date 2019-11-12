//onload of the web page
function load() {
    
    let button = document.getElementById("but");
    button.setAttribute("onClick", "clickSearch");
}

//Search button event
function clickSearch() {
    
    /*let text = document.getElementById("supName");*/
    /*let list = $.ajax(url: "superheroes.php")*/
    
    fetch('http://localhost:8080/superheroes.php')
    .then((mes) => mes.text())
    .then(function(list){
        alert(list);
    })
    
    .catch(function(er) {
        console.log("there has been an error");
    })
    
}

window.onload=load;
