$(document).ready(init);


function init() { 
  
  $.ajax({
    method: "GET",
    url: "../php/api.php",
    dataType: "json",
    success: function (data) {
      
      var arrayResult = data;
      var source = $("#album-template").html();
      var template = Handlebars.compile(source); 

      arrayResult.forEach(function(element) {
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

      $('select').change(function () { 

        var valSelect = $('select').val();
        
        $('.cover').hide();

        $('.cover').each(function () {

          var genreCover = $(this).data('genere').toLowerCase();

          if (genreCover == valSelect) {
            
            $(this).show();

          } 

        });
        
        if (valSelect == 'all') {

          $('.cover').show();

        }
      
      });
        
    },
    error: function (error) { 

      alert(error);

     }
  });

 }