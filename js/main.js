$(document).ready(function(){
    var i=2;
    $("#dk").click(function(){
        $("#my-modal").modal();
    })
    
    
    
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
})