var mainArray = [];
document.getElementById('add_number_btn').onclick = function () {
    var addNum = document.getElementById('add_number').value;

    mainArray.push(addNum);
    document.getElementById('array_number').innerHTML = mainArray;

}