var Shop = /** @class */ (function () {
    function Shop(_name, _address, _city, _region, _country, _phone, _openDate, _closeDate) {
        this._name = _name;
        this._address = _address;
        this._city = _city;
        this._region = _region;
        this._country = _country;
        this._phone = _phone;
        this._openDate = _openDate;
        this._closeDate = _closeDate;
    }
    Object.defineProperty(Shop.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shop.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shop.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            this._city = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shop.prototype, "region", {
        get: function () {
            return this._region;
        },
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shop.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (value) {
            this._country = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shop.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        set: function (value) {
            this._phone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shop.prototype, "openDate", {
        get: function () {
            return this._openDate;
        },
        set: function (value) {
            this._openDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shop.prototype, "closeDate", {
        get: function () {
            return this._closeDate;
        },
        set: function (value) {
            this._closeDate = value;
        },
        enumerable: false,
        configurable: true
    });
    return Shop;
}());
var myShop = new Shop("Nico's barber", "Rivera 345", "Colonia del Sacramento", "Colonia", "Uruguay", "+59899034563", "9:00", "20:30");
console.log(myShop.name);
console.log(myShop.address);
console.log(myShop.city);
console.log(myShop.region);
console.log(myShop.country);
console.log(myShop.phone);
console.log(myShop.openDate);
console.log(myShop.closeDate);
