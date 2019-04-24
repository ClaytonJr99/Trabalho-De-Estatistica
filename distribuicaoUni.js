function entrada() {
    var vmax = Number(document.getElementById("vMax").value);
    var vmin = Number(document.getElementById("vMin").value);
    var intervalo = document.getElementById("interv").value
    var dados = document.getElementById("intDados").value;
    var vet = dados.split(";");  

    var media = 0;
    media = ((vmax + vmin) / 2);   
    var dp = Math.sqrt(((vmax-vmin)** 2) /12).toFixed(2);
    var coef = ((dp / media)*100).toFixed(2);
    coef = coef + "%";
    var inter = 0;  
    if(intervalo == "menorQ"){
        inter = vet - vmin;
    }
    else if(intervalo == "maiorQ"){              
        inter = vmax - vet;
    }
    else{
        inter = vet[1] - vet[0];
    }
    var desuni = 0;
    desuni = (1/(vmax - vmin))*inter;
    desuni = (desuni * 100) + "%";
    document.getElementById("saida1").innerHTML ="A média é: "+ media +"</br> O desvio padrão é: " + dp + "</br> O coeficiente de variação é: " + coef + "</br> A destribuição uniforme é: " + desuni;
}