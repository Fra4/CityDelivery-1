function ajaxRequest()
{
    var request=false;
    try { request = new XMLHttpRequest()}catch(e1){
        try{request = new ActiveXObject("Msxml2.XMLHTTP")}catch(e2){
            try{ request = new ActiveXObject("Microsoft.XMLHTTP")
            }catch(e3){request = false}
        }
    }
    return request
}

function loadDoc() 
{
    var xttp = new ajaxRequest();
    xttp.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            document.getElementById("section1").innerHTML=this.responseText;
        }
    }
    var tipo = document.getElementById("form1").value;
    console.log("ReadTipe");
    var url=""
    if (tipo == "Cliente") {
        url="common/txt/cliente.html"
      } else if (tipo == "Fattorino") {
        url="common/txt/fattorino.txt"
      } else {
        url="common/txt/ristorante.txt"
      }
    xttp.open("GET", url, true);
    xttp.send()
}

function loadModificaDati() {
    var tipo = document.getElementById("tipo").innerHTML
    if (tipo == "Cliente") {
        url="common/txt/daticliente.php" // codice al posto dell'url
      } else if (tipo == "Fattorino") {
        url="common/txt/datifattorino.txt"
      } else {
        url="common/txt/datiristorante.txt"
      }
}