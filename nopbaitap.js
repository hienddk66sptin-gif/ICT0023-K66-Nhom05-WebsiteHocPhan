let tepBaiTap = document.getElementById("file_bai_tap");
tepBaiTap.addEventListener("change", function() {
if (tepBaiTap.files.length > 0) //kiểm tra có tệp được chọn rồi mới lấy tên, tránh lỗi.
    {
        console.log(tepBaiTap.files[0].name); //Lấy tên tệp đầu tiên
    }
});

let formNopBai = document.getElementById("form_nop_bai");//lấy biểu mẫu nộp bài
formNopBai.addEventListener("submit", function(event) //Submit, sự kiện sảy ra khi ta ấn nút nộp bài
{
    event.preventDefault();//ngăn hành vi mặc định của trình duyệt, tức là không tự tải lại trang nữa.
    if (tepBaiTap.files.length === 0)
    {
        alert("Bạn chưa chọn tệp bài làm!");
        return;
    }
    let tenTep = tepBaiTap.files[0].name;
    let trangThai = document.getElementById("trang_thai_nop_bai");
    trangThai.textContent = "Đã nộp bài mô phỏng: " + tenTep;
});
