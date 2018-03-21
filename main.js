// /// COVERED: CONST, LET

/// TOPIC 2: TEMPLATE LITERALS make sentence 'Our
// school cafeteria has really [adjective] food.'
const adjective = 'purple';
// 2A: OLD WAY
var sentence = 'Our school cafeteria has really ' + adjective + ' food.';
console.log("2, old way", sentence);
// 2B: NEW WAY
const newSentence = `Our school cafeteria has really ${adjective} food.`;
console.log("2, new way", newSentence);


/// TOPIC 3: ARROW FUNCTIONS write to div with id content
// 3A: OLD WAY
function writeToDom(string, id){
    document.getElementById(id).innerHTML = string;
}
writeToDom("3, hello from old", "content");
// 3B: NEW WAY
const writeToDom2 = (string, id) => {
    document.getElementById(id).innerHTML = string;
}
writeToDom2("3, hello from new", "content2");


/// TOPIC 4: OBJECT LITERAL SHORTHAND
// NOTATION
const item = 'Glow Bowl';
const price = 11.40;
const quantity = 3;
const link = 'https://www.amazon.com/dp/B018Z0TE3K/';
const instock = true;
// 4A: OLD WAY
var object = {
    item: item,
    price: price,
    quantity: quantity,
    link: link,
    instock: instock
}
console.log("4, old", object);
// 4B: NEW WAY
const newObject = {
    item,
    price,
    quantity,
    link,
    instock
}
console.log("4, new", newObject);


/// TOPIC 5: SPREAD OPERATOR
const flowers = ['poppy', 'daisy', 'marigold', 'lilac', 'tulip'];
const trees = ['cherry blossom', 'redbud', 'crabapple', 'magnolia'];
// 5A: OLD WAY
//// NOTE: The following code will now work! For the example in class, we got some funky results due to es6 array destructuring (feel free to google, quick warning that it is a pretty complex topic / is a mind bender)
const springThings = [];
flowers.forEach((flower) => {
    springThings.push(flower);
})
trees.forEach((tree) => {
    springThings.push(tree);
})
console.log("5, old",springThings);
// 5B: NEW WAY
const springThingz = [...flowers, ...trees];
console.log("5, new", springThingz);