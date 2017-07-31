// console.log('script.js has been sourced in')

// [name, favorite animal]
var people = [
    {
        name: 'Canin',
        favoriteAnimal: 'Uniflitten'
    },
    {
        name: 'Charly',
        favoriteAnimal: 'Angler fish']
    },
{
    name: 'Bobby',
        favoriteAnimal: 'liger'
}
{
    name: 'Luke'
    favoriteAnimal: 'Killer Whale'
}
];

console.log(people);

// Canin's favorite animal is the Uniflitten

for (var index = 0; index < people.length; index++) {
    var person = people[index];
    console.log(person[0] + '\'s favorite animal is the ' + person[1]);
}
