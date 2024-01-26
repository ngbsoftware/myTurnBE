class Shop {

    constructor(private _name: string,
                private _address: string,
                private _city: string,
                private _region: string,
                private _country: string,
                private _phone: string,
                private _openDate: string,
                private _closeDate: string) {
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get address(): string {
        return this._address;
    }

    public set address(value: string) {
        this._address = value;
    }

    public get city(): string {
        return this._city;
    }

    public set city(value: string) {
        this._city = value;
    }

    public get region(): string {
        return this._region;
    }

    public set region(value: string) {
        this._region = value;
    }

    public get country(): string {
        return this._country;
    }

    public set country(value: string) {
        this._country = value;
    }

    public get phone(): string {
        return this._phone;
    }

    public set phone(value: string) {
        this._phone = value;
    }

    public get openDate(): string {
        return this._openDate;
    }

    public set openDate(value: string) {
        this._openDate = value;
    }

    public get closeDate(): string {
        return this._closeDate;
    }

    public set closeDate(value: string) {
        this._closeDate = value;
    }
}

let myShop = new Shop("Nico's barber", 
                        "Rivera 345",  
                        "Colonia del Sacramento",
                        "Colonia",
                        "Uruguay",
                        "+59899034563",
                        "9:00",
                        "20:30")

console.log(myShop.name);
console.log(myShop.address);
console.log(myShop.city);
console.log(myShop.region);
console.log(myShop.country);
console.log(myShop.phone);
console.log(myShop.openDate);
console.log(myShop.closeDate);
