document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const categoriesBtn = document.querySelector('.categories-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (categoriesBtn) {
        categoriesBtn.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
    
    // Dropdown menus
    const dropdownItems = document.querySelectorAll('.nav-item a i.fa-chevron-down');
    
    dropdownItems.forEach(item => {
        item.parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
        });
    });
    
    // Product card hover effect
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Buy Now button
    const buyNowBtn = document.querySelector('.buy-now-btn');
    
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            alert('Proceeding to checkout...');
        });
    }
    
    // Delete account confirmation
    const deleteBtn = document.querySelector('.delete-btn');
    
    if (deleteBtn) {
        deleteBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                alert('Account deletion request submitted.');
            }
        });
    }
    
    // Form submission
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted successfully!');
        });
    });
    
    // // View order details
    // const viewBtns = document.querySelectorAll('.view-btn');
    
    // viewBtns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         const orderRow = this.closest('.order-row');
    //         const orderId = orderRow.querySelector('.order-col:nth-child(2)').textContent;
    //         alert(`Viewing details for order ${orderId}`);
    //     });
    // });
    
    // Add responsive data attributes for mobile view
    const orderRows = document.querySelectorAll('.order-row');
    
    orderRows.forEach(row => {
        const cols = row.querySelectorAll('.order-col');
        
        cols.forEach((col, index) => {
            if (index === 1) col.setAttribute('data-label', 'Order:');
            if (index === 2) col.setAttribute('data-label', 'Date:');
            if (index === 3) col.setAttribute('data-label', 'Items:');
            if (index === 4) col.setAttribute('data-label', 'Status:');
            if (index === 5) col.setAttribute('data-label', 'Amount:');
        });
    });
});
if (window.announcementClosed) {
    document.querySelector('.announcement-bar').remove();
}