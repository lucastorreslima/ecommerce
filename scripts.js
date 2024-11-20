let cart = JSON.parse(localStorage.getItem('cart')) || [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout-btn');

// Atualiza o carrinho no localStorage
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));

    cartItemsList.innerHTML = ''; // Limpa a lista de itens no carrinho
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    cartCount.textContent = cart.length; // Atualiza o número de itens no carrinho
    totalPriceElement.textContent = `Total: R$ ${total.toFixed(2)}`; // Atualiza o total do carrinho

    checkoutButton.disabled = cart.length === 0; // Habilita o botão de checkout se houver itens no carrinho
}

// Adiciona produtos ao carrinho
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.dataset.product;
        const productPrice = parseFloat(button.dataset.price);

        cart.push({ name: productName, price: productPrice }); // Adiciona o produto ao carrinho
        updateCart(); // Atualiza o carrinho
    });
});
