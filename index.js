var mainArray = [];


document.getElementById('add_number_btn').onclick = function () {
    var addNum = +document.getElementById('add_number').value;
    if (addNum === "") {
        mainArray.push(0);

    } else {
        mainArray.push(Number(addNum));

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
    document.getElementById('res_1').innerHTML = "Tổng số dương là: " + sumPositive;
}

document.getElementById('count_positive').onclick = function () {
    var countPositive = 0;
    for (var index = 0; index < mainArray.length; index++) {
        if (mainArray[index] > 0) {
            countPositive++
        }
    }
    document.getElementById('res_2').innerHTML = "Có " + countPositive + " số dương";
}
document.getElementById('find_min_num').onclick = function () {
    var minNumber = mainArray[0];
    for (var index = 0; index < mainArray.length; index++) {
        if (mainArray[index] < minNumber) {
            minNumber = mainArray[index]
        }
    }
    document.getElementById('res_3').innerHTML = "Số nhỏ nhất trong mảng là: " + minNumber;
}
document.getElementById('min_positive').onclick = function () {
    var minPositive = mainArray[0];
    for (var index = 0; index < mainArray.length; index++) {
        if (mainArray[index] > 0 && mainArray[index] < minPositive) {
            minPositive = mainArray[index];
        } else if (mainArray[index] <= 0) {
            alert("Không có số dương")
        }
    }
    document.getElementById('res_4').innerHTML = "Số dương nhỏ nhất là: " + minPositive;
}
document.getElementById('end_even').onclick = function () {
    var nearEndEven;
    for (var indexR = mainArray.length - 1; indexR >= 0; indexR--) {
        if (mainArray[indexR] % 2 == 0) {

            nearEndEven = mainArray[indexR];
            break;
        } else {
            nearEndEven = -1 + " Không tìm được số chẵn";
        }

    }
    document.getElementById('res_5').innerHTML = "Số chẵn gần cuối mảng nhất là: " + nearEndEven;
}
document.getElementById('switch_element').onclick = function () {
    var numSpot1 = +document.getElementById('change_num1').value;
    var numSpot2 = +document.getElementById('change_num2').value;
    // giữ lại index1 để tránh spot1 overwrite spot2
    var indexChange = mainArray[numSpot1];
    //cho spot2 thế chổ spot1
    mainArray[numSpot1] = mainArray[numSpot2];
    //lấy spot1 ra khỏi index1 và bỏ vào spot2
    mainArray[numSpot2] = indexChange;
    // in ra hàm sau khi thay đổi
    indexChange = mainArray;

    document.getElementById('res_6').innerHTML = "Mảng sau khi đổi chổ: " + indexChange;
}
document.getElementById('organize_num').onclick = function () {
    //học trên lớp
    var res = mainArray.sort(function (b, a) {
        //so sánh phần tử thứ nhất với phần tử bên cạnh nó
        if (b > a) {
            // nếu phần tử thứ nhất lớn hơn phần tử thứ hai thì thay đổi vị trí cho nhau
            return 1;
        } else {
            // nếu không thì giữ y chang và kiểm tra phần tử khác
            return -1;
        }
    })
    //output 
    document.getElementById('res_7').innerHTML = "Array sắp xếp từ nhỏ đến lớn: " + res;
}