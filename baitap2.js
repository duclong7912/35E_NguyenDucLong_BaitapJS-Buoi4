//                     //  Chào hỏi thành viên trong gia đình

// document.getElementById("btnChao").onclick = function() {

//     // Đầu vào:
//     var chonThanhVien = document.getElementById("chonThanhVien").value;
    
//     var xinChao = "";

//     // Xử lý:

//     if(chonThanhVien === 'bo'){
//         xinChao = "Chào Bố !"
//     } else if (chonThanhVien === 'me') {
//         xinChao = "Chào Mẹ !"
//     } else if (chonThanhVien === 'anhTrai') {
//         xinChao = "Chào Anh Trai !"
//     } else if (chonThanhVien === 'emGai') {
//         xinChao = "Chào Em Gái !"
//     }

//     // Đầu ra:
    
//     document.getElementById("showLoiChao").innerHTML = xinChao;

// }

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

