// cho người dùng nhập vào cân nặng, chiều cao
let weight = +prompt("nhập vào cân nặng:");
let hight = +prompt("nhập vào chiều cao:") / 100; //nhap bang centimet
// Chỉ số khối cơ thể (Body mass index-BMI) 
let BMI = weight / (hight * hight);
// tính toán và in ra màn hình phân loại bằng alert()
if (BMI < 18.5) {
    alert("BMI=" + BMI.toFixed(2) + " " + "Cân nặng thấp (gầy)");
} else if (BMI >= 18.5 && BMI < 24.9) {
    alert("BMI=" + BMI.toFixed(2) + " " + "Bình thường");
} else if (BMI >= 25 && BMI < 29.9) {
    alert("BMI=" + BMI.toFixed(2) + " " + "Tiền béo phì");
} else if (BMI >= 30 && BMI < 34.9) {
    alert("BMI=" + BMI.toFixed(2) + " " + "Béo phì độ I");
} else if (BMI >= 35 && BMI < 39.9) {
    alert("BMI=" + BMI.toFixed(2) + " " + "Béo phì độ II");
} else {
    alert("BMI=" + BMI.toFixed(2) + " " + "Béo phì độ III");
}


