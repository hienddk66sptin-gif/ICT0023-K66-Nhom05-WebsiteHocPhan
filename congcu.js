
const diemQuaTrinh = document.getElementById("diem_qua_trinh");
const diemGiuaKy = document.getElementById("diem_giua_ky");
const diemCuoiKy = document.getElementById("diem_cuoi_ky");

const nutTinhDiem = document.getElementById("nut_tinh_diem");
const ketQuaDiem = document.getElementById("ket_qua_diem");

nutTinhDiem.addEventListener("click", function () {
    const diemQT = Number(diemQuaTrinh.value);
    const diemGK = Number(diemGiuaKy.value);
    const diemCK = Number(diemCuoiKy.value);

    const diemTongKet = diemQT * 0.2
                      + diemGK * 0.3
                      + diemCK * 0.5;

    ketQuaDiem.textContent =
        "Điểm tổng kết: " + diemTongKet.toFixed(2);
});
