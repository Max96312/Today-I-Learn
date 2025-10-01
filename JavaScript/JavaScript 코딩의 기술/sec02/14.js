const filters = {
    색상: '검정색',
    견종: '래브라도레트리버',
};

function getAppliedFilters(filters) {
    const keys = Object.keys(filters);
    const applied = [];
    for (const key of keys) {
        applied.push(`${key}:${filters[key]}`);
    }
    return `선택한 조건은  ${applied.join(', ')} 입니다.`;
}
// '선택한 조건은 색상:검정색, 견종:래브라도레트리버 입니다.'

function getSortedAppliedFilters(filters) {
    const keys = Object.keys(filters);
    keys.sort();
    const applied = [];
    for (const key of keys) {
        applied.push(`${key}:${filters[key]}`);
    }
    return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}
// '선택한 조건응ㄴ 견종:래브라도레트리버, 색상:검정색 입니다.

const filters = new Map()
    .set('색상', '검정색')
    .set('견종', '래브라도레트리버');

function checkFilters(filters) {
    for (const entry of filters) {
        console.log(entry);
    }
}
// ['색상', '검정색']
// ['견종', '래브라도레트리버']

filters.entries();
// MapIterator { [ '색상', '검정색' ], [ '견종', '래브라도레트리버' ] }

function getAppliedFilters(filters) {
    const applied = [];
    for (const [key, value] of filters) {
        applied.push(`${key}:${value}`);
    }
    return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}
// '선택한 조건은 색상:검정색, 견종:래브라도레트리버 입니다.'

filters.sort()

...filters;
/// ['색상', '검정색'], ['견종', '래브라도레트리버']

[...filters];
// [['색상', '검정색'], ['견종', '래브라도레트리버']]

function sortByKey(a, b) {
    return a[0] > b[0] ? 1 : -1;
}

function getSortedAppliedFilters(filters) {
    const applied = [];
    for (const [key, value] of [...filters].sort(sortByKey)) {
        applied.push(`${key}:${value}`);
    }
    return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}
// '선택한 조건은 견종:래브라도레트리버, 색상:검정색 입니다.'

function getAppliedFilters(filters) {
    const applied = [...filters].map(([key, value]) => {
        return `${key}:${value}`;
    });
    return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}
// '선택한 조건은 색상:검정색, 견종:래브라도레트리버 입니다.'

function getSortedAppliedFilters(filters) {
    const applied = [...filters]
        .sort(sortByKey)
        .map(([key, value]) => {
            return `${key}:${value}`;
        })
        .join(', ');
    return `선택한 조건은 ${applied} 입니다.`;
}
// '선택한 조건은 견종:래브라도레트리버, 색상:검정색 입니다.'