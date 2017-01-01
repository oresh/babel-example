const argv = require('yargs').argv;

console.log(argv);

// My plan to test all:

let result = 0;

// let
let b = '122';
b = '666'; // can be changed
console.log('let: ' + b);

// const
const a = '124'; // can't be changed
console.log('const: ' + a);

// Arrow function
const summ = (one, two) => {return one + two;} // (params) => { ... }
result = summ(1,4);
console.log('res: ' + result);

const increment = n => n + 1; // 1 argument can have no brackets
console.log('increment: ' + increment(7));

const incrementBy = (number, by) => number + by; // brackers for 2+ arguments
console.log('increment: ' + incrementBy(7,3));

// lexical this
let mark = {
	_name : 'Antonio',
	_surname : 'Faralto',
	getName() {
		console.log('name: ' + this._name); // it knows about it
	},
	getSurname : () => console.log(this), // undefined
	addChildren() {
		let getChildren = () => {
			let children = [];
			console.log('arguments: ' + arguments);
			for (let child in arguments) { // arguments name
			 	children.push(arguments[child]);
			}
			return children;
		}
		this.children = getChildren();
		console.log('children: ' + this.children);
	}
}
mark.getName();
mark.getSurname();
mark.addChildren('Mark', 'Andy', 'Wendy');

// classes
class Human {
	constructor(gender, age) {
		this.gender = gender;
		this.age = age;
		this.name = '';
		this.surname = '';
	}
	getProperty(prop) {
		return this[prop];
	}
	setName(name) {
		this.name = name;
	}
	getAge() {
		return this.getProperty('age');
	}
}

let carl = new Human('man', 13);
console.log('get age function: ' + carl.getAge());
console.log('age property: ' + carl.age);
// console.log('surname: ' + carl.getSurname()); will not work

class Parent extends Human {
	setChildren() {
		if (typeof this.children == 'undefined') {
			this.children = [];
		}
		for (let child in arguments) {
			this.children.push(arguments[child]);
		}
	}
	getChildren() {
		return this.children;
	}
}

let george = new Parent('man', 27);
console.log('get age function: ' + george.getAge());
george.setChildren(carl);
console.log('children: ');
console.log(george.getChildren());

// Enhanced Object Literals
var obj = {
    // Sets the prototype. "__proto__" or '__proto__' would also work.
    __proto__: theProtoObj,
    // Computed property name does not set prototype or trigger early error for
    // duplicate __proto__ properties.
    ['__proto__']: somethingElse,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ "prop_" + (() => 42)() ]: 42
};


// Template Strings
// Destructuring
// Default
// Rest
// Spread
// Iterators
// For..Of
// Generators — meh
// Map + Set
// WeakMap + WeakSet
