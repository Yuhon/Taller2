
import '../css/style.css'; 
import 'flowbite';   

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let container = document.getElementById("cartItems");
let total = 0;

container.innerHTML = "";

cart.forEach((item, index) => {
    total += item.price;
    container.innerHTML += `
    <div class="flex items-center bg-gray-800 p-5 rounded-lg gap-10">
    <img src="${item.image}" class="w-2430 h-16 object-cover rounded">
    <div class="flex-grow">
        <h3 class="font-bold">${item.name}</h3>
        <p class="text-green-400">$${item.price}</p>
    </div>
    <button onclick="removeItem(${index})" class="bg-red-600 px-3 py-1 rounded">
        X
    </button>
    </div>
`;
});

document.getElementById("total").textContent = "Total: $" + total.toFixed(2);

function removeItem(index) {
cart.splice(index, 1);
localStorage.setItem('cart', JSON.stringify(cart));
location.reload();
}

