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

