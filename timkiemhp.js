const oTimKiem = document.getElementById("o_tim_kiem");
const cacHocPhan = document.getElementsByClassName("hoc_phan");

oTimKiem.addEventListener("input", function() {
    let tuKhoa = oTimKiem.value.toLowerCase();

    for (let i = 0; i < cacHocPhan.length; i++) {
        let tenHocPhan = cacHocPhan[i].innerText.toLowerCase();

        if (tenHocPhan.includes(tuKhoa)) {
            cacHocPhan[i].style.display = "block";
        } else {
            cacHocPhan[i].style.display = "none";
        }
    }
});