"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchPipe = void 0;
var core_1 = require("@angular/core");
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (movies, search, genre, language) {
        // return value.pipe(
        //   map(movies => {
        //     if (search)
        //       movies = movies.filter(movie => movie.name.toLowerCase == search.toLowerCase || movie.genres?.includes(search) || movie.language?.toLowerCase == search.toLowerCase);
        //     if (genre)
        //       movies = movies.filter(movie => movie.genres?.includes(genre));
        //     if (language)
        //       movies = movies.filter(movie => movie.language?.toLowerCase == language.toLowerCase);
        //     return movies;
        //   })
        // return [];
        // );
        if ((movies === null || movies === void 0 ? void 0 : movies.length) > 0) {
            if (search) {
                var s_1 = search.toLowerCase();
                movies = movies === null || movies === void 0 ? void 0 : movies.filter(function (movie) { var _a, _b; return movie.name.toLowerCase().indexOf(s_1) > -1 || ((_a = movie.genres) === null || _a === void 0 ? void 0 : _a.includes(search)) || ((_b = movie.language) === null || _b === void 0 ? void 0 : _b.toLowerCase().indexOf(s_1)) > -1; });
            }
            if (genre)
                movies = movies === null || movies === void 0 ? void 0 : movies.filter(function (movie) { var _a; return (_a = movie.genres) === null || _a === void 0 ? void 0 : _a.includes(genre); });
            if (language)
                movies = movies === null || movies === void 0 ? void 0 : movies.filter(function (movie) { var _a; return ((_a = movie.language) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == language.toLowerCase(); });
        }
        return movies;
    };
    SearchPipe = __decorate([
        core_1.Pipe({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;
