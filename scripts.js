document.addEventListener('DOMContentLoaded', function () {
    const products = [
        {
            name: 'footwear1',
            price: 'Rs 799 - Rs 999',
            image: 'assets/EF5A1775a.JPG',
            sale: false
        },
        {
            name: 'footwear2',
            price: 'Rs 799',
            image: 'assets/EF5A1781a.JPG',
            sale: true,
            originalPrice: 'Rs 1299'
        },
        {
            name: 'footwear3',
            price: 'Rs 799',
            image: 'assets/EF5A1787a.JPG',
            sale: true,
            originalPrice: 'Rs 999'
        },
        {
            name: 'footwear4',
            price: 'Rs 999',
            image: 'assets/EF5A1827a.JPG',
            sale: false
        },
        {
            name: 'footwear5',
            price: 'Rs 799',
            image: 'assets/EF5A1854a.JPG',
            sale: true,
            originalPrice: 'Rs 999'
        },
        {
            name: 'footwear6',
            price: 'Rs 699 - Rs 999',
            image: 'assets/EF5A1862a.JPG',
            sale: false
        },
        {
            name: 'footwear7',
            price: 'Rs 699',
            image: 'assets/EF5A1875a.JPG',
            sale: true,
            originalPrice: 'Rs 899'
        },
        {
            name: 'footwear8',
            price: 'Rs 899',
            image: 'assets/EF5A1881a.JPG',
            sale: false
        }
    ];

    const productContainer = document.getElementById('product-container');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col mb-5';
        productCard.innerHTML = `
            <div class="card h-100">
                ${product.sale ? '<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>' : ''}
                <img class="card-img-top" src="${product.image}" alt="..." />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">${product.name}</h5>
                        ${product.sale ? `<span class="text-muted text-decoration-line-through">${product.originalPrice}</span>` : ''}
                        ${product.price}
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="view.html?product=${product.name}">View</a></div>
                </div>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
});
