"use strict";
exports.__esModule = true;
exports.Util = void 0;
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.formatTimeToAmOrPm = function (time) {
        return new Date(Util.date + " " + time).toLocaleTimeString('en-Us', { hour: '2-digit', minute: '2-digit' });
    };
    Util.extractTimeAndConvertToNumber = function (time) {
        return new Date(Util.date + " " + time).getTime();
    };
    Util.formatDate = function (date) {
        return new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    };
    Util.findEndDate = function (dates) {
        var tempDate = new Date();
        if (dates)
            for (var i = 0; i < dates.length; i++)
                if (new Date(dates[i]) > tempDate)
                    tempDate = new Date(dates[i]);
        return tempDate;
    };
    Util.getTomarrow = function (date) {
        var temp = new Date(date);
        // const day = 60 * 60 * 24 * 1000;
        // const day = 86400000;
        // return new Date(temp.getTime() + day);
        return new Date(temp.getFullYear(), temp.getMonth(), (temp.getDate() + 1));
    };
    Util.getYestarday = function (date) {
        var day = 86400000;
        var temp = new Date(date);
        return new Date(temp.getTime() - day);
    };
    Util.sortByDates = function (date1, date2) {
        return new Date(date1).getTime() - new Date(date2).getTime();
    };
    Util.numberField = function (event) {
        // Number(value);
        // parseInt(value);
        // parseFloat('364.585');
        var charCode = event.keyCode;
        return (charCode > 31 && (charCode < 48 || charCode > 57)) ? false : true;
    };
    Util.getFormatedtime = function (date) {
        return new Date(date).toLocaleTimeString('en-US');
    };
    Util.date = '15 May 2021';
    return Util;
}());
exports.Util = Util;
