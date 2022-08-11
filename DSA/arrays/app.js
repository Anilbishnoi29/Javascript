let arr = [1,56,23,77,25,12,7,89,67,23,5,8];

const searchBTN = document.getElementById("search");
const sortArrays = document.getElementById("sortArrays");

const ul = document.getElementById("arrul");
const resultUL = document.getElementById("result");
const arrList = document.createElement('li');
const arrTextNode = document.createTextNode(`Array : [${arr}]`);
arrList.append(arrTextNode);

ul.append(arrList);
console.log(arr.length);
// search btn
searchBTN.addEventListener('click',(e) => {
    e.preventDefault();
    searchVal = document.getElementById("input").value;
    searchInputVal = parseInt(searchVal);

    if (searchInputVal < arr.length && typeof searchInputVal === "number" && searchInputVal >= 0) {
        const arrList = document.createElement('li');
        const arrTextNode = document.createTextNode(`Result : [${arr[searchInputVal]}]`);
        arrList.append(arrTextNode);
        resultUL.append(arrList);
    } else {
        alert("Enter a valid index");
    }
    document.getElementById("input").value = "";
});
sortArrays.addEventListener('click',(e) => {
    e.preventDefault();
    let tempArr = [...arr];
    tempArr.sort((a,b) => a - b);
    const arrList = document.createElement('li');
    const arrTextNode = document.createTextNode(`Sorted Array: [${tempArr}]`);
    arrList.append(arrTextNode);
    resultUL.append(arrList);
});;;;;