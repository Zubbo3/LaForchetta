/*if (localStorage.getItem("rist") == null) {
    localStorage.setItem("rist", JSON.stringify(risto));
}

function search() {
    var textinput = (document.getElementById('search-input').value);
    var dayinput = document.getElementById('sdate').value;
    var timeinput = document.getElementById('time').value;
    var numinput = document.getElementById('pers').value;
    var search = {text: textinput, day: dayinput, time: timeinput, num: numinput};
    var searchJSON = JSON.stringify(search);
    sessionStorage.setItem('search', searchJSON);
    location.reload();
}

function showsearch(){
    var ristJSON = localStorage.getItem('rist');
    var rist = JSON.parse(ristJSON);
    var searchJSON = sessionStorage.getItem('search');
    var search = JSON.parse(searchJSON);
    var index = 0;
    var restaurants = document.getElementById("restaurants");
    while (restaurants.hasChildNodes()) {
        restaurants.removeChild(restaurants.firstChild);
    }
    for (i = 0; i < rist.length; i++) {
        if (search.text == rist[i]["nome"] || search.text == rist[i]["citta"]) {
            var result = document.createElement("div");
            result.className = "result";
            //result.setAttribute('onclick', "info('"+index+"'); ristsel('"+index+"')");
            result.id = index;
            var info = document.createElement("div");
            info.className = "info-res";
            var divnome = document.createElement("div");
            divnome.className = "nome-res";
            var nome = document.createTextNode(rist[i]["nome"]);
            divnome.appendChild(nome);
            info.appendChild(divnome);
            var divind = document.createElement("div");
            var ind = document.createTextNode(rist[i]["via"] + ", " + rist[i]["citta"]);
            divind.appendChild(ind);
            info.appendChild(divind);
            var divposti = document.createElement("div");
            var posti = document.createTextNode("Posti: " + rist[i]["posti"]);
            divposti.appendChild(posti);
            info.appendChild(divposti);
            var book = document.createElement("div");
            book.className = "booking-res";
            var divprezzo = document.createElement("div");
            var prezzo = document.createTextNode("Fascia prezzo: " + rist[i]["fascia_prezzo"]);
            divprezzo.appendChild(prezzo);
            book.appendChild(divprezzo);
            result.appendChild(info);
            result.appendChild(book);
            restaurants.appendChild(result);
            index = index + 1;

            //BOTTONE RISTORANTE PRENOTAZIONE
            var btn = document.createElement("BUTTON");
            btn.innerHTML = "PRENOTA";
            btn.addEventListener("click", booking);
            book.appendChild(btn);

        }
    }
};

function slide() {
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = $('.myImg');
  var modalImg = $("#img01");
  var captionText = document.getElementById("caption");
  $('.myImg').click(function(){
      modal.style.display = "block";
      var newSrc = this.src;
      modalImg.attr('src', newSrc);
      captionText.innerHTML = this.alt;
  });

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
}

/*function clean(){
        localStorage.clear();
        location.replace("../Homepage/Homepage.html")
}

function accedi(){
        var a=null; //variabili con a (apassword) in coorelazione con var a
        for(var i=0; i<=parseInt(localStorage.getItem("NumeroUtenti")); i++){
                if(document.getElementById("fnome").value == localStorage.getItem("Nome"+i)){
                        if(document.getElementById("fpass").value == localStorage.getItem("Password"+i)){
                                a=i;
                        }
                        else{
                                alert("Password errata, reinserire.");
                        }
                }
        }
        if(a!=null){
                localStorage.setItem("Login"+a, true);
                location.replace("../Prenota/Profilo.html");
        }
        else{
                alert("Mail non esistente, reinserire");
        }

}

function logoutuser(){
        var l;
        for(var i=0; i<=parseInt(localStorage.getItem("NumeroUtenti")); i++){
                if(localStorage.getItem("Login"+i)=="true"){
                        l=i;
                }
        }
        localStorage.setItem("Login"+l, false);
        location.replace("../Homepage/Homepage.html")
}*/
