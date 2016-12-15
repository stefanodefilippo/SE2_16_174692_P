 /* Test for /WORLD
  * it checks if the server answers with 200 code header
  */

var request = require("request");

var base_url = "http://localhost:1337/";


describe("Test /login", function() {
    it("returns status code 200", function(done) {
        request.get(
            base_url + "login/", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});