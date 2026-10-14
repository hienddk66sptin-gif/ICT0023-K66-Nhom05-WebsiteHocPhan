const tepBaiTap = document.getElementById("file_bai_tap");
const formNopBai = document.getElementById("form_nop_bai");
const trangThai = document.getElementById("trang_thai_nop_bai");
const ketQuaThoiGian = document.getElementById("ket_qua_thoi_gian_nop");
const hanNopBaiTap = document.getElementById("han_nop");

function tinhKhoangThoiGian(khoangCach) {
    const tongPhut = Math.floor(Math.abs(khoangCach) / (1000 * 60));
    const ngay = Math.floor(tongPhut / (60 * 24));
    const gio = Math.floor((tongPhut % (60 * 24)) / 60);
    const phut = tongPhut % 60;

    return `${ngay} ngày ${gio} giờ ${phut} phút`;
}

tepBaiTap.addEventListener("change", function () {
    if (tepBaiTap.files.length > 0) {
        console.log("Tệp đã chọn:", tepBaiTap.files[0].name);
    }
});

formNopBai.addEventListener("submit", function (event) {
    event.preventDefault();

    if (tepBaiTap.files.length === 0) {
        alert("Bạn chưa chọn tệp bài làm!");
        return;
    }

   if (!hanNopBaiTap || !hanNopBaiTap.dateTime || Number.isNaN(new Date(hanNopBaiTap.dateTime).getTime())) {
        alert("Hạn nộp bài chưa được thiết lập hợp lệ!");
        return;
    }

    const tenTep = tepBaiTap.files[0].name;
    const thoiGianNop = new Date();
    const thoiGianHanNop = new Date(hanNopBaiTap.dateTime);
    const chenhLech = thoiGianHanNop.getTime() - thoiGianNop.getTime();

    trangThai.textContent = "Đã nộp bài mô phỏng: " + tenTep;

    let ketQua = "";

    if (chenhLech > 0) {
        ketQua = "Nộp sớm " + tinhKhoangThoiGian(chenhLech);
    } else if (chenhLech === 0) {
        ketQua = "Nộp đúng hạn!";
    } else {
        ketQua = "Nộp muộn " + tinhKhoangThoiGian(chenhLech);
    }

    ketQuaThoiGian.innerHTML = `
        <p><strong>Thời điểm nộp:</strong> ${thoiGianNop.toLocaleString("vi-VN")}</p>
        <p><strong>Kết quả:</strong> ${ketQua}</p>
    `;
});
