$(document).ready(init);

function print(array) { 
  
  var source = $("#album-template").html();
  var template = Handlebars.compile(source); 
  
  array.forEach(function(element) {
    console.log(element);

    var context = {
      title: element.title,
      author: element.author,
      year: element.year,
      album: element.poster,
      genere: element.genre
    }

    $('.container').append(template(context));

  });

}

function filter() {
  
  $('#search').change(function () { 

  
  });

  }


function init() { 
  
  $.ajax({
    method: "GET",
    url: "../php/api.php",
    dataType: "json",
    success: function (data) {
      
      var arrayResult = data;
      
      print(arrayResult);

      filter();
        
    },
    error: function (error) { 

      alert(error);

     }
  });

 }