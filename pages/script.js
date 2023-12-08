let orderItems = [];

function addToOrder(itemName, itemPrice) {
    orderItems.push({ name: itemName, price: itemPrice });
    updateOrderList();
}

function updateOrderList() {
    const orderList = document.getElementById('order-list');
    const totalSpan = document.getElementById('total');
    let total = 0;

    // Clear the current order list
    orderList.innerHTML = '';

    // Populate the order list and calculate the total
    orderItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        orderList.appendChild(listItem);
        total += item.price;
    });

    // Update the total amount
    totalSpan.textContent = total.toFixed(2);
}

function submitOrder() {
    // You can customize this function for further actions, e.g., sending the order to a server
    alert('Order submitted! Thank you for dining with us.');
    // Clear the orderItems array and update the order list
    orderItems = [];
    updateOrderList();
}