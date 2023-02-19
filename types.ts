import {inspect, log} from "util";
import {LogLevel} from "ts-loader/dist/logger";

let admin: null | string = null; // union type
console.log(admin);

let adminName: any; // лучше не использовать, если известны типы, т.к. теряется смысл ts

function setData(name:string): void {
    console.log(name)
}
setData('John');

/* enum - похож на js объект */
enum Colors {
    Green,
    Red,
    Blue,
    BlueLight= 'BlueLight'
}
console.log(Colors.BlueLight);

const bluelight = Colors.BlueLight;

function setColor(name: string | number) {
    if (name === Colors.BlueLight) {
        console.log('bluelight')
    }
}
setColor(bluelight);

/*Массив*/

let fruits: string[] = ['apple', 'banana'];
console.log(fruits[1]);

let multiArr: (number | string)[] = [1, 'banana']; // после типов нужно использовать литерал массива []
let multiArr1: Array<number | string> = [1, 'banana']; // еще одна запись



function setArr(arr: (number | string)[]) : void {
    console.log(arr)
}
setArr([1, '1']);


function getArr() : string[] {
    return ['1']
}
console.log(getArr());

/* Объектный тип */

interface ILocation {
    x: number,
    y: number
}
interface IAddress {
    city: string,
    location: ILocation,
    region?: string,
    isActive: boolean,
    id: number
    items: Map<string, number>
}

let Address: IAddress  = {
    city: 'Moscow',
    location: {
        x: 20.333,
        y: 90.333
    },
    region: 'Moscow',
    isActive: true,
    id: 282812,
    items: new Map()
} // ? - необязательный параметр

Address.items.set('key', 1);


function setAddress(addr: {city: string, location: {x: number, y: number}, region?: string, isActive: boolean, id: number}): void {
    console.log(addr.location)
}

setAddress(Address);


function getAddress(): IAddress {
    return Address;
}
let myAddress = getAddress();
myAddress.items;
console.log(myAddress.items.get('key'));

/* Interface */



