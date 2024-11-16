$(document).ready(function(){
    var i=2;
    $("#dk").click(function(){
        $("#my-modal").modal();
    })
    
    function kiemtraTen(){
            
        var maukt = /^([A-Z]{1}[a-z]+)(\s[A-Z]{1}[a-z]*)+$/; // Biểu thức chính quy kiểm tra mã có 9 chữ số
        var ma = $("#txtTen").val(); // Lấy giá trị của input

        if(ma == "") { // Kiểm tra nếu trống
            $("#tbTen").html("Bắt buộc nhập*");
            $("#tbTen").addClass("maudo");
        }
        else if(!maukt.test(ma)) { // Nếu không khớp với regex
            $("#tbTen").html("Nhập sai*");
            $("#tbTen").addClass("maudo");
        }
        else {
            $("#tbTen").html(""); // Xóa thông báo lỗi nếu đúng
            $("#tbTen").removeClass("maudo");
        }
    }
    $("#txtTen").blur(kiemtraTen);
    function kiemtraSodienthoai(){
            
        var maukt = /^[0]{1}[1-9]{1}[0-9]{8}$/; // Biểu thức chính quy kiểm tra mã có 9 chữ số
        var ma = $("#txtSdt").val(); // Lấy giá trị của input

        if(ma == "") { // Kiểm tra nếu trống
            $("#tbSdt").html("Bắt buộc nhập*");
            $("#tbSdt").addClass("maudo");
        }
        else if(!maukt.test(ma)) { // Nếu không khớp với regex
            $("#tbSdt").html("Nhập sai*");
            $("#tbSdt").addClass("maudo");
        }
        else {
            $("#tbSdt").html(""); // Xóa thông báo lỗi nếu đúng
            $("#tbSdt").removeClass("maudo");
        }
    }
    $("#txtSdt").blur(kiemtraSodienthoai);
    function kiemtraEmail(){
            
        var maukt = /^([a-z0-9]*)(@gmail.com)/; // Biểu thức chính quy kiểm tra mã có 9 chữ số
        var ma = $("#txtEmail").val(); // Lấy giá trị của input

        if(ma == "") { // Kiểm tra nếu trống
            $("#tbEmail").html("Bắt buộc nhập*");
            $("#tbEmail").addClass("maudo");
        }
        else if(!maukt.test(ma)) { // Nếu không khớp với regex
            $("#tbEmail").html("Nhập sai*");
            $("#tbEmail").addClass("maudo");
        }
        else {
            $("#tbEmail").html(""); // Xóa thông báo lỗi nếu đúng
            $("#tbEmail").removeClass("maudo");
        }
    }
    $("#txtEmail").blur(kiemtraEmail);
    function kiemtraMatkhau(){
            
        var maukt = /^[0-9]{9}$/; // Biểu thức chính quy kiểm tra mã có 9 chữ số
        var ma = $("#txtMatkhau").val(); // Lấy giá trị của input

        if(ma == "") { // Kiểm tra nếu trống
            $("#tbMatkhau").html("Bắt buộc nhập*");
            $("#tbMatkhau").addClass("maudo");
        }
        else if(!maukt.test(ma)) { // Nếu không khớp với regex
            $("#tbMatkhau").html("Nhập sai*");
            $("#tbMatkhau").addClass("maudo");
        }
        else {
            $("#tbMatkhau").html(""); // Xóa thông báo lỗi nếu đúng
            $("#tbMatkhau").removeClass("maudo");
        }
    }
    $("#txtMatkhau").blur(kiemtraMatkhau);
    $("#dangky").click(function(){
        var ten= $("#txtTen").val();    
        var sdt= $("#txtSdt").val();
        var email= $("#txtEmail").val();

        var them="<tr><td>" +(i++) + "</td><td>"+ ten+ "</td><td>" +sdt+"</td><td>"+email+"</td></tr>";
        $("#danhsach").append(them);
        $("#my-modal").modal("hide");
        return true;
    })

})