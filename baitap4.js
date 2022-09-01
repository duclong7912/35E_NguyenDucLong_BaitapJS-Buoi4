                // Đoán hình tam giác

/**
 * - Đầu vào:
 * 
 * đặt biến để người dùng nhập dữ liệu
 * var c1 = ?
 * var c2 = ?
 * var c3 = ?
 * đặt biến để hiện thị kết quả
 * var doanTamGiac = "";
 * 
 * - Xử lý
 * 
 * Tam giác đều: Nếu 3 cạnh bằng nhau
 * Tam giác cân: Nếu 2 cạnh bằng nhau
 * Tam giác vuông: c3^2 = c1^2 + c2^2
 * 
 * - Đầu ra:
 * 
 * doanTamGiac = ?
 */


document.getElementById("btnTinh").onclick = function () {

    // Đầu vào:

    var c1 = document.getElementById("canh1").value;
    var c2 = document.getElementById("canh2").value;
    var c3 = document.getElementById("canh3").value;

    var doanTamGiac = "";

    // Xử lý:

    if (c1 === c2 && c1 === c3 && c2 === c3) {
        doanTamGiac = "Đây là hình tam giác đều !";
    } else if (c1 === c2 || c1 === c3 || c2 === c3) {
        doanTamGiac = "Đây là hình tam giác cân !";
    } else if (c3 ** 2 === c1 ** 2 + c2 ** 2) {
        doanTamGiac = "Đây là hình tam giác vuông !";
    } else {
        doanTamGiac = "Hông biết nữa! Một loại tam giác nào đó."
    }

    // Đầu ra:

    document.getElementById("showTamGiac").innerHTML = doanTamGiac;
}