function hideSerieEvents(number)
{
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var elemen1 = document.getElementById("heroData_"+number);
    elemen1.childNodes[1].className = "hideDiv";
    elemen1.childNodes[2].className = "hideDiv";
    var elemen2 = document.getElementById("menuNome");
    elemen2.className = "hideDiv";
  }
}
