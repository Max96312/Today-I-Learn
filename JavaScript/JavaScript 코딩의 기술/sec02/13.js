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
        크기: '중형견',
        견종: '래브라도레트리버',
        색상: '갈색',
    },
];

let filters = {};

function addFilters(filters, key, value) {
    filters[key] = value;
}
function deleteFilters(filters, key) {
    delete filters[key];
}
function clearFilters(filters) {
    filters = {};
    return filters;
}

let filters = new Map();

filters.set('견종', '래브라도레트리버');

filters.get('견종');
// '래브라도레트리버'

let filters = new Map()
    .set('견종', '래브라도레트리버')
    .set('크기', '대형견')
    .set('색상', '갈색');
filters.get('크기');
// '대형견'

let filters = new Map(
    [
        ['견종', '래브라도레트리버'],
        ['크기', '대형견'],
        ['색상', '갈색'],
    ]
)
filters.get('색상');
// '갈색'

filters.delete('색상');
filters.get('색상');
// undefined

filters.clear()
filters.get('색상');
// undefined

const petFilters = new Map();
function addFilters(filters, key, value) {
    filters.set(key, value);
}
function deleteFilters(filters, key) {
    filters.delete(key);
}
function clearFilters(filters) {
    filters.clear();
}

const errors = {
    100: '이름이 잘못되었습니다.',
    110: '이름에는 문자만 입력할 수 있습니다.',
    200: '색상이 잘못되었습니다.'
};

function isDataValid(data) {
    if (data.length < 10) {
        return errors.100
    }
    return true;
}

Object.keys(errors);
// ['100', '110', '200']

let errors = new Map([
    [100, '이름이 잘못되었습니다.'],
    [110, '이름에는 문자만 입력할 수 있습니다.'],
    [200, '색상이 잘못되었습니다.']
]);
errors.get(100);
// '이름이 잘못되었습니다.'

errors.keys();
// MapIterator { 100, 110, 200 }