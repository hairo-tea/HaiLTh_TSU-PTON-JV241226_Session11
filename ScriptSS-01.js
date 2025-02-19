// cho phép người dùng nhập vào một năm
let year = parseInt(prompt("Nhập vào một năm mà bạn muốn kiểm tra"));



if ((year % 4) == 0 && year % 100 > 0) {
    alert(year + " là năm nhuận");
} else if (year % 100 == 0 && year % 400 > 0) {
    alert(year + " KHÔNG PHẢI là năm nhuận");
} else if (year % 100 == 0 && year % 400 == 0) {
    alert(year + " là năm nhuận");
} else {
    alert(year + " KHÔNG PHẢI là năm nhuận");
}