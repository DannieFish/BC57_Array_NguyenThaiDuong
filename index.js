var mainArray = [];

document.getElementById('add_number_btn').onclick = function () {
    var addNum = +document.getElementById('add_number').value;
    if (addNum === "") {
        mainArray.push(0);
    } else {
        mainArray.push(addNum);
    }

    document.getElementById('array_number').innerHTML = mainArray;

}

document.getElementById('sum_positive').onclick = function () {
    var sumPositive = 0;
    for (var index = 0; index < mainArray.length; index++) {
        if (mainArray[index] > 0) {
            sumPositive += mainArray[index];
        }
    }
    document.getElementById('res_1').innerHTML = sumPositive;
}

document.getElementById('count_positive').onclick = function () {
    var countPositive = 0;
    for (var index = 0; index < mainArray.length; index++) {
        if (mainArray[index] > 0) {
            countPositive++
        }
    }
    document.getElementById('res_2').innerHTML = countPositive;
}
document.getElementById('find_min_num').onclick = function () {
    var minNumber = 0;
    for (var index = mainArray[0]; index < mainArray.length; index++) {
        if (mainArray[index] < minNumber) {
            minNumber = mainArray[index]
        }
    }
    document.getElementById('res_3').innerHTML = minNumber;
}