
const form = document.querySelector("form");
const hoVaTen = document.getElementById("hoten");
const loiHoTen = document.getElementById("sai_hoTen");
const dungHoTen = document.getElementById("dung_hoTen");

const email=document.getElementById("email");
const loiEmail=document.getElementById("sai_email");
const dungEmail=document.getElementById("dung_email");

const noiDungLienHe=document.getElementById("noidunglienhe");
const loiNoiDungLienHe=document.getElementById("sai_noiDungLienHe");
const dungNoiDungLienHe=document.getElementById("dung_noiDungLienHe");

const thongBaoGui = document.getElementById("thongBaoGui");


form.addEventListener("submit", function(event) {
    event.preventDefault();
    thongBaoGui.textContent = "";
//Điều kiện của hoten
    if (hoVaTen.value === "") //lấy nội dung người dùng đã nhập
        {
            loiHoTen.textContent = "Vui lòng nhập họ và tên!";
            dungHoTen.textContent="";
        } 
    else 
        {
            loiHoTen.textContent = "";
            dungHoTen.textContent="Họ và tên hợp lệ!";
        }
//điều kiện của email
    if (email.value=== "") 
        {
            loiEmail.textContent = "Vui lòng nhập email!";
        } 
    else if (email.validity.typeMismatch) //khi trình duyệt đọc html thì biết đây là email thong qua type="email" . Trình duyệt sẽ cung cấp 1 số thông tin về tình trạng hợp lệ của dữ liệu đó, validity sẽ chứa thông tin về việc dữ liệu trong ô nhập có hợp lệ hay không. typeMismatch cho biết dữ liệu có sai định dạng mà thuộc tính type yêu cầu hay không. 2 đứa này là thuộc tính
        {
             loiEmail.textContent = "Email chưa đúng định dạng!";
        } 
    else 
        {
            loiEmail.textContent="";
            dungEmail.textContent = "Email hợp lệ!";
        }
//điều kiện của nội dung liên hệ
if(noiDungLienHe.value==="")
{
    loiNoiDungLienHe.textContent="Bạn thực sự không định nhắn gì khi vào mục liên hệ à ?"
}
else
{
    loiNoiDungLienHe.textContent="";
    dungNoiDungLienHe.textContent="Nội dung liên hệ đã được nhập!";
}

//thông báo gửi form
if (
    hoVaTen.value.trim() !== "" &&
    email.value.trim() !== "" &&
    !email.validity.typeMismatch &&
    noiDungLienHe.value.trim() !== ""
) 
{
    thongBaoGui.textContent = "Thông tin hợp lệ, biểu mẫu đã được gửi!";
}
});
