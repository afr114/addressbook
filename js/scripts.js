$(document).ready(function(){
  $('#add-address').click(function(){
    $("#new-addresses").append(
      '<div class="new-form" style="margin-left:2%; margin-right:2%; border-bottom:2px solid black padding-bottom: 2px; border-top:2px solid black; padding-top:2px;">' +
    '<div class="new-address">' +
      '<div class="form-group">' +
        '<label for="new-street">Address</label>' +
        '<input type="text" class="new-street form-control">' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="new-city">City</label>' +
        '<input type="text" name="new-city" class="new-city form-control">' +
      '</div>'+
      '<div class="form-group">' +
      '<label for="new-state">State</label>' +
        '<input type="text" name="new-state" class="new-state form-control">' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="new-zip">Zip</label>' +
        '<input type="text" name="new-zip" class="new-zip form-control">' +
      '</div>' +
    '</div>' + '</div>'
    );
  });

  $("form#formcontact").submit(function(event) {
    event.preventDefault();
    var inputtedName = $('input#new-name').val();
    var inputtedNumber = $('input#new-number').val();
    var inputtedEmail = $('input#new-email').val();

    var newContact = { name: inputtedName, number: inputtedNumber, email: inputtedEmail, addresses: [] };

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedZip = $(this).find("input.new-zip").val();


      var newAddress = { address: inputtedStreet, city: inputtedCity, state: inputtedState, zip: inputtedZip };
      newContact.addresses.push(newAddress);

    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.name + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.name);
      $(".name").text(newContact.name);
      $(".number").text(newContact.number);
      $(".email").text(newContact.email);

      $("ul#addresses").text("");

      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.address + ", " + address.city + ", " + address.state + ", " + address.zip + "</li>");
      });
    });

    $("input#new-name").val("");
    $("input#new-number").val("");
    $("input.new-email").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("input.new-zip").val("");
  });
});
