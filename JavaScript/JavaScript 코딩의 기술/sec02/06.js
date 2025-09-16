const sections = ['shipping'];

function displayShipping(sections) {
    if (sections.indexOf('shipping')) {
        return true;
    }
    return false;
}
// falses

const sections = ['contact', 'shipping'];

function displayShipping(sections) {
    return sections.indexOf('shipping') > -1;
}
// true

const sections = ['contact', 'shipping'];
function displayShipping(sections) {
    return sesctions.includes('shipping');
}