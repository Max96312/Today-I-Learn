// const colors = ['#d10202', '#19d836', '#0e33d8'];

const colors = {
    red: '#d10202',
    green: '#19d836',
    blue: '#0e33d8'
};

export const config = {
    enddpoint: 'http://pragprog.com',
    key: 'secretkey',
};

function getBill(item) {
    return {
        name: item.name,
        due: twoWeeksFromNow(),
        total: calculateTotal(item.price),
    };
}
const bill = gettBill({
    name: '객실 청소',
    price: 30
});

function displayBill(bill) {
    return `${bill.name} 비용은  ${bill.total} 달러이며 납부일은 ${bill.due} 입니다.`;
}