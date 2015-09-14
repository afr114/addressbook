var THING = function() {
  // stuff
};

$(document).ready(function(){
  $('form#FORMNAME').submit(function(event){
    event.preventDefault();
    var THING = $('input#THING').val();

    var result = THING();

    $('#result').text(result);

  });
});
