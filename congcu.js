
const diemQuaTrinh = document.getElementById("diem_qua_trinh");
const diemGiuaKy = document.getElementById("diem_giua_ky");
const diemCuoiKy = document.getElementById("diem_cuoi_ky");

const nutTinhDiem = document.getElementById("nut_tinh_diem");
const ketQuaDiem = document.getElementById("ket_qua_diem");

const nutDuLieuMau = document.getElementById("nut_du_lieu_mau");
const nutDatLai = document.getElementById("nut_dat_lai");

nutTinhDiem.addEventListener("click", function () {
    const diemQT = Number(diemQuaTrinh.value);
    const diemGK = Number(diemGiuaKy.value);
    const diemCK = Number(diemCuoiKy.value);

    if ( diemQuaTrinh.value === "" || diemGiuaKy.value === "" || diemCuoiKy.value === "") 
    {
        ketQuaDiem.textContent = "Vui lòng nhập đầy đủ cả 3 điểm!";
        return;
    }

// Kiểm tra điểm có nằm trong khoảng từ 0 đến 10 không
if (
    diemQT < 0 || diemQT > 10 || diemGK < 0 || diemGK > 10 || diemCK < 0 || diemCK > 10) 
    {
        ketQuaDiem.textContent = "Điểm phải nằm trong khoảng từ 0 đến 10!";
        return;
    }
const diemTongKet = diemQT * 0.2
                  + diemGK * 0.3
                  + diemCK * 0.5;

    ketQuaDiem.textContent =
        "Điểm tổng kết: " + diemTongKet.toFixed(2);
});

nutDuLieuMau.addEventListener("click", function () {
    diemQuaTrinh.value = 8;
    diemGiuaKy.value = 7;
    diemCuoiKy.value = 9;
});

nutDatLai.addEventListener("click", function () {
    diemQuaTrinh.value = "";
    diemGiuaKy.value = "";
    diemCuoiKy.value = "";

    ketQuaDiem.textContent = "";
});
