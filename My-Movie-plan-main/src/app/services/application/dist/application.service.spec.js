"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var application_service_1 = require("../application/application.service");
describe('ApplicationService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(application_service_1.ApplicationService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
