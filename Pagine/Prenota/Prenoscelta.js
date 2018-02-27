function populate(s1, s2, s3){
        var s1 = document.getElementById(s1); // CITTA'
        var s2 = document.getElementById(s2); // ORARIO
        var s3 = document.getElementById(s3); // GIORNO
        s2.innerHTML = "";
        if(s3.value == "Lunedi'"){
                if(s1.value == "Milano"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
                if(s1.value == "Roma"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
                if(s1.value == "Napoli"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
        }
        if(s3.value == "Martedi'"){
                if(s1.value == "Milano"){
                        var optionArray = ["|"];
                }
                if(s1.value == "Roma"){
                        var optionArray = ["|"];
                }
                if(s1.value == "Napoli"){
                        var optionArray = ["|"];
                }
        }
        if(s3.value == "Mercoledi'"){
                if(s1.value == "Milano"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
                if(s1.value == "Roma"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
                if(s1.value == "Napoli"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
        }
        if(s3.value == "Giovedi'"){
                if(s1.value == "Milano"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
                if(s1.value == "Roma"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
                if(s1.value == "Napoli"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
        }
        if(s3.value == "Venedi'"){
                if(s1.value == "Milano"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
                if(s1.value == "Roma"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
                if(s1.value == "Napoli"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
        }
        if(s3.value == "Sabato"){
                if(s1.value == "Milano"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
                if(s1.value == "Roma"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
                if(s1.value == "Napoli"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
        }
        if(s3.value == "Domenica"){
                if(s1.value == "Milano"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
                if(s1.value == "Roma"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
                if(s1.value == "Napoli"){
                        var optionArray = ["|", "19.00|19.00", "21.00|21.00"];
                }
        }
        for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}

function inviopreno(){
        var giorno = document.getElementById("giorno").value;
        var risto = document.getElementById("risto").value;
        var ora = document.getElementById("ora").value;
        if(giorno == "Scegli il giorno"){
                alert("Scegli il giorno")
        }
        else if(giorno == "Lunedi'"){
                if(risto == "Milano"){
                        if(ora == "19.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", "");
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else if(risto == "Roma"){
                        if(ora == "19.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", "");
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else if(risto == "Napoli"){
                        if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else{
                        alert("Scegli ristorante");
                }
        }else if(giorno == "Martedi'"){
                if(risto == "Milano"){
                        alert("Giorno di chiusura");
                }
                else if(risto == "Roma"){
                        alert("Giorno di chiusura");
                }
                else if(risto == "Napoli"){
                        alert("Giorno di chiusura");
                }
                else{
                        alert("Scegli ristorante");
                }
        }
        else if(giorno == "Mercoledi'"){
                if(risto == "Milano"){
                        if(ora == "19.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", "");
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else if(risto == "Roma"){
                        if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", "");
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else if(risto == "Napoli"){
                        if(ora == "19.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else{
                        alert("Scegli ristorante");
                }
        }
        else if(giorno == "Giovedi'"){
                if(risto == "Milano"){
                        if(ora == "19.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else if(risto == "Roma"){
                        if(ora == "19.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", "");
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else if(risto == "Napoli"){
                        if(ora == "19.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else{
                        alert("Scegli ristorante");
                }
        }
        else if(giorno == "Venerdi'"){
                if(risto == "Milano"){
                        if(ora == "19.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", "");
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else if(risto == "Roma"){
                        if(ora == "19.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", "");
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else if(risto == "Napoli"){
                        if(ora == "19.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else{
                        alert("Scegli ristorante");
                }
        }
        else if(giorno == "Sabato"){
                if(risto == "Milano"){
                        if(ora == "19.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", "");
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else if(risto == "Roma"){
                        if(ora == "19.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", "");
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else if(risto == "Napoli"){
                        if(ora == "19.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else{
                        alert("Scegli ristorante");
                }
        }
        else if(giorno == "Domenica"){
                if(risto == "Milano"){
                        if(ora == "19.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", "");
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else if(risto == "Roma"){
                        if(ora == "19.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", "");
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else if(risto == "Napoli"){
                        if(ora == "19.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else if(ora == "21.00"){
                                var nodo = document.createElement("a");
                                var cont_nodo = document.createTextNode("Visita questo link");
                                nodo.setAttribute("href", ""); //mettere link a documento html pagina riferimento
                                nodo.appendChild(cont_nodo);
                                document.getElementById("Posti").appendChild(nodo);
                        }
                        else{
                                alert("Scegli orario");
                        }
                }
                else{
                        alert("Scegli ristorante");
                }
        }
}

function clean(){
        localStorage.clear();
        location.replace("Homepage.html");
}
