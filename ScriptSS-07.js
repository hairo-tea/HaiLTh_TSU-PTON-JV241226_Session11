// vào 2 số a và b
let a = parseFloat(prompt("Mời bạn nhập vào số a"));
let b = parseFloat(prompt("Mời bạn nhập vào số b"));
// nhập các phép tính : +, -, *, /...
let cal = prompt("Mời bạn nhập các phép tính (+, -, *, /) :");
if (cal == "+") {
    alert("Kết quả của phép tính trên: a + b =" + (a + b));
} else if (cal == "-") {
    alert("Kết quả của phép tính trên: a - b =" + (a - b));
} else if (cal == "*") {
    alert("Kết quả của phép tính trên: a * b =" + (a * b));
} else if (cal == "/") {
    if (b === 0) {
        alert("lỗi: Không thể chia cho 0");
    } else {
        alert("Kết quả của phép tính trên: a / b =" + (a / b));
    }
} else {
    alert("Lỗi: Phép toán không hợp lệ");
}