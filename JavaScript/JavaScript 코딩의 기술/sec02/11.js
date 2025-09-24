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

function addBookDefaults(book, defaults){
    const fields = Object.keys(defaults);
    const updated = {};
    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        updated[field] = book[field] || defaults[field];
    }
    return updated;
};

Object.assign(defaults, book);
// {
//     author: 'Joe Morgan',
//     title: 'Simplifying JavaScript',
//     year: 2017,
//     rating: null,
// }

const anotherBook = {
    title: 'Another book',
    year: 2016,
};
Object.assign(defaults, anotherBook);

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

const defaultEmployee = {
    name: {
        first: '',
        last: '',
    },
    years: 0,
};
const employee = Object.assign({}, defaultEmployee);

employee.name.first = 'Joe';
defaultEmployee;
// {
//     name: {
//         first: 'Joe',
//         last: '',
//     },
//     years: 0
// }

const employee2 = Object.assign(
    {},
    defaultEmployee,
    {
        name: Object.assign({}, defaultEmployee.name),
    },
);
export { defaults };