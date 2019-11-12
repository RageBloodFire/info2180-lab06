//onload of the web page
function load() {
    
    document.getElementById("but").addEventListener("click", clickSearch);
}

window.onload=load;

//Search button event
function clickSearch() {
    
    /*let text = document.getElementById("supName");*/
    /*let list = $.ajax(url: "superheroes.php")*/
    
    /*fetch('http://localhost:8080/superheroes.php')
    .then((mes) => mes.text())
    .then(function(data){
        alert(data);
    })
    
    .catch(function(er) {
        console.log("there has been an error");
    })*/
    
    //configuring the request to be sent
    let input = document.getElementById("search").value.replace("[^\\p{Alpha} ]", "");
    
    let req = new XMLHttpRequest();
    
    req.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200)
            {
                document.getElementById("result").innerHTML = this.responseText;
            }
    }
    
    //sending the entered hero name to the php file
    req.open("GET", "http://localhost:8080/superheroes.php?qry="+input, true);
    req.send();
    
}

