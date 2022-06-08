"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.PaymentFormComponent = exports.MY_FORMATS = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var util_1 = require("src/app/classes/util/util");
exports.MY_FORMATS = {
    parse: {
        dateInput: 'MM/YYYY'
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};
var PaymentFormComponent = /** @class */ (function () {
    function PaymentFormComponent(_fb, _global, _appService, _router) {
        this._fb = _fb;
        this._global = _global;
        this._appService = _appService;
        this._router = _router;
        this.cvvHide = true;
        this.tempMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.tempYears = [];
    }
    PaymentFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tempScreen = this._global.getTempScreen();
        this.selectedMembers = this._global.getTempSelectMembers();
        if (!this.tempScreen && !this.selectedMembers)
            this._router.navigate(['/home'], { queryParams: { payment: 'false' } });
        __spreadArrays(Array(9).keys()).forEach(function (num) { return _this.tempYears.push(new Date().getFullYear() + num); });
        // this.amountToBePaid = this.tempScreen.amount;
        this.paymentForm = this._fb.group({
            cardNumber: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern('^[ 0-9]*$'), forms_1.Validators.minLength(17)]),
            cardExpiryMonth: new forms_1.FormControl('', forms_1.Validators.required),
            cardExpiryYear: new forms_1.FormControl('', forms_1.Validators.required),
            cardCVV: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern('^[0-9]{3}$')])
        });
    };
    Object.defineProperty(PaymentFormComponent.prototype, "cardNumberErrors", {
        get: function () {
            var card = this.paymentForm.get('cardNumber');
            if (card === null || card === void 0 ? void 0 : card.hasError('required'))
                return 'Card Number cannot be empty';
            else if (card === null || card === void 0 ? void 0 : card.hasError('pattern'))
                return 'Invalid card number';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaymentFormComponent.prototype, "monthErrors", {
        get: function () {
            var month = this.paymentForm.get('cardExpiryMonth');
            return (month === null || month === void 0 ? void 0 : month.hasError('required')) ? 'Month cannot be empty' : '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaymentFormComponent.prototype, "yearErrors", {
        get: function () {
            var year = this.paymentForm.get('cardExpiryYear');
            return (year === null || year === void 0 ? void 0 : year.hasError('required')) ? 'Year cannot be empty' : '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaymentFormComponent.prototype, "cvvErrors", {
        get: function () {
            var cvv = this.paymentForm.get('cardCVV');
            if (cvv === null || cvv === void 0 ? void 0 : cvv.hasError('required'))
                return 'CVV Number cannot be empty';
            else if (cvv === null || cvv === void 0 ? void 0 : cvv.hasError('pattern'))
                return 'Invalid CVV number';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    /* Insert spaces to enhance legibility of credit card numbers */
    PaymentFormComponent.prototype.creditCardNumberSpacing = function () {
        var input = this.ccNumberField.nativeElement;
        var selectionStart = input.selectionStart;
        var cardNumber = this.paymentForm.controls.cardNumber;
        var trimmedCardNum = cardNumber.value.replace(/\s+/g, '');
        if (trimmedCardNum.length > 16) {
            trimmedCardNum = trimmedCardNum.substr(0, 16);
        }
        /* Handle American Express 4-6-5 spacing */
        var partitions = trimmedCardNum.startsWith('34') || trimmedCardNum.startsWith('37')
            ? [4, 6, 5]
            : [4, 4, 4, 4];
        var numbers = [];
        var position = 0;
        partitions.forEach(function (partition) {
            var part = trimmedCardNum.substr(position, partition);
            if (part)
                numbers.push(part);
            position += partition;
        });
        cardNumber.setValue(numbers.join(' '));
        /* Handle caret position if user edits the number later */
        if (selectionStart < cardNumber.value.length - 1) {
            input.setSelectionRange(selectionStart, selectionStart, 'none');
        }
    };
    PaymentFormComponent.prototype.formatTime = function (time) {
        return util_1.Util.formatTimeToAmOrPm(time);
    };
    PaymentFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var members = this.selectedMembers;
        if (this.tempScreen && members && this.paymentForm.value) {
            var paymentData = this.paymentForm.value;
            paymentData.paymentDate = new Date();
            paymentData.amount = this.tempScreen.amount;
            var b_details = {
                auditoriumId: members.auditoriumId,
                showId: members.showId,
                movieShowId: members.movieShowId,
                movieId: members.movieId
            };
            var booking = {
                amount: this.tempScreen.amount,
                bookedOn: new Date(),
                dateOfBooking: members.date,
                totalSeats: this.tempScreen.selectedSeats,
                seatNumbers: this.tempScreen.selectedSeatNumbers,
                bookingDetails: b_details,
                payment: paymentData
            };
            this._appService.addBooking(members.auditoriumId, members.showId, members.movieShowId, booking)
                .subscribe(function (booking) {
                if (booking) {
                    _this._router.navigate(['/my/bookings'], { queryParams: { 'payment': true } });
                }
            });
        }
    };
    __decorate([
        core_1.ViewChild('ccNumber')
    ], PaymentFormComponent.prototype, "ccNumberField");
    PaymentFormComponent = __decorate([
        core_1.Component({
            selector: 'app-payment-form',
            templateUrl: './payment-form.component.html',
            styleUrls: ['./payment-form.component.css']
        })
    ], PaymentFormComponent);
    return PaymentFormComponent;
}());
exports.PaymentFormComponent = PaymentFormComponent;
