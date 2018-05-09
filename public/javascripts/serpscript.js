var serp = require("serp");
 
var options = {
  host : "google.be",
  qs : {
    q : "test",
    filter : 0,
    pws : 0
  },
  num : 100
};

serp.search(options)
  .then(links => console.log(links))
  .catch(error => console.log(error));
