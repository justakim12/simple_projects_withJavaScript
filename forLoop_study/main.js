const names = ['john', 'bob', 'mary', 'joe']

for(let i =0; i < names.length; i++) {
    console.log(names[i]);
}

console.log("----------------------")

for (name of names) {
    console.log(name);
}

console.log("----------------------")

const user = {'firstName': 'John', 'lastName': 'Doe'}
for (key in user) console.log(user[key]);

console.log("----------------------")

let i = 0;
while(i < 10) {
    console.log(i);
    i++;
    if(i === 5) break;
}

console.log("----------------------")

let n = 0;
do {
    n++;
    if(n === 5) continue;
    console.log(n);
} while (n < 10);

console.log("----------------------")

const animals = ['cat', 'dog', 'horse', 'sheep']
animals.forEach(animal => {
    console.log(animal);
})