//Yêu cầu người dùng nhập tên từ bàn phím 
let userName = prompt("Input your username:");

// kiểm tra 1
if (userName == "ADMIN") {

} else if (userName == null) {
    alert("Cancelled");
} else {
    alert("I Don’t know you");
}
let password = prompt("Input your password");
// kiểm tra 2
if (password == "TheMaster") {
    alert("Welcome");
} else if (password == null) {
    alert("Cancelled");
} else {
    alert("Wrong password");
}