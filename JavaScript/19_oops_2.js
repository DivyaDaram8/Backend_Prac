// ==================================================
// OBJECT-ORIENTED PRINCIPLES IN JAVASCRIPT
// (Structured + Backend-Oriented Notes)
// ==================================================



// ==================================================
// INTRODUCTION TO OBJECT-ORIENTED PRINCIPLES
// ==================================================

// Object-Oriented Programming (OOPS) is a way to
// structure code using objects and classes.
//
// Main OOPS Principles:
// 1. Abstraction
// 2. Encapsulation
// 3. Inheritance
// 4. Polymorphism
//
// These principles help in:
// - Writing scalable backend code
// - Reducing complexity
// - Improving maintainability



// ==================================================
// ABSTRACTION (USING ES6 APPROACH)
// ==================================================

// Abstraction means:
// Showing ONLY essential features
// Hiding internal implementation details
//
// In backend:
// User should know WHAT happens, not HOW

class PaymentService {
    pay(amount) {
        console.log("Payment of", amount, "processed");
    }
}

const payment = new PaymentService();
payment.pay(500);



// ==================================================
// ABSTRACTION BEFORE ES6 (USING CLOSURES)
// ==================================================

// Before classes existed,
// abstraction was achieved using closures

function paymentServiceOld() {
    function validate() {
        // internal logic hidden
    }

    function process() {
        // internal logic hidden
    }

    return {
        pay(amount) {
            validate();
            process();
            console.log("Payment of", amount, "processed");
        }
    };
}

const oldPayment = paymentServiceOld();
oldPayment.pay(1000);



// ==================================================
// INTRODUCTION TO ENCAPSULATION
// ==================================================

// Encapsulation means:
// Binding data + methods together
// Restricting direct access to data
//
// In backend:
// Prevents accidental data modification



// ==================================================
// ENCAPSULATION USING MODERN ES6 APPROACH
// ==================================================

// Using private fields (#)
// Data cannot be accessed directly

class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(1000);
account.withdraw(300);
console.log(account.getBalance());

// account.#balance ❌ Error (private field)



// ==================================================
// ENCAPSULATION BEFORE ES6 (USING CLOSURES)
// ==================================================

// Achieved using function scope

function BankAccountOld() {
    let balance = 0;

    return {
        deposit(amount) {
            balance += amount;
        },
        withdraw(amount) {
            balance -= amount;
        },
        getBalance() {
            return balance;
        }
    };
}

const oldAccount = BankAccountOld();
oldAccount.deposit(500);
console.log(oldAccount.getBalance());



// ==================================================
// INTRODUCTION TO INHERITANCE
// ==================================================

// Inheritance allows one class to
// acquire properties and methods of another
//
// Helps in:
// - Code reuse
// - Logical hierarchy



// ==================================================
// DIFFERENT WAYS OF USING INHERITANCE
// ==================================================

// 1. ES6 class inheritance
// 2. Prototype-based inheritance
// 3. Constructor function inheritance



// ==================================================
// INHERITANCE USING ES6 CLASS
// ==================================================

class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

const dog = new Dog();
dog.speak();



// ==================================================
// INHERITANCE USING FUNCTION CONSTRUCTOR
// ==================================================

function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.move = function () {
    console.log(this.type, "is moving");
};

function Car(type, brand) {
    Vehicle.call(this, type);
    this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const car = new Car("Car", "Tesla");
car.move();



// ==================================================
// POLYMORPHISM & ITS TYPES
// ==================================================

// Polymorphism means:
// Same method name, different behavior
//
// Types:
// 1. Method overriding
// 2. Method overloading (not native in JS,
//    achieved via logic)



// ==================================================
// METHOD OVERRIDING (POLYMORPHISM)
// ==================================================

class Shape {
    area() {
        return 0;
    }
}

class Square extends Shape {
    area() {
        return 4 * 4;
    }
}

const sq = new Square();
console.log(sq.area());



// ==================================================
// MULTIPLE INHERITANCE USING MIXINS
// ==================================================

// JavaScript does NOT support multiple inheritance
// directly via classes
//
// Mixins solve this problem

const canFly = {
    fly() {
        console.log("Flying");
    }
};

const canSwim = {
    swim() {
        console.log("Swimming");
    }
};

class Bird {}

Object.assign(Bird.prototype, canFly, canSwim);

const bird = new Bird();
bird.fly();
bird.swim();



// ==================================================
// IMPORTANT BACKEND NOTES
// ==================================================

// 1. Abstraction hides complexity.
// 2. Encapsulation protects data.
// 3. Inheritance enables reuse.
// 4. Polymorphism allows flexibility.
// 5. Mixins enable shared behavior.
// 6. OOPS is heavily used in backend frameworks.



// ==================================================
// CONCLUSION
// ==================================================

// Mastering OOPS principles is mandatory
// for scalable backend development.
// JavaScript provides both modern (ES6)
// and legacy ways to implement OOPS.


// ==================================================
// END OF OOPS PRINCIPLES NOTES
// ==================================================
