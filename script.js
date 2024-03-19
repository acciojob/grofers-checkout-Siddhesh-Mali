const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const price = document.getElementsByClassName("price");
// const price = String(prices)
console.log(price)
let sum = 0;
for (let index = 0; index < price.length; index++) {
    sum = sum + Number( price[index].innerText);
    console.log(sum , price[index].innerText)
}
getSumBtn.remove();
const getSum = document.createElement("tr");
getSum.innerHTML= ` <td>Total Price<td><td class="price">${sum}<td>`;
document.body.appendChild(getSum);
};

getSumBtn.addEventListener("click", getSum);

