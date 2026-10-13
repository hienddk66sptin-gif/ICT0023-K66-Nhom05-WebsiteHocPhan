
const hanNop = document.getElementById("han_nop");
const thoiGianConLai = document.getElementById("thoi_gian_con_lai");

let dongHo;

function demNguocHanNop() {
    if (!hanNop || !thoiGianConLai) {
        return;
    }

    const thoiGianNop = new Date(hanNop.dateTime).getTime();
    const thoiGianHienTai = Date.now();
    const khoangCach = thoiGianNop - thoiGianHienTai;

    if (Number.isNaN(thoiGianNop)) {
        thoiGianConLai.textContent = "Hạn nộp không hợp lệ.";
        clearInterval(dongHo);
        return;
    }

    if (khoangCach <= 0) {
        thoiGianConLai.textContent = "Đã hết hạn nộp bài!";
        clearInterval(dongHo);
        return;
    }

    const ngay = Math.floor(khoangCach / (1000 * 60 * 60 * 24));
    const gio = Math.floor(
        (khoangCach % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const phut = Math.floor(
        (khoangCach % (1000 * 60 * 60)) / (1000 * 60)
    );
    const giay = Math.floor((khoangCach % (1000 * 60)) / 1000);

    thoiGianConLai.textContent =
        `Còn ${ngay} ngày ${gio} giờ ${phut} phút ${giay} giây đến hạn nộp.`;
}

demNguocHanNop();
dongHo = setInterval(demNguocHanNop, 1000);
