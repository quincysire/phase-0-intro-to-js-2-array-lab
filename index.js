// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function clear() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

function destructivelyAppendCat(name) {
   cats.push("Ralph");
   console.log(cats);
}
destructivelyAppendCat()

clear()

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    console.log(cats);
}
destructivelyPrependCat()

clear()

function destructivelyRemoveLastCat() {
    cats.pop()
    console.log(cats);
}
destructivelyRemoveLastCat()

clear()

function destructivelyRemoveFirstCat() {
    cats.shift()
    console.log(cats)
}
destructivelyRemoveFirstCat()

clear()

function appendCat(name) {
    var newArray = cats.slice();
    newArray.push(name)
    return newArray
}
console.log(appendCat("Broom"));
console.log(cats);

clear()

function prependCat(name) {
    var newArray = cats.slice();
    newArray.unshift(name)
    return newArray
}
console.log(prependCat("Arnold"));
console.log(cats);

clear()

function removeLastCat() {
    var newArray = cats.slice();
    newArray.pop()
    return newArray
}
console.log(removeLastCat());
console.log(cats);

clear()

function removeFirstCat() {
    var newArray = cats.slice();
    newArray.shift()
    return newArray
}
console.log(removeFirstCat());
console.log(cats);