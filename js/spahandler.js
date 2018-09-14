//Single Page Events Handler

function buildHeroInfo(objHeroData,number){
  heroSeries(objHeroData.series.items,number);
  heroEvents(objHeroData.events.items,number);
  heroImage(objHeroData.thumbnail,objHeroData.name,number);
  if(document.getElementById("heroData_"+number).classList.contains('hideDiv')){
    document.getElementById("heroData_"+number).classList.remove('hideDiv');
    document.getElementById("heroData_"+number).style.display = "flex";
  }
  if(number > 0){
    document.getElementById("heroData_"+number).style.display = "flex";
  }
  //deleta lista atual caso usuario realize uma busca
  if(number == 0){
    clearPage();
    //adiciona detalhes no heroi retornado pela busca
    var nodeData0 = document.getElementById('heroData_0');
    nodeData0.onclick = function() { heroInfo(objHeroData.urls[0].url) };
  }
  hideSerieEvents(number);
}
//limpa pagina para novos dados
function clearPage(){
  var node = document.getElementById("firstTen");
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}
//preenche dados das series do heroi
function heroSeries(objHeroSeries,number){
  for(var i=0; i < 3 ; i++){
    if(objHeroSeries[i]){
      var element = document.createElement("div");
      element.appendChild(document.createTextNode(objHeroSeries[i].name));
      var elemen1 = document.getElementById("heroData_"+number);
      elemen1.childNodes[1].append(element);
    }
  }
}
//preenche dados das series do heroi
function heroEvents(objHeroEvents,number)
{
  for(var i=0; i < 3 ; i++){
    if(objHeroEvents[i]){
      var element = document.createElement("div");
      element.appendChild(document.createTextNode(objHeroEvents[i].name));
      var elemen1 = document.getElementById("heroData_"+number)
      elemen1.childNodes[2].append(element);
    }
  }
}
//preenche dados da imagem e nome do heroi
function heroImage(objHeroThumbNail,name,number)
{
  var element = document.createElement("img");
  var elementName = document.createElement("div");
  elementName.className = "heroName";
  element.src = objHeroThumbNail.path+ '.' +objHeroThumbNail.extension;
  elementName.innerText = name;
  var elemen1 = document.getElementById("heroData_"+number);
  elemen1.childNodes[0].append(element);
  elemen1.childNodes[0].append(elementName);
}
//cria secao para colocar cada heroi
function createHeroSection(number,url){
  var htmlSection = "<div class='flex-hero' id='heroData_"+number+"' onclick=heroInfo('"+url+"')>"
  +"<div id='heroImage'></div>"
  +"<div id='heroSeries'></div>"
  +"<div id='heroEvents'></div></div>"
  section = document.getElementById('firstTen');
  section.insertAdjacentHTML('beforeend', htmlSection );
}

function heroInfo(url){
  clearPage();

  var nodeData0 = document.getElementById('heroData_0');
  while (nodeData0.hasChildNodes()) {
    nodeData0.removeChild(nodeData0.lastChild);
  }

  section = document.getElementById('heroInfo');
  document.getElementById('menuNome').classList.add('hideDiv');
  document.getElementById('pagination').classList.add('hideDiv');
  document.getElementById('heroSearchDiv').classList.add('hideDiv');
  var w = window,
  d = document,
  e = d.documentElement,
  g = d.getElementsByTagName('body')[0],
  x = w.innerWidth || e.clientWidth || g.clientWidth,
  y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  var htmlViewDetail ='<div class="backViewDetails"><a href="#" onclick="backDetails('+page+')">&laquo; Voltar</a></div><div class="flex-hero pagination" style="display:flex;"><object type="text/html" data="'+url+'" width="'+x+'" height="'+y+'" style="overflow:auto;"></object></div>';
  section.insertAdjacentHTML('beforeend', htmlViewDetail );
  document.getElementById('heroInfo').classList.remove('hideDiv');
}

function backDetails(page){
  document.getElementById('heroInfo').classList.add('hideDiv');
  document.getElementById('menuNome').classList.remove('hideDiv');
  document.getElementById('pagination').classList.remove('hideDiv');
  document.getElementById('heroSearchDiv').classList.remove('hideDiv');
  document.getElementById("homeDiv").classList.add('hideDiv');
  var node = document.getElementById('heroInfo');
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
  var nodeData0 = document.getElementById('heroData_0');
  while (nodeData0.hasChildNodes()) {
    nodeData0.removeChild(nodeData0.lastChild);
  }
  pagination(page);
}
