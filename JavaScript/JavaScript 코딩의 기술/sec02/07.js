const cart = ['Naming and Necessity', 'Alice in Wonderland'];

const copyCart = [...cart];
// ['Naming and Necessity', 'Alice in Wonderland']

function removeItem(items, removable) {
    const updated = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i] !== removable) {
            updated.push(items[i]);
        }
    }
    return updated;
}

function removeItem(items, removable) {
    const index = itesm.indexOf(removable);
    items.splice(index, 1);
    return items;
}

const books = ['practical vim', 'moby dick', 'the dark tower'];
const recent = removeItem(books, 'moby dick');
const novels = removeItem(books, 'parctical vim');

function removeItem(items, removalbe) {
    const index = items.indexOf(removalbe);
    return items.slice(0, index).concat(items.slice(items.slice(index + 1)));
}

function removeItem(items, removalbe) {
    const index = items.indexOf(removalbe);
    return [...items.slice(0, index), ...items.slice(index + 1)];
}

const book = ['Reasons and Persons', 'Derek Parfit', 19.99];
function formatBook(title, author, price) {
    return `${title} by ${author} $${price}`;
}

formatBook(book[0], book[1], book[2]);

formatBook(...book);