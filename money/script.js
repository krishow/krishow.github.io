const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
//其中 currency_one 表示源货币种类，如 USD；currency_two 表示目标货币种类。 
//amountEl_one 和 amountEl_two 为 DOM 对象，分别表示源货币种类金额和目标货币种类金额 
const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");
//rateEl 为 DOM 对象： 
const rateEl = document.getElementById('rate'); 
// 获取按钮 货币1和货币2是否都有值
const btn = document.getElementById("swap");

currencyEl_one.addEventListener("change",caculate);
currencyEl_two.addEventListener("change",caculate);
amountEl_one.addEventListener("input",caculate);
amountEl_two.addEventListener("input",caculate);

// 点击交换按钮时 触发的事件
btn.onclick = function() {
    let currency_one = currencyEl_one.value;
    let currency_two = currencyEl_two.value;
    // 定义临时变量
    let temp = currency_one;
    // 交换货币1和货币2的value
    currencyEl_one.value = currency_two;
    currencyEl_two.value = temp;
    // 并且交换货币1和货币2对应的汇率
    currency_one = currency_two;
    currency_two = temp;

    caculate();

};

// 得到汇率
function caculate() {
        const currency_one = currencyEl_one.value;
        const currency_two = currencyEl_two.value;
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
            .then(res => res.json())
            .then(data => {
                const rate = data.rates[currency_two];
                rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
                amountEl_two.value = (amountEl_one.value * rate).toFixed(2);

            });
}


caculate();