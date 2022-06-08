"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var from_close_guard_1 = require("./from-close.guard");
describe('FromCloseGuard', function () {
    var guard;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        guard = testing_1.TestBed.inject(from_close_guard_1.FromCloseGuard);
    });
    it('should be created', function () {
        expect(guard).toBeTruthy();
    });
});
