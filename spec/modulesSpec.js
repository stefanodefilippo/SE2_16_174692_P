//some tests of the server-side modules

//import modules
var moduleUser = require('../user.js');
var moduleReservation = require('../reservation.js');
var moduleMenu = require('../menu.js');
var moduleEvalutation = require('../evalutation.js');

describe("Test user.js module",function() {
    
    //function authenticate
    describe("on valid credentials",function() {
        it("it returns a list containing the variable status = loginSuccess", function(){
           expect(moduleUser.authenticate("gigi", "hh")[3]).toBe("loginSuccess");
        });    
    });
    describe("on invalid credentials",function() {
        it("it returns a list containing the variable status = loginFailed", function(){
           expect(moduleUser.authenticate("gigi", "jj")[3]).toBe("loginFailed");
        });
    
    });
    
    
});

describe("Test reservation.js module",function() {
    
    //function getStatus
    describe("on valid input",function() {
        it("it returns a list containing the status of the reservations for that user", function(){
           expect(moduleReservation.getStatus(1)).not.toBe(null);
        });    
    });
    describe("with an inexistent user id",function() {
        it("it returns a list containing values ['incompleto', 'incompleto', 'incompleto']", function(){
           expect(moduleReservation.getStatus(11)[3]).toBe("incompleto");
        });
    
    });
    
    //function getReservation
    describe("on valid input",function() {
        it("it returns dishes of the reservations for that user", function(){
           expect(moduleReservation.getReservation(1, "/monday")).not.toBe(null);
        });    
    });
    describe("with an inexistent user id",function() {
        it("by default it returns a list containing values ['niente', 'niente', 'niente']", function(){
           expect(moduleReservation.getReservation(3, "/monday")[0]).toBe("niente");
        });
    
    });
    
});

describe("Test evalutation.js module",function() {
    
    //function getEvalutationStatus
    describe("on valid input",function() {
        it("it returns a list containing the status of the evalutations for that user", function(){
           expect(moduleEvalutation.getEvalutationStatus(1)).not.toBe(null);
        });    
    });
    describe("with an inexistent user id",function() {
        it("it returns a list containing values ['false', 'false', 'false', 'false']", function(){
           expect(moduleEvalutation.getEvalutationStatus(11)[0]).toBe(false);
        });
    
    });
    
    
});

describe("Test menu.js module",function() {
    
    //function getMenu
    describe("on valid input",function() {
        it("it returns a list containing the menu for the specified day", function(){
           expect(moduleMenu.getMenu("niente", "niente", "niente", "niente", "mercoledi")).not.toBe(null);
        });    
    });
    describe("with a wrong day",function() {
        it("the default is that it returns a list containing the menu for monday", function(){
           expect(moduleMenu.getMenu("niente", "niente", "niente", "niente", "mercoledi")).not.toBe(null);
        });
    
    });
    
    
});


