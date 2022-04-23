var btc = document.getElementById("bitcoin");
var bina = document.getElementById("binance");
var eth = document.getElementById("ethereum");

var settings = {
    "async":true,
     "scrossDomain":true,
     "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}

 $.ajax(settings).done(function(response){
    btc.innerHTML= response.bitcoin.usd;
    eth.innerHTML= response.ethereum.usd;
    bina.innerHTML= response.bitcoin.usd;
});