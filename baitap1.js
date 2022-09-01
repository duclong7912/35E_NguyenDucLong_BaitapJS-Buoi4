                    //  Sắp xếp số theo thứ tự tăng dần

/**
 * - Đầu vào:
 * 
 * cho người dùng nhập dữ liệu
 * var a = ?
 * var b = ?
 * var c = ?
 * 
 * đặt biến để hiển thị kết quả
 * var sapXep = "";
 * 
 * - Xử lý:
 *  
 * Sử dụng if else để xét các trường hợp có thể xảy ra
 * 
 * a > b && a > c && b > c
 * a > b && c > b && a > c
 * a > b && c > a
 * b > a && b > c && a > c
 * b > c && c > a
 * a == b && a > c && b > c
 * b == c && a > c && a > b
 * a == c && b > a && b > c
 * a + ' < ' + b + ' < ' + c;
 * 
 * - Đầu ra:
 * 
 * sapXep = ?
 */

document.getElementById("btnSapXep").onclick = function () {

// Đầu vào:

var a = document.getElementById("soThuNhat").value * 1;
var b = document.getElementById("soThuHai").value * 1;
var c = document.getElementById("soThuBa").value * 1;
var sapXep = "";

// Xử lý:

if(a > b && a > c && b > c){
    sapXep = c + ' < ' + b + ' < ' + a;
} else if (a > b && c > b && a > c) {
    sapXep = b + ' < ' + c + ' < ' + a;
} else if(a > b && c > a){
    sapXep = b + ' < ' + a + ' < ' + c;
} else if(b > a && b > c && a > c) {
    sapXep = c + ' < ' + a + ' < ' + b;
} else if (b > c && c > a) {
    sapXep = a + ' < ' + c + ' < ' + b;
} else if(a == b && a > c && b > c){
    sapXep = c + ' < ' + b + ' < ' + a;
} else if (b == c && a > c && a > b) {
    sapXep = c + ' < ' + b + ' < ' + a;
} else if (a == c && b > a && b > c){
    sapXep = c + ' < ' + a + ' < ' + b;
} else{
    sapXep = a + ' < ' + b + ' < ' + c;
}

// Đầu ra: 

var result = 'Sắp xếp: ' + sapXep;
document.getElementById("showSapXep").innerHTML = result;

}