var mainArray = [];
document.getElementById('add_number_btn').onclick = function () {
    var addNum = document.getElementById('add_number').value;
    if (addNum === "") {
        mainArray.push(0);
    } else {
        mainArray.push(addNum);
    }

    document.getElementById('array_number').innerHTML = mainArray;

}