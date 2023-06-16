"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
        this._coursecount = 1;
        this.city = "kampala";
    }
    Object.defineProperty(User.prototype, "getEmail", {
        get: function () {
            return "The email is ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getCoursecount", {
        get: function () {
            return this._coursecount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setCourseCount", {
        set: function (courseNum) {
            if (courseNum < 1) {
                throw new Error("not a valid value");
            }
            this._coursecount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var student = new User("sandy@s.com", "kals");
