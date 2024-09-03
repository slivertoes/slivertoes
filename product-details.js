document.addEventListener('DOMContentLoaded', () => {
    // Sample data - include all products
    const products = {
        footwear1: {
            image: 'assets/EF5A1775a.JPG',
            sku: 'SKU: FT-001',
            name: 'Footwear 1',
            price: 'Rs 799 - Rs 999',
            description: 'Stylish and comfortable footwear perfect for any occasion.'
        },
        footwear2: {
            image: 'assets/EF5A1781a.JPG',
            sku: 'SKU: FT-002',
            name: 'Footwear 2',
            price: 'Rs 799 (Sale)',
            description: 'Elegant and durable footwear with a modern design.'
        },
        footwear3: {
            image: 'assets/EF5A1787a.JPG',
            sku: 'SKU: FT-003',
            name: 'Footwear 3',
            price: 'Rs 799 (Sale)',
            description: 'Comfortable footwear for everyday use.'
        },
        footwear4: {
            image: 'assets/EF5A1827a.JPG',
            sku: 'SKU: FT-004',
            name: 'Footwear 4',
            price: 'Rs 999',
            description: 'Stylish and durable footwear for special occasions.'
        },
        footwear5: {
            image: 'assets/EF5A1854a.JPG',
            sku: 'SKU: FT-005',
            name: 'Footwear 5',
            price: 'Rs 799 (Sale)',
            description: 'Trendy footwear with a comfortable fit.'
        },
        footwear6: {
            image: 'assets/EF5A1862a.JPG',
            sku: 'SKU: FT-006',
            name: 'Footwear 6',
            price: 'Rs 699 - Rs 999',
            description: 'Versatile footwear suitable for various occasions.'
        },
        footwear7: {
            image: 'assets/EF5A1875a.JPG',
            sku: 'SKU: FT-007',
            name: 'Footwear 7',
            price: 'Rs 699 (Sale)',
            description: 'Affordable and stylish footwear for casual wear.'
        },
        footwear8: {
            image: 'assets/EF5A1881a.JPG',
            sku: 'SKU: FT-008',
            name: 'Footwear 8',
            price: 'Rs 899',
            description: 'Elegant footwear with a classic design.'
        }
    };

    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');

    // Get the product data based on the ID
    const product = products[productId];

    if (product) {
        // Populate the HTML with the product data
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-sku').textContent = product.sku;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;
    } else {
        // Handle case where product is not found
        document.getElementById('product-name').textContent = 'Product not found';
    }

    // Sample related products (update with actual related products)
    const relatedProducts = [
        // Example related products; you can make these dynamic or match the context
        {
            image: 'assets/EF5A1781a.JPG',
            name: 'Footwear 2',
            price: 'Rs 799'
        },
        {
            image: 'assets/EF5A1775a.JPG',
            name: 'Footwear 1',
            price: 'Rs 799'
        }
        // Add more related products here
    ];

    const relatedContainer = document.getElementById('related-products');
    relatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col mb-5';
        productCard.innerHTML = `
            <div class="card h-100">
                <img class="card-img-top" src="${product.image}" alt="..." />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">${product.name}</h5>
                        <span class="text-muted">${product.price}</span>
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View</a></div>
                </div>
            </div>
        `;
        relatedContainer.appendChild(productCard);
    });
});
