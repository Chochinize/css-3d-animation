(function() {

  var http;
  document.getElementById('ajaxbutton').addEventListener("click", makeRequest);

  function makeRequest() {
    http = new XMLHttpRequest();
    if(!http){
      alert("GIVE UPD DUDE");
      return false;
    }
    http.onreadystatechange = Content;
    http.open('GET', 'test.html');
    http.send();
  }
  function Content() {
    if(http.readyState === XMLHttpRequest.DONE){
      if(http.status === 200){
        alert(http.responseText);
      }else{
        alert("PROBIV BRO");
      }
    }
  }

}());
