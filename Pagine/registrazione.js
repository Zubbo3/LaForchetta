var Clienti = [];

/*function caricaUtenti(){
  if (localStorage.getItem('Utenti') == null) {
        localStorage.setItem('Utenti', JSON.stringify(nu));
    }
  else {
    nu = JSON.parse(localStorage.getItem('Utenti'));
  }
}*/

function registrazione() {
	var nome = document.getElementById('fnome').value;
	var mail = document.getElementById('fmail').value;
	var pass = document.getElementById('fpass').value;
	var cpass = document.getElementById('fcpass').value;
	var telefono = document.getElementById('ftelefono').value;

	var nu = {
		user : nome,
		mail : mail,
		pass : pass,
		cpass : cpass,
		telefono : telefono
	};

	var NuovoUtente = JSON.stringify(nu);

	if (pass == cpass) {
		Clienti.push(NuovoUtente);
		localStorage.setItem("Utenti", Clienti);
		sessionStorage.setItem("utentelog", nome);
		sessionStorage.setItem("passlog", pass);
	}
	else {
		alert("Dati non corretti")
	}
}

function accedi() {
	var nuovou = document.getElementById('inpnome').value;
	var nuovop = document.getElementById('inppass').value;
	var nomeu = localStorage.getItem("Utenti");
	if (nomeu.indexOf(nuovou) > 0) {
		if (nomeu.indexOf(nuovop) > 0) {
			sessionStorage.setItem("utentelog", nuovou);
			sessionStorage.setItem("passlog", nuovop);
			document.getElementById("in1").style.display='none';
			document.getElementById("in2").style.display='none';
			document.getElementById("in3").style.display='none';
			document.getElementById("in4").style.display='block';
			document.getElementById("Profilobool").style.display='block';
			document.getElementById("accedi").style.display='none';
			document.getElementById("logout").style.display='block';
			document.getElementById("scritta").style.display='block';
			document.getElementById("ciao").innerHTML = nuovou;
		}
	}
	else {
		alert("Nome o Password sbagliata")
	}
}

function utenteloggato() {
	if (sessionStorage.getItem("utentelog") != null) {
		document.getElementById("in1").style.display='none';
		document.getElementById("in2").style.display='none';
		document.getElementById("in3").style.display='none';
		document.getElementById("in4").style.display='block';
		document.getElementById("Profilobool").style.display='block';
		document.getElementById("accedi").style.display='none';
		document.getElementById("logout").style.display='block';
		document.getElementById("scritta").style.display='block';
		document.getElementById("ciao").innerHTML = sessionStorage.getItem("utentelog");
	}
	else {
		document.getElementById("in1").style.display='block';
		document.getElementById("in2").style.display='block';
		document.getElementById("in3").style.display='block';
		document.getElementById("in4").style.display='none';
		document.getElementById("Profilobool").style.display='none';
		document.getElementById("accedi").style.display='block';
		document.getElementById("logout").style.display='none';
		document.getElementById("scritta").style.display='none';
	}
}

function logoutuser() {
	sessionStorage.clear();
	document.getElementById("in1").style.display='block';
	document.getElementById("in2").style.display='block';
	document.getElementById("in3").style.display='block';
	document.getElementById("in4").style.display='none';
	document.getElementById("Profilobool").style.display='none';
	document.getElementById("accedi").style.display='block';
	document.getElementById("logout").style.display='none';
	document.getElementById("scritta").style.display='none';
}

/*if (userlog == false) {
	document.getElementById('Profilobool').style.visibility='hidden';
}
else {
	document.getElementById('Profilobool').style.visibility='visible';
}*/


/*//RILEVA IL NUMERO DI UTENTI SE LA VARIABILE E' SETTATA
if("NumeroUtenti" in localStorage){
	var z= localStorage.getItem("NumeroUtenti");
}
else{
	var z;
}
function registra(){
	if(z==undefined){
		z=1;
		localStorage.setItem("NumeroUtenti", z);
	}
	else{
		z=parseInt(z)+1;
		localStorage.setItem("NumeroUtenti", z);
	}
	//NOME
	if(document.getElementById("fnome").value == "") {
		alert("Il campo Nome � vuoto");
		document.modulo.nome.focus();
			return false;
	}
	//COGNOME
	else if(document.getElementById("fcognome").value == ""){
		alert("Il campo Cognome � vuoto");
		document.modulo.cognome.focus();
			return false;
	}
	//MAIL
	else if(document.getElementById("fmail").value == "") {
		alert("Il campo Mail � vuoto");
		document.modulo.mail.focus();
			return false;
	}
	//PASSWORD
	else if(document.getElementById("fpassword").value == "") {
		alert("Il campo Password � vuoto");
		document.modulo.password.focus();
			return false;
	}
	//CONFERMA
	else if(document.getElementById("fconferma").value == "") {
		alert("Il campo Conferma password � vuoto");
		document.modulo.conferma.focus();
			return false;
	}
	//PASSWORD CORRETTA
	else if(document.getElementById("fconferma").value != document.getElementById("fpassword").value) {
		alert("La password di conferma � diversa da quella inserita, controllare");
		return false;
	}
	//DATA
	else if(document.getElementById("fdata").value == "") {
		alert("Il campo Data di nascita � vuoto");
		document.modulo.data.focus();
			return false;
	}
	else {
		localStorage.setItem("Nome"+z,document.getElementById("fnome").value);
		localStorage.setItem("Cognome"+z,document.getElementById("fcognome").value);
		localStorage.setItem("Mail"+z,document.getElementById("fmail").value);
		localStorage.setItem("Password"+z,document.getElementById("fpassword").value);
		localStorage.setItem("Data di nascita"+z,document.getElementById("fdata").value);
		//TELEFONO
		if(document.getElementById("ftelefono").value != "") {
			localStorage.setItem("Telefono"+z,document.getElementById("ftelefono").value);
		}
		//INDIRIZZO
		if(document.getElementById("findirizzo").value != "") {
			localStorage.setItem("Indirizzo"+z,document.getElementById("findirizzo").value);
		}
		localStorage.setItem("Login"+z,true);
		localStorage.setItem("k" + z ,0);
		location.replace("profilo.html");
	}

}
// PROFILO UTENTE
function carica_utente(){
	//RICERCA UTENTE LOGGATO
	var l;
	for(var i=0; i<=parseInt(localStorage.getItem("NumeroUtenti")); i++){
		if(localStorage.getItem("Login"+i)=="true"){
			l= i;
		}
	}
	//CARICA I DATI UTENTE
	var nodo = document.createElement("nnome");
		var contenuto_nodo = document.createTextNode(localStorage.getItem("Nome"+l));
		nodo.appendChild(contenuto_nodo);
		document.getElementById("pnome").appendChild(nodo);

	var nodo1 = document.createElement("ncognome");
		var contenuto_nodo1 = document.createTextNode(localStorage.getItem("Cognome"+l));
		nodo1.appendChild(contenuto_nodo1);
		document.getElementById("pcognome").appendChild(nodo1);

	var nodo2 = document.createElement("nmail");
		var contenuto_nodo2 = document.createTextNode(localStorage.getItem("Mail"+l));
		nodo2.appendChild(contenuto_nodo2);
		document.getElementById("pmail").appendChild(nodo2);

	var nodo3 = document.createElement("ndata");
		var contenuto_nodo3 = document.createTextNode(localStorage.getItem("Data di nascita"+l));
		nodo3.appendChild(contenuto_nodo3);
		document.getElementById("pdata").appendChild(nodo3);

	var nodo4 = document.createElement("ntelefono");
		var contenuto_nodo4 = document.createTextNode(localStorage.getItem("Telefono"+l));
		nodo4.appendChild(contenuto_nodo4);
		document.getElementById("ptelefono").appendChild(nodo4);

	var nodo5 = document.createElement("nindirizzo");
		var contenuto_nodo5 = document.createTextNode(localStorage.getItem("Indirizzo"+l));
		nodo5.appendChild(contenuto_nodo5);
		document.getElementById("pindirizzo").appendChild(nodo5);

	for( var i = 1; i<=(localStorage.getItem("k"+l +localStorage.getItem("Mail"+l))); i++){
		var nodo6 = document.createElement("nprenotazioni");
		var contenuto_nodo6 = document.createTextNode(localStorage.getItem("Prenotazione "+ i +" "+ localStorage.getItem("Mail"+l)));
		nodo6.appendChild(contenuto_nodo6);
		document.getElementById("pprenotazioni").appendChild(nodo6);
	}
}

//MODIFICA DATI UTENTE GI� REGISTRATO
function modifica(){
	//RICERCA UTENTE LOGGATO
	var l;
	for(var i=0; i<=parseInt(localStorage.getItem("NumeroUtenti")); i++){
		if(localStorage.getItem("Login"+i)=="true"){
			l= i;
		}
	}
	//INSERIMENTO NUOVI DATI SE CAMPO NON NULLO
	if(document.getElementById("gnome").value != "") {
			localStorage.setItem("Nome"+l, document.getElementById("gnome").value);
	}
	if(document.getElementById("gcognome").value != "") {
		localStorage.setItem("Cognome"+l, document.getElementById("gcognome").value);
	}
	if(document.getElementById("gmail").value != "") {
		localStorage.setItem("Mail"+l,document.getElementById("gmail").value);
	}
	if(document.getElementById("gdata").value != "") {
			localStorage.setItem("Data di nascita"+l,document.getElementById("gdata").value);
	}
	if(document.getElementById("gpassword").value != ""&& document.getElementById("gconferma").value != ""){
		if(document.getElementById("gpassword").value == document.getElementById("gconferma").value){
			localStorage.setItem("Password"+l,document.getElementById("gpassword").value);
		}
		else{
			alert("La password inserita � diversa da quella confermata, controllare");
		}
	}
	else{
		if(document.getElementById("gpassword").value != ""|| document.getElementById("gconferma").value != ""){
			alert("Se si desidera cambiare la password, riempire sia il campo Password che il campo Conferma Password");
		}
	}
	if(document.getElementById("gtelefono").value != "") {
			localStorage.setItem("Telefono"+l,document.getElementById("gtelefono").value);
	}
	if(document.getElementById("gindirizzo").value != "") {
			localStorage.setItem("Indirizzo"+l,document.getElementById("gindirizzo").value);
	}
	location.replace("profilo.html");
}



function logout(){
	var l;
	for(var i=0; i<=parseInt(localStorage.getItem("NumeroUtenti")); i++){
		if(localStorage.getItem("Login"+i)=="true"){
			l= i;
		}
	}
	localStorage.setItem("Login"+l, false);
	location.replace("../../Men�/Homepage/homepage.html");
}


function pulisci(){
	localStorage.clear();
}*/
