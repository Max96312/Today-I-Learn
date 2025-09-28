const book = {
    title: 'Reasons and Persons',
    author: 'Derek Parfit',
};
const update = { ...book, year: 1984 };
// { title: 'Reasons and Persons', author: 'Derek Parfit', year: 1984 }

const book = {
    title: 'Reasons and Persons',
    author: 'Derek Parfit',
};
const update = { ...book, title: 'Reasons & Persons' };
// { title: 'Reasons & Persons', author: 'Derek Parfit' }

const defaults = {
    author: '',
    title: '',
    year: 2017,
    rating: null,
};
const book = {
    author: 'Joe Morgan',
    title: 'Simplifying JavaScript',
};
const updated = Object.assign({}, defaults, book);

const defaults = {
    author: '',
    title: '',
    year: 2017,
    rating: null,
};
const book = {
    author: 'Joe Morgan',
    title: 'ES6 Tips',
};
const bookWithDefaults = { ...defaults, ...book };
// {
//     author: 'Joe Morgan',
//     title: 'ES6 Tips',
//     year: 2017,
//     rating: null,
// }

const employee2 = Object.assign(
    {},
    defaultEmployee,
    {
        name: Object.assign({}, defaultEmployee.name),
    },
);
export { defaults };

const employee = {
    ...defaultEmployee,
    name: {
        ...defaultEmployee.name,
    }
}