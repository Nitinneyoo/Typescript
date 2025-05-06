"use strict";
class Ride {
    constructor(activrRides) {
        Ride._activeRides = activrRides;
    }
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
let ride1 = new Ride(1);
ride1.start();
let ride2 = new Ride(1);
ride2.start();
console.log(Ride.activeRides);
//# sourceMappingURL=static.js.map