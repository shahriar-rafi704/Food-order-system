document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const foodDetailsSection = document.getElementById('food-details-section');
    const detailsContent = document.getElementById('details-content');
    const orderButton = document.getElementById('order-button');
    const orderSummarySection = document.getElementById('order-summary-section');
    const summaryContent = document.getElementById('summary-content');
    const menuSection = document.getElementById('menu-section');
    const orderMoreButton = document.getElementById('order-more-button');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const foodId = item.getAttribute('data-id');
            showFoodDetails(foodId);
        });
    });

    orderButton.addEventListener('click', () => {
        createOrder();
    });

    orderMoreButton.addEventListener('click', () => {
        showMenu();
    });

    function showFoodDetails(foodId) {
        const foodDetails = {
            1: {
                name: 'Pizza',
                description: 'Delicious cheese pizza with a crispy crust.',
                price: 10,
                preparationTime: 20
            },
            2: {
                name: 'Burger',
                description: 'Juicy beef burger with fresh lettuce and tomatoes.',
                price: 7,
                preparationTime: 15
            }
        };

        const food = foodDetails[foodId];
        detailsContent.innerHTML = `
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            <p>Price: $${food.price}</p>
            <p>Preparation Time: ${food.preparationTime} minutes</p>
        `;
        menuSection.classList.add('hidden');
        foodDetailsSection.classList.remove('hidden');
        orderSummarySection.classList.add('hidden');
    }

    function createOrder() {
        const foodName = detailsContent.querySelector('h3').innerText;
        const priceText = detailsContent.querySelector('p:nth-child(3)').innerText;
        const preparationTimeText = detailsContent.querySelector('p:nth-child(4)').innerText;

        summaryContent.innerHTML = `
            <p>Thank you for ordering ${foodName}!</p>
            <p>${priceText}</p>
            <p>${preparationTimeText}</p>
        `;
        foodDetailsSection.classList.add('hidden');
        orderSummarySection.classList.remove('hidden');
    }

    function showMenu() {
        menuSection.classList.remove('hidden');
        foodDetailsSection.classList.add('hidden');
        orderSummarySection.classList.add('hidden');
    }
});
