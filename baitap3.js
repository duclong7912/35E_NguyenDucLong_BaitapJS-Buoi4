                    //  Tính số chẵn và lẻ

/**
 * - Đầu vào:
 * Đặt biến để người dùng nhập dữ  liệu
 * var a = ?
 * var b = ?
 * var c = ?
 * 
 * đặt biến để đếm để số chẵn
 * 
 * var chan = 0;
 * 
 * - Xử lý:
 * dùng toán tử % để kiểm tra số chẵn hay lẻ
 * xét các trường hợp có thể xảy ra
 * để xác định số lẻ:
 * le = 3 - chan
 * 
 * - Đầu ra:
 * chan = ?
 * le = ?
 */

document.getElementById("btnTinhChanLe").onclick = function () {

    // Đầu vào: 

    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = document.getElementById("number3").value;

    var chan = 0;
    // Xử lý:
    
    if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
        chan = 3;
    } else if (a % 2 === 0 && b % 2 === 0 && c % 2 !== 0) {
        chan = 2;
    } else if (a % 2 === 0 && b % 2 !== 0 && c % 2 !== 0) {
        chan = 1;
    } else if (a % 2 === 0 && b % 2 !== 0 && c % 2 === 0) {
        chan = 2;
    } else if (a % 2 !== 0 && b % 2 === 0 && c % 2 === 0) {
        chan = 2;
    } else if (a % 2 !== 0 && b % 2 === 0 && c % 2 !== 0) {
        chan = 1;
    } else if (a % 2 !== 0 && b % 2 !== 0 && c % 2 === 0) {
        chan = 1;
    } else {
        chan = 0;
    }

    var le = 3 - chan;
    
    // Đầu ra:
    
    document.getElementById("showChanLe").innerHTML = 'Có ' + chan + ' số chẵn' + ' và có ' + le + ' số lẻ !'; 

}