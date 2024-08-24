
let names = ['Alan', 'Jasur', 'Safina', 'Islom', 'Leyla'];

const delet = prompt('Какое имя удалить?');

const index = names.indexOf(delet);

if (index !== -1) {
    names.splice(index, 1);
} else {
    console.log('Такого имени нету');
}

console.log('Новый список имен:', names);
