var soap = require("soap");
var app = require("express")();
var fs = require("fs");
var xml = fs.readFileSync("service.wsdl", "utf8");

var port = 5001;

var serviceObject = {
  HelloService: {
    HelloServiceSoapPort: {
      HelloFunction: (args) => {
        console.log("Hello Function Start");
        return `Hello ${args.name.toUpperCase()}`;
      },
    },
  },
};

app.listen(port, function () {
  console.log("Listening on port " + port);
  var wsdl_path = "/hello";
  soap.listen(app, wsdl_path, serviceObject, xml);
  console.log(
    "Check http://localhost:" +
      port +
      wsdl_path +
      "?wsdl to see if the service is working"
  );
});
