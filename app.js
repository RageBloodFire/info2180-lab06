//onload of the web page
function load() {
    
    document.getElementById("but").addEventListener("click", clickSearch);
}

window.onload=load;

//Search button event
function clickSearch() {
    
    /*let text = document.getElementById("supName");*/
    /*let list = $.ajax(url: "superheroes.php")*/
    
    fetch('http://localhost:8080/superheroes.php')
    .then((mes) => mes.text())
    .then(function(data){
        alert(data);
    })
    
    .catch(function(er) {
        console.log("there has been an error");
    })
    
}

