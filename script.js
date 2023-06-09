// Daftar menu kopi
var menu = [
    { name: "Espresso", price: "10" },
    { name: "Cappuccino", price: "15" },
    { name: "Latte", price: "15" },
    { name: "Mocha", price: "17" },
    { name: "Macchiato", price: "19" }
];

// Inisialisasi variabel pesanan
var order = [];

// Fungsi untuk menampilkan menu
function showMenu() {
    var menuList = document.getElementById("menu-list");
    menuList.innerHTML = "";

    for (var i = 0; i < menu.length; i++) {
        var menuItem = document.createElement("li");
        menuItem.innerHTML = menu[i].name + " - " + menu[i].price + "K";
        menuItem.setAttribute("onclick", "addToOrder(" + i + ")");
        menuList.appendChild(menuItem);
    }
}

// Fungsi untuk menambahkan item pesanan
function addToOrder(index) {
    order.push(menu[index]);

    var orderList = document.getElementById("order-list");
    var orderItem = document.createElement("li");
    orderItem.innerHTML = menu[index].name + " - " + menu[index].price + "K";
    orderList.appendChild(orderItem);
}

// Fungsi untuk menghitung total harga pesanan
function calculateTotal() {
    var total = 0;
    for (var i = 0; i < order.length; i++) {
      total += order[i].price;
    }
    return total;
}

// Fungsi untuk checkout
function checkout() {
    var total = calculateTotal();
    alert("Total harga:" + total + "K");
}

// Menampilkan menu saat halaman dimuat
window.onload = showMenu;