let diemQuaTrinh=document.getElementById("diem_qua_trinh"); //tạo 1 biến diemquatrinh để lưu thông tin, tìm phần tử html theo id
let diem_QT = diemQuaTrinh.value; //value có nghĩa là lấy giá trị hiện tại của ô nhập, nếu nhập 8.5 thì value sẽ nhận giá trị "8.5" dưới dạng chuỗi kĩ tự
let diem_so_QT=Number(diem_QT);//Biến cái giá trị vừa nhận trên kia thành number để tính toán, không sẽ dễ gây lỗi trong quá trình tính toán
let diemGiuaKy=document.getElementById("diem_giua_ky");
let diem_GK=diemGiuaKy.value;
let diem_so_GK=Number(diem_GK);
let diemCuoiKy=document.getElementById("diem_cuoi_ky");
let diem_CK=diemCuoiKy.value;
let diem_so_CK=Number(diem_CK);

diemQuaTrinh.addEventListener("input", function()
{
    console.log(diemQuaTrinh.value);
});
diemGiuaKy.addEventListener("input", function()
{
    console.log(diemGiuaKy.value);
});

diemCuoiKy.addEventListener("input", function()
{
    console.log(diemCuoiKy.value);
});