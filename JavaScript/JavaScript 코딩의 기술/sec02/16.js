const dogs = [
    {
        이름: '맥스',
        크기: '소형견',
        견종: '보스턴테리어',
        색상: '검정색',
    },
    {
        이름: '도니',
        크기: '대형견',
        견종: '래브라도레트리버',
        색상: '검정색',
    },
    {
        이름: '섀도',
        크기: '중현견',
        견종: '래브라도레트리버',
        색상: '갈색',
    },
];

function getColors(dogs) {
    return dogs.map(dog => dog['색상']);
}
getColors(dogs);
// ['검정색', '검정색', '갈색']

function getUnique(attributes) {
    const unique = [];
    for (const attribute of attributes) {
        if (!unique.includes(attribute)) {
            unique.push(attribute);
        }
    }
    return unique;
}
const colors = getColors(dogs);
getUnique(colors);
// ['검정색', '갈색']

const colors = ['검정색', '검정색', '갈색'];
const unique = new Set(colors);
// Set {'검정색', '갈색'}

function getUnique(attributes) {
    return [...new Set(attributes)];
}

let names = new Set();
names.add('joe');
// Set { 'joe' }
names.add('bea');
// Set { 'joe', 'bea' }
names.add('joe');
// Set { 'joe', 'bea' }

function getUniqueColors(dogs) {
    const unique = new Set();
    for (const dog of dogs) {
        unique.add(dog.색상);
    }
    return [...unique];
}

[...dogs.reduce((colors, { 색상 }) => colors.add(색상), new Set())];