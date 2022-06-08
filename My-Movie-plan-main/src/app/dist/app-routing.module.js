"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var about_us_component_1 = require("./components/about-us/about-us.component");
var auditorium_form_component_1 = require("./components/auditorium-form/auditorium-form.component");
var contact_us_component_1 = require("./components/contact-us/contact-us.component");
var forgot_password_component_1 = require("./components/forgot-password/forgot-password.component");
var home_page_component_1 = require("./components/home-page/home-page.component");
var layout_component_1 = require("./components/layout/layout.component");
var login_layout_component_1 = require("./components/login-layout/login-layout.component");
var login_component_1 = require("./components/login/login.component");
var manage_component_1 = require("./components/manage/manage.component");
var movie_form_component_1 = require("./components/movie-form/movie-form.component");
var movie_component_1 = require("./components/movie/movie.component");
var movies_component_1 = require("./components/movies/movies.component");
var my_bookings_component_1 = require("./components/my-bookings/my-bookings.component");
var profile_component_1 = require("./components/profile/profile.component");
var register_component_1 = require("./components/register/register.component");
var payment_form_component_1 = require("./components/templates/payment-form/payment-form.component");
var screen_component_1 = require("./components/templates/screen/screen.component");
var admin_guard_1 = require("./guards/admin/admin.guard");
var auth_guard_1 = require("./guards/auth/auth.guard");
var from_close_guard_1 = require("./guards/form/from-close.guard");
var routes = [
    {
        path: '', component: layout_component_1.LayoutComponent, children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: home_page_component_1.HomePageComponent },
            { path: 'movies', component: movies_component_1.MoviesComponent },
            { path: 'movie/:movieId', component: movie_component_1.MovieComponent },
            { path: 'about', component: about_us_component_1.AboutUsComponent },
            { path: 'contact', component: contact_us_component_1.ContactUsComponent },
            { path: 'select-seats', component: screen_component_1.ScreenComponent, canActivate: [auth_guard_1.AuthGuard] },
            { path: 'payment', component: payment_form_component_1.PaymentFormComponent, canActivate: [auth_guard_1.AuthGuard] },
            {
                path: 'my', children: [
                    { path: '', redirectTo: '/my/profile', pathMatch: 'full' },
                    { path: 'profile', component: profile_component_1.ProfileComponent },
                    { path: 'bookings', component: my_bookings_component_1.MyBookingsComponent }
                ]
            },
        ]
    },
    {
        path: 'admin', component: layout_component_1.LayoutComponent, canActivate: [auth_guard_1.AuthGuard, admin_guard_1.AdminGuard], children: [
            { path: '', redirectTo: '/admin/manage', pathMatch: 'full' },
            { path: 'manage', component: manage_component_1.ManageComponent },
            { path: 'add-auditorium', component: auditorium_form_component_1.AuditoriumFormComponent, canDeactivate: [from_close_guard_1.FromCloseGuard] },
            { path: 'add-movie', component: movie_form_component_1.MovieFormComponent, canDeactivate: [from_close_guard_1.FromCloseGuard] }
        ]
    },
    {
        path: 'user', component: login_layout_component_1.LoginLayoutComponent, children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'register', component: register_component_1.RegisterComponent },
            { path: 'forgot-password', component: forgot_password_component_1.ForgotPasswordComponent }
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
