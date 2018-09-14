var accessKey = '&ts=1&apikey=ca10a0e45c6bece86685a50d610c1298&hash=b3859bb5250141d5abc72ca83dc143dd';
//ts - timestamp
//md5(ts+privateKey+publicKey)

var HttpClient = function() {
  this.get = function(aUrl, aCallback) {
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function() {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
      aCallback(anHttpRequest.responseText);
    }
    anHttpRequest.open( "GET", aUrl, true );
    anHttpRequest.send( null );
  }
}
//busca por um heroi pelo nome completo
function searchHero(heroID, number){
  var client = new HttpClient();
  client.get('https://gateway.marvel.com:443/v1/public/characters?name='+ heroID + accessKey, function(response) {
    var objHeroData = JSON.parse(response);
    if(objHeroData.data.count == 0){
      if ( document.getElementById("notFound").classList.contains('hideDiv') ){
        document.getElementById("notFound").classList.remove('hideDiv');
      }
    }
    else{
      document.getElementById("notFound").classList.add('hideDiv');
      buildHeroInfo(objHeroData.data.results[0], number);
    }
  });
}
//ao carregar a tela retorna os 10 primeiros herois e monta uma lista
function firstTen(offset){
  var client = new HttpClient();
  client.get('https://gateway.marvel.com:443/v1/public/characters?&limit=10&orderBy=name&offset=' + offset + accessKey, function(response) {
    var firstTen = JSON.parse(response);
    for(var j = 0; j < 10; j++){
      createHeroSection(j+1, firstTen.data.results[j].urls[0].url);
      buildHeroInfo(firstTen.data.results[j],j+1);
    }
  });
}
