"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var util_1 = require("src/app/classes/util/util");
var select_members_component_1 = require("../templates/select-members/select-members.component");
var MovieComponent = /** @class */ (function () {
    function MovieComponent(_mbs, _globalService, _userService, _router, _activeRoute) {
        this._mbs = _mbs;
        this._globalService = _globalService;
        this._userService = _userService;
        this._router = _router;
        this._activeRoute = _activeRoute;
        this.casts = new rxjs_1.BehaviorSubject(this.actors);
        this.cast$ = this.casts.asObservable();
        this.crews = new rxjs_1.BehaviorSubject(this.actors);
        this.crew$ = this.crews.asObservable();
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieId = this._activeRoute.snapshot.params.movieId;
        this._globalService.getAllMovies()
            .subscribe(function (movies) {
            var _a, _b;
            var movie = movies.find(function (movie) { return movie.id == _this.movieId; });
            _this.selectedMovie$ = rxjs_1.of(movie);
            _this.casts.next((_a = movie === null || movie === void 0 ? void 0 : movie.casts) === null || _a === void 0 ? void 0 : _a.filter(function (cast) { return cast.isCast == 'yes'; }));
            _this.crews.next((_b = movie === null || movie === void 0 ? void 0 : movie.crews) === null || _b === void 0 ? void 0 : _b.filter(function (cast) { return cast.isCast == 'no'; }));
        });
    };
    MovieComponent.prototype.openBottomSheet = function () {
        var _this = this;
        if (!this._userService.isLoggedIn()) {
            this._router.navigate(['/user/login'], { state: { redirect: this._router.url }, queryParams: { 'booking': true } });
            return;
        }
        else {
            var sheet = this._mbs.open(select_members_component_1.SelectMembersComponent, { data: { movieId: this.movieId, movie: this.selectedMovie$ } });
            sheet.afterDismissed().subscribe(function (data) {
                if (data === null || data === void 0 ? void 0 : data.tempSelectMembers) {
                    _this._globalService.setTempSelectMembers(data.tempSelectMembers);
                    _this._router.navigate(['/select-seats']);
                }
            });
        }
    };
    MovieComponent.prototype.formatRelease = function (release) {
        if (new Date(release) > new Date())
            return 'Releasing on ' + util_1.Util.formatDate(release);
        return 'Now Playing';
    };
    MovieComponent = __decorate([
        core_1.Component({
            selector: 'app-movie',
            templateUrl: './movie.component.html',
            styleUrls: ['./movie.component.css'],
            encapsulation: core_1.ViewEncapsulation.Emulated
        })
    ], MovieComponent);
    return MovieComponent;
}());
exports.MovieComponent = MovieComponent;
