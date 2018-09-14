var page = 0;

function pagination(offset){
  page = offset;
  clearPage();
  if(offset == 2){
    firstTen(page*10);
  }
  else{
    result = page-10;
    if(result < 0 )
    {
      result = 0
    }
    firstTen(result);
  }
}

function searchHeroButton()
{
  if(document.getElementById('heroSearch').value == ""){
    document.getElementById("noValue").classList.remove('hideDiv');
  }
  else{
    if(document.getElementById("noValue").classList.contains)
    {
      document.getElementById("noValue").classList.add('hideDiv');
    }
    document.getElementById("homeDiv").classList.remove('hideDiv');
    var nodeData0 = document.getElementById('heroData_0');
    while (nodeData0.hasChildNodes()) {
      nodeData0.removeChild(nodeData0.lastChild);
    }
    document.getElementById("pagination").classList.add('hideDiv');
    var htmlSearchHeroData= '<div id="heroImage"></div><div id="heroSeries"></div><div id="heroEvents"></div>';
    nodeData0.insertAdjacentHTML('beforeend', htmlSearchHeroData );

    searchHero(document.getElementById('heroSearch').value,0);
  }
}
window.onload= function(){
  document.getElementById("heroSearch")
  .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
      document.getElementById("searchButton").click();
    }
  });
  firstTen(0);
}
