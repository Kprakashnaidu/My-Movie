"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var icon_1 = require("@angular/material/icon");
var menu_1 = require("@angular/material/menu");
var expansion_1 = require("@angular/material/expansion");
var input_1 = require("@angular/material/input");
var toolbar_1 = require("@angular/material/toolbar");
var checkbox_1 = require("@angular/material/checkbox");
var divider_1 = require("@angular/material/divider");
var list_1 = require("@angular/material/list");
var form_field_1 = require("@angular/material/form-field");
var select_1 = require("@angular/material/select");
var bottom_sheet_1 = require("@angular/material/bottom-sheet");
var stepper_1 = require("@angular/material/stepper");
var table_1 = require("@angular/material/table");
var tooltip_1 = require("@angular/material/tooltip");
var snack_bar_1 = require("@angular/material/snack-bar");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var dialog_1 = require("@angular/material/dialog");
var chips_1 = require("@angular/material/chips");
var autocomplete_1 = require("@angular/material/autocomplete");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./components/header/header.component");
var footer_component_1 = require("./components/footer/footer.component");
var home_page_component_1 = require("./components/home-page/home-page.component");
var movie_component_1 = require("./components/movie/movie.component");
var login_component_1 = require("./components/login/login.component");
var layout_component_1 = require("./components/layout/layout.component");
var global_constants_1 = require("./commons/global-constants");
var register_component_1 = require("./components/register/register.component");
var login_layout_component_1 = require("./components/login-layout/login-layout.component");
var forgot_password_component_1 = require("./components/forgot-password/forgot-password.component");
var about_us_component_1 = require("./components/about-us/about-us.component");
var contact_us_component_1 = require("./components/contact-us/contact-us.component");
var auditorium_form_component_1 = require("./components/auditorium-form/auditorium-form.component");
var movie_form_component_1 = require("./components/movie-form/movie-form.component");
var manage_component_1 = require("./components/manage/manage.component");
var movies_component_1 = require("./components/movies/movies.component");
var screen_component_1 = require("./components/templates/screen/screen.component");
var show_form_component_1 = require("./components/templates/show-form/show-form.component");
var select_members_component_1 = require("./components/templates/select-members/select-members.component");
var payment_form_component_1 = require("./components/templates/payment-form/payment-form.component");
var add_movie_to_show_form_component_1 = require("./components/templates/add-movie-to-show-form/add-movie-to-show-form.component");
var my_bookings_component_1 = require("./components/my-bookings/my-bookings.component");
var profile_component_1 = require("./components/profile/profile.component");
var auth_service_1 = require("./services/auth/auth.service");
var global_service_1 = require("./services/global/global.service");
var token_interceptor_service_1 = require("./services/token-interceptor/token-interceptor.service");
var user_service_1 = require("./services/user/user.service");
var search_pipe_1 = require("./pipes/search.pipe");
var auth_guard_1 = require("./guards/auth/auth.guard");
var admin_guard_1 = require("./guards/admin/admin.guard");
var materialModules = [
    button_1.MatButtonModule,
    card_1.MatCardModule,
    icon_1.MatIconModule,
    menu_1.MatMenuModule,
    expansion_1.MatExpansionModule,
    input_1.MatInputModule,
    toolbar_1.MatToolbarModule,
    checkbox_1.MatCheckboxModule,
    divider_1.MatDividerModule,
    list_1.MatListModule,
    form_field_1.MatFormFieldModule,
    select_1.MatSelectModule,
    bottom_sheet_1.MatBottomSheetModule,
    stepper_1.MatStepperModule,
    table_1.MatTableModule,
    tooltip_1.MatTooltipModule,
    snack_bar_1.MatSnackBarModule,
    datepicker_1.MatDatepickerModule,
    core_2.MatNativeDateModule,
    dialog_1.MatDialogModule,
    chips_1.MatChipsModule,
    autocomplete_1.MatAutocompleteModule
];
var templates = [
    select_members_component_1.SelectMembersComponent,
    show_form_component_1.ShowFormComponent,
    screen_component_1.ScreenComponent,
    payment_form_component_1.PaymentFormComponent,
    add_movie_to_show_form_component_1.AddMovieToShowFormComponent
];
var components = [
    app_component_1.AppComponent,
    header_component_1.HeaderComponent,
    footer_component_1.FooterComponent,
    home_page_component_1.HomePageComponent,
    movie_component_1.MovieComponent,
    login_component_1.LoginComponent,
    layout_component_1.LayoutComponent,
    register_component_1.RegisterComponent,
    login_layout_component_1.LoginLayoutComponent,
    forgot_password_component_1.ForgotPasswordComponent,
    about_us_component_1.AboutUsComponent,
    contact_us_component_1.ContactUsComponent,
    auditorium_form_component_1.AuditoriumFormComponent,
    movie_form_component_1.MovieFormComponent,
    manage_component_1.ManageComponent,
    movies_component_1.MoviesComponent,
    my_bookings_component_1.MyBookingsComponent,
    profile_component_1.ProfileComponent,
    templates
];
var angularModules = [
    platform_browser_1.BrowserModule,
    app_routing_module_1.AppRoutingModule,
    animations_1.BrowserAnimationsModule,
    forms_1.FormsModule,
    forms_1.ReactiveFormsModule,
    http_1.HttpClientModule,
    common_1.CommonModule
];
var services = [
    auth_service_1.AuthService,
    global_service_1.GlobalService,
    user_service_1.UserService
];
var providers = [
    global_constants_1.GlobalConstants,
    auth_guard_1.AuthGuard,
    admin_guard_1.AdminGuard,
    services
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [components, search_pipe_1.SearchPipe],
            imports: [angularModules, materialModules, animations_1.BrowserAnimationsModule],
            providers: [providers, { provide: http_1.HTTP_INTERCEPTORS, useClass: token_interceptor_service_1.TokenInterceptorService, multi: true }],
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [templates]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
