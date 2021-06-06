/*

//Hey kiddo

const Adult_check = function (age) {
    if (age >= 18) {
        return "true";
    }
    return "false"
}

const greeting = function (age) {
    const hello = Adult_check(age);
    if (hello == "true") {
        return "Hello there";
    }
    else if (hello == "false")
        return "Hey kiddo";
}


const example1 = greeting(55);
console.log(example1);

*/

// VAT calculations

const taxMostGoods = 21;
const taxFood = 9;
const taxSomeTypes = 0;

const totalPrice = function (number) {
    const totalPrice = vatCalculation(number);
    return totalPrice + number;
};

const vatCalculation = function (number) {
    let vatPrice = (number * 0.21);
    return vatPrice
};

console.log(totalPrice(10));



/* const Price_including_VAT = function (base_price, VAT) {
    const total = base_price * VAT
    return total
}

const BP_VA = function (base_price, VAT) {
    const total2 = Price_including_VAT;
    const VAT_ammount = total2 / VAT;
}

const PRINT = function (base_price, VAT) {
    console.log(Price_including_VAT.total);
    console.log(BP_VA.VAT_ammount);
}

const example1 = PRINT(100, 1.08);
console.log(example1);
*/