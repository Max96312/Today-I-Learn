const transactions = [...spending,  ...income];
const balance = calculateBalance(transactions);

let color;
if (balance > 0) {
    color =  'green';
} else {
    color = 'red';
}

1 == '1' // true
1 === '1' // false
1 === 1 //  true

'' == false // true
if('') {
    return '난 false가 아니야!'
} else {
    return '내가 false라니... :( !'
}
// 내가 false라니... :( !

const employee = {
    name: 'Eric',
    equipmentTraining: '',
}

if (!employee.equipmentTraining) {
    return '기계를 작동할 권한이 없습니다.';
}

['a', 'b'].indexOf('a')
// 0이 반환되며, 0은 거짓 값입니다.

const employee = {
    name: 'Eric',
    equipmentTraining: true,
}

function listCerts(employee) {
    if(employee.equipmentTraining) {
        employee.certificates = ['Equipment'];
        // 조작!
        delete employee.equipmentTraining;
    }
    // 코드가 더 있습니다.
}
function checkAuthoriztion() {
    if (!employee.equipmentTraining) {
        return '기계를 작동할 권한이 없습니다.';
    }
    return `반값습니다., ${employee.name} 님`;
}
listCerts(employee);

checkAuthoriztion(employee);
// '기계를 작동할 권한이 없습니다.'

function checkAuthorization() {
    if(employee.equipmentTraining !== true) {
        return '기계를 작동할 권한이 없습니다.';
    }
    return `반값습니다. ${employee.name} 님`;
}
checkAuthorization(employee);
// '기계를 작동할 권한이 없습니다.'