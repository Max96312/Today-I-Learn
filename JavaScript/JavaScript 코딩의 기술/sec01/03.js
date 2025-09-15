const itmes = document.querySelectorAll('li');
for(var i = 0; i < itmes.length; i++) {
    items[i].addEventListener('click', () => {
        alert(i);
    })
}

function addClick(items) {
    for (var i = 0; i < items.length; i++) {
        items[i].onClick = function () {
            console.log(itmes[i]);
            console.log(i);
            return i;
        };
    }
    return items;
}
const example = [{}, {}];
const clickSet = addClick(example);
clickSet[0].onClick();
2

// function addClick(items) {
//     for (var i = 0; i < items.length; i++) {
//         items[i].onClick = (function (i) {
//             return function () {
//                 return i;
//             };
//         }(i));
//     }
//     return items;
// }
// const example = [{}, {}];
// const clickSet = addClick(example);
// clickSet[0].onClick();

// function addClick(items) {
//     for (let i = 0; i < items.length; i++) {
//         items[i].onClick = function () {
//             return i;
//         };
//     }
//     return items;
// }
// const example = [{}, {}];
// const clickSet = addClick(example);
// clickSet[0].onClick();