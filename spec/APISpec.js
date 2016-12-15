 

var request = require("request");

var base_url = "http://localhost:1337/";

/* Test for /login
* it checks if the server answers with 200 code header
*/
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

/* Test for /login
* it checks if the server answers with 404 when a POST request is done
*/
describe("Test /login", function() {
    it("returns status code 404", function(done) {
        request.post(
            base_url + "login/", 
            function(error, response, body) {
                expect(response.statusCode).toBe(404);
                done();
            });
    }); 
});

/* Test for /home with GET
* it checks if the server answers with 200 code header
*/
describe("Test /home", function() {
    it("returns status code 200", function(done) {
        request.get(
            base_url + "login/", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});

/* Test for /home with POST (i.e. after logging in)
* it checks if the server answers with 200 code header
*/
describe("Test /home", function() {
    //set the data
    var data = {username: 'username', password: 'password'};
    it("returns status code 200", function(done) {
        request.get(
            base_url + "home/", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});

/* Test for /*Reservation
* it checks if the server answers with 200 code header
*/
describe("Test /*Reservation", function() {
    it("returns status code 200", function(done) {
        request.get(
            base_url + "*Reservation/", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});

/* Test for /addReservation*
* it checks if the server answers with 200 code header
*/
describe("Test /addReservation*", function() {
    it("returns status code 200", function(done) {
        request.get(
            base_url + "addReservation*/", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});

/* Test for /evalutate*
* it checks if the server answers with 200 code header
*/
describe("Test /evalutate", function() {
    it("returns status code 200", function(done) {
        request.get(
            base_url + "evalutate/", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});

/* Test for /evalutate_*
* it checks if the server answers with 200 code header
*/
describe("Test /evalutate_*", function() {
    it("returns status code 200", function(done) {
        request.get(
            base_url + "evalutate_*/", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});

/* Test for /showEvalutation_*
* it checks if the server answers with 200 code header
*/
describe("Test /showEvalutation_*", function() {
    it("returns status code 200", function(done) {
        request.get(
            base_url + "showEvalutation_*/", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});

/* Test for /logout
* it checks if the server answers with 200 code header
*/
describe("Test /logout", function() {
    it("returns status code 200", function(done) {
        request.get(
            base_url + "logout/", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});