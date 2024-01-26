export class Shop {

    constructor(public id: number,
                private _name: string,
                private _address: string,
                private _city: string,
                private _region: string,
                private _country: string,
                private _phone: string,
                private _openTime: string,
                private _closeTime: string) {
    }

    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
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

    public get openTime(): string {
        return this._openTime;
    }

    public set openTime(value: string) {
        this._openTime = value;
    }

    public get closeTime(): string {
        return this._closeTime;
    }

    public set closeTime(value: string) {
        this._closeTime = value;
    }
}
