const defaults = new Map()
    .set('색상', '갈색')
    .set('견종', '비글')
    .set('지역', '캔자스');
const filters = new  Map()
    .set('색상', '검정색');

function applyDefaults(map, defaults) {
    for (const [key, value] of defaults) {
        if (!map.has(key)) {
            map.set(key, value);
        }
    }
}
export { applyDefaults };

function applyDefaults(map, defaults) {
    const copy = new Map([...map]);
    for (const [key, value] of defaults) {
        if (!copy.has(key)) {
            copy.set(key, value);
        }
    }
    return copy;
}

const filters = new Map()
    .set('color', 'black')
    .set('color', 'brown');
filters.get('color');
// brown

let filters = new Map()
    .set('색상', '검정색');
let filters2 = new Map()
    .set('색상', '갈색');
let update = new Map([...filters, ...filters2]);
update.get('색상');
// 갈색

function applyDefaults(map, defaults) {
    return new Map([...defaults, ...map]);
}