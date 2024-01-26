export class Appointment {
    constructor(public id: number,
                private _name: string,
                private _time: Date,
                private _isTaken: boolean) {}

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get time(): Date {
        return this._time;
    }
    public set time(value: Date) {
        this._time = value;
    }

    public get isTaken(): boolean {
        return this._isTaken;
    }
    public set isTaken(value: boolean) {
        this._isTaken = value;
    }

}
