"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var token_interceptor_service_1 = require("./token-interceptor.service");
describe('TokenInterceptorService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(token_interceptor_service_1.TokenInterceptorService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
