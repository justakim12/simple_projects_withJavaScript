function message() {
    return 'Hello World';
}

let message2 = () => 'Hello World with arrow';

console.log(message());
console.log(message2());

let message3 = a => `Hello ${a}`;

console.log(message3('David'));

