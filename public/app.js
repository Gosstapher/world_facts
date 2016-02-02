window.onload = function(){
  console.log('App started');
  var url = "https://restcountries.eu/rest/v1";
  var request = new XMLHttpRequest();

  request.open("GET", url);

  request.onload = function(){
    if(request.status === 200){
      console.log("got the data");
      var countryList = JSON.parse(request.responseText);

      for (var i = 0; i < countryList.length; i++) {
        var sel = document.getElementById('select');
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(countryList[i].name) );
        opt.value = countryList[i].name;
        sel.appendChild(opt);
      };

      

    }
  }


  request.send(null);

};
