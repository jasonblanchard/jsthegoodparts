var parse_email = /^([A-Za-z\d\-]+)@([A-Za-z]+).([A-Za-z]+)$/;

var email = 'jason-12343@example.com';

var result = parse_email.exec(email);

var names = ['username', 'domain', 'tld'];

var i;

for (i = 0; i < names.length; i++) {
  var parameter

  if (result) {
    parameter = result[i + 1];
  } else {
    parameter = "Not a valid email";
  }
  
  document.write(names[i] + ': ' + parameter + '<br />');
}

console.log(result);
