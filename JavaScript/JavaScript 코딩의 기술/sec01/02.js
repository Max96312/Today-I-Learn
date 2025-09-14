function getLowestPrice(item) {
    var count = item.inventory;
    var price = item.price;
    if (item.salePrice) {
        var count = item.saleInventory;
        if (count > 0) {
            price = item.salePrice;
        }
    }
    if (count) {
        return price;
    }

    return 0;
}

// const item = {
//     inventory: 0,
//     price: 3,
//     salePrice: 0,
//     saleInventory: 0
// };
// 0

// const item = {
//     inventory: 3,
//     price: 3,
//     salePrice: 2,
//     saleInventory: 1
// }
// 2

const item = {
    inventory: 3,
    price: 3,
    salePrice: 2,
    saleInventory: 0,
}
// 0

function getLowestPrice(item) {
    var count = item.inventory;
    var price = item.price;
    if (item.salePrice) {
        let count = item.saleInventory;
        if (count > 0) {
            price = item.salePrice;
        }
    }
    if (count) {
        return price;
    }

    return 0;
}

function getLowestPrice(item) {
    var count = item.inventory;
    var price = item.price;
    if (item.salePrice) {
        const saleCount = item.saleInventory;
        if (saleCount > 0) {
            price = item.salePrice;
        }
    }
    if (count) {
        return price;
    }

    return 0;
}