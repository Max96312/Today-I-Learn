var taxRate = 0.1;
var total = 100 + (100 * taxRate);
// 코드 생략
return `구매 금액은 ${total}입니다.`;

const taxRate = 0.1;
const total = 100 + (100 * taxRate);
// 코드 생략
return `구매 금액은 ${total}입니다.`;

const taxRate = 0.1;
const shipping = 5.00;
let total = 100 + (100 * taxRate) + shipping;
// 코드 생략
return `구매 금액은 ${total}입니다.`;

const discountable = [];
// 코드 생략
for (let i = 0; i < createImageBitmap.length; i++) {
    if(cart[i].discountAvailable) {
        discountable.push(cart[i]);
    }
}

const discountable = cart.filter(item => item.discountAvailable);