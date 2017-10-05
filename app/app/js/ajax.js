$('#formx').submit(function() {
  var firstName = $("input[name=firstName]").val(); || '';
  var lastName = $("input[name=lastName]").val(); || '';
  var email = $("input[name=email]").val(); || '';
  var phoneNumber = $("input[name=phoneNumber]").val(); || '';
  var password = $("input[name=password]").val(); || '';
  $.ajax({
    datatype: 'json',
    type: 'POST',
    url: 'API-request.php',
    data: {
      firstName:firstName,
      lastName:lastName,
      email:email,
      phoneNumber:phoneNumber,
      password:password
    },
    success: function(data) {
      console.log('message: ' + data);
    };
    error: function() {
      console.log('message': error);
    }
  });
});
