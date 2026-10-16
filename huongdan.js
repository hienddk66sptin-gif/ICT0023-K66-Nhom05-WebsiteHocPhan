
$(document).ready(function () {
    const danhSachCauHoi = [
        {
            id: 1,
            cauHoi: "Làm thế nào để xem nội dung một học phần?",
            traLoi: "Chọn mục Học phần trên menu, tìm môn học cần xem rồi nhấn nút Xem học phần để mở trang chi tiết."
        },
        {
            id: 2,
            cauHoi: "Làm thế nào để tìm tài liệu học tập?",
            traLoi: "Mở học phần tương ứng và tìm mục Tài liệu học tập. Nhấn vào liên kết tài liệu để mở nếu tệp có sẵn và đường dẫn hoạt động."
        },
        {
            id: 3,
            cauHoi: "Nếu không mở được tài liệu thì phải làm gì?",
            traLoi: "Kiểm tra kết nối Internet, thử mở lại liên kết và kiểm tra xem tệp tài liệu có tồn tại trong thư mục dự án hay không."
        },
        {
            id: 4,
            cauHoi: "Website có lưu thông tin người dùng không?",
            traLoi: "Website này là bản minh họa học tập. Biểu mẫu không gửi dữ liệu lên máy chủ và không lưu thông tin sau khi tải lại trang."
        },
        {
            id: 5,
            cauHoi: "Công cụ tính điểm dùng như thế nào?",
            traLoi: "Mở mục Công cụ, nhập các điểm thành phần theo hướng dẫn rồi thực hiện tính toán. Kết quả chỉ có giá trị tham khảo."
        }
    ];

    const danhSachFAQ = $("#danh-sach-faq");
    const oTimKiem = $("#tu-khoa-faq");
    const thongBaoTimKiem = $("#ket-qua-faq");
    const thongBaoKhongTimThay = $("#khong-tim-thay-faq");

    function hienThiCauHoi(danhSach) {
        danhSachFAQ.empty();

        danhSach.forEach(function (item) {
            const idCauTraLoi = "cau-tra-loi-" + item.id;

            const phanTu = $("<div>")
                .addClass("accordion-item faq-item");

            const tieuDe = $("<h3>")
                .addClass("accordion-header");

            const nut = $("<button>")
                .addClass("accordion-button collapsed")
                .attr("type", "button")
                .attr("data-bs-toggle", "collapse")
                .attr("data-bs-target", "#" + idCauTraLoi)
                .attr("aria-expanded", "false")
                .attr("aria-controls", idCauTraLoi)
                .text(item.cauHoi);

            const phanTraLoi = $("<div>")
                .attr("id", idCauTraLoi)
                .addClass("accordion-collapse collapse")
                .attr("data-bs-parent", "#danh-sach-faq");

            const noiDung = $("<div>")
                .addClass("accordion-body")
                .text(item.traLoi);

            tieuDe.append(nut);
            phanTraLoi.append(noiDung);
            phanTu.append(tieuDe, phanTraLoi);
            danhSachFAQ.append(phanTu);
        });

        thongBaoTimKiem.text(
            "Hiển thị " + danhSach.length + " câu hỏi."
        );

        thongBaoKhongTimThay.prop("hidden", danhSach.length !== 0);
    }

    function timKiemCauHoi() {
        const tuKhoa = oTimKiem.val().trim().toLowerCase();

        const ketQua = danhSachCauHoi.filter(function (item) {
            return (
                item.cauHoi.toLowerCase().includes(tuKhoa) ||
                item.traLoi.toLowerCase().includes(tuKhoa)
            );
        });

        hienThiCauHoi(ketQua);
    }

    oTimKiem.on("input", timKiemCauHoi);

    const formHoiDap = $("#form-hoi-dap");
    const trangThaiForm = $("#trang-thai-form");

    formHoiDap.on("submit", function (event) {
        event.preventDefault();

        const hoTen = $("#ho-ten").val().trim();
        const chuDe = $("#chu-de").val();
        const noiDung = $("#noi-dung-cau-hoi").val().trim();

        trangThaiForm
            .removeClass("text-success text-danger")
            .text("");

        if (hoTen === "" || chuDe === "" || noiDung === "") {
            trangThaiForm
                .addClass("text-danger")
                .text("Vui lòng điền đầy đủ các trường thông tin.");
            return;
        }

        if (hoTen.length > 60 || noiDung.length > 500) {
            trangThaiForm
                .addClass("text-danger")
                .text("Tên tối đa 60 ký tự, nội dung tối đa 500 ký tự.");
            return;
        }

        trangThaiForm
            .addClass("text-success")
            .text(
                "Thông tin hợp lệ! Đây là bản thử nghiệm, " +
                "câu hỏi chưa được gửi hoặc lưu lại."
            );
    });

    formHoiDap.on("reset", function () {
        trangThaiForm
            .removeClass("text-success text-danger")
            .text("");
    });

    hienThiCauHoi(danhSachCauHoi);
});
