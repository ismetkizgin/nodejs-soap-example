var soap = require("soap");
var url = "http://localhost:5001/hello?wsdl";

soap.createClient(url, function (err, client) {
  if (err) {
    throw err;
  }

  var args = {
    name: "ismet",
  };

  client.HelloFunction(args, function (err, res) {
    if (err) throw err;
    console.log(res);
  });
});
