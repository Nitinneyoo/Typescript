interface Calender {
    name : string;
    year : number;
    addEvent (event : string) : void;
    removeEvent (event : string) : void;
}