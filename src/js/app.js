$(document).ready(init);

function print(array) { 

  $('.container').html("");
  
  var source = $("#album-template").html();
  var template = Handlebars.compile(source); 

  if (array.length > 0) {

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

  } else {

    $('.container').html("<h2>Nessun risultato corrispondente</h2>");

  }
  

}

function init() { 

  $('#search').keydown(function (e) { 
    console.log(e.keyCode);

    var searchVal = $('#search').val().toLowerCase();
    console.log(searchVal.length);

    if (e.keyCode == 13) {

      if (searchVal.length > 0) {

        $.ajax({
          method: "GET",
          url: "../php/api.php",
          dataType: "json",
          data: {
            name: searchVal
          },
          success: function (data) {
            console.log(data);
            
            var arrayResult = data;
            
            print(arrayResult);
      
          },
          error: function (error) { 
      
            alert(error);
      
          }
          
        });
        
      }

      

    }

  });

 }