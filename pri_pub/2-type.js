"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
        this.city = "kampala";
    }
    Object.defineProperty(User.prototype, "getEmail", {
        get: function () {
            return "the email ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var student = new User("sandy@s.com", "kals");
