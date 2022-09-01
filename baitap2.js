//                     //  Chào hỏi thành viên trong gia đình

/**
 * - Đầu vào:
 * 
 * Đặt biến để người dùng nhập dữ liệu
 * 
 * var hi = ?
 * 
 * đặt biến để hiện thị kết quả
 * var xinChao = "";
 * 
 * - Xử lý:
 * 
 * Sử dụng switch case để xét từng trường hợp
 * case "bo"
 * case "me"
 * case "anhTrai"
 * case "emGai"
 * 
 * - Đầu ra:
 * 
 * xinChao = ?
 */

document.getElementById("btnChao").onclick = function () {
    
    // Đầu vào:

    var hi = document.getElementById("chonThanhVien").value;
    var xinChao = "";

    // Xử lý:

    switch (hi) {
        case "bo":
            xinChao = "Chào Bố !"
            break;
        case "me":
            xinChao = "Chào Mẹ !"
            break;
        case "anhTrai":
            xinChao = "Chào Anh Trai !"
            break;
        case "emGai":
            xinChao = "Chào Em Gái !"
            break;
        default:
            xinChao = "Vui lòng chọn thành viên";
            break;
    }

    // Đầu ra:

    document.getElementById("showLoiChao").innerHTML = xinChao;
}

