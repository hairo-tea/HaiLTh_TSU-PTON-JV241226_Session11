//Bước 1: Nhập vào ngày và tháng sinh
let date = +prompt("Nhập vào ngày sinh (date):");
let month = +prompt("Nhập vào tháng sinh (month):");
//Bước 2: Kiểm tra ngày (1->31), tháng (1->12) có hợp lệ hay không
if (date < 1 || date > 31) {
    alert('Ngày không hợp lệ');
}
if (month < 1 || month > 12) {
    alert('Tháng không hợp lệ');
}
//Bước 3: Kiểm tra 
if (date >= 22 && month == 12 || (date <= 19 && month == 1)) {
    alert('Cung Ma Kết');
} else if (date >= 20 && month == 1 || (date <= 18 && month == 2)) {
    alert('Cung Bảo Bình');

} else if (date >= 19 && month == 2 || (date <= 20 && month == 3)) {
    alert('Cung Song Ngư');
} else if (date >= 21 && month == 3 || (date <= 19 && month == 4)) {
    alert('Bạch Dương');

} else if (date >= 20 && month == 4 || (date <= 20 && month == 5)) {
    alert('Cung Kim Ngưu');
} else if (date >= 21 && month == 5 || (date <= 21 && month == 6)) {
    alert('Cung Song Tử');

} else if (date >= 22 && month == 6 || (date <= 22 && month == 7)) {
    alert('Cung Cự Giải');

} else if (date >= 23 && month == 7 || (date <= 22 && month == 8)) {
    alert('Cung Sư Tử');

} else if (date >= 23 && month == 8 || (date <= 22 && month == 9)) {
    alert('Cung Xử Nữ');

} else if (date >= 23 && month == 9 || (date <= 22 && month == 10)) {
    alert('Cung Thiên Bình');

} else if (date >= 23 && month == 10 || (date <= 21 && month == 11)) {
    alert('Cung Thiên Yết');

} else if (date >= 22 && month == 12 || (date <= 21 && month == 12)) {
    alert('Cung Nhân Mã');

}
