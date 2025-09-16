const team = [
    'Joe',
    'Dyan',
    'Bea',
    'Theo',
]
function alphabetizeTeam(team) {
    return [...team].sort();
    // ['Bea', 'Dyan', 'Joe', 'Theo']
}

const staff = [{
        name: 'Wesley',
        position: 'musician',
    },
    {
        name: 'Davis',
        position: 'engineer',
    }
];
function getMusicians(staff) {
    return staff.filter(member =>  member.position === 'musician');
    // [{name: 'Wesley', position: 'musician'}]
}

const game1 = {
    player: 'Jim Jonas',
    hits: 2,
    runs: 1,
    errors: 0,
};
const game2 = {
    player: 'Jim Jonas',
    hits: 3,
    runs: 0,
    errors: 1,
}
const total = {};
const stats = Object.keys(game1);
for (let i = 0; i < stats.length; i++) {
    const stat = stats[i];
    if (stat !== 'player') {
        total[stat] = game1[stat] + game2[stat];
    }
}
// {
//    hits: 5,
//    runs: 1,
//    errors: 1,
//}

const dog = {
    name: 'Don',
    color: 'black',
};
dog.name;
// Don

const dogPair = [
    ['name', 'Don'],
    ['color', 'black'],
];
function getName(dog) {
    return dog.find(attribute => {
        return attribute[0] === 'name';
    })[1];
}