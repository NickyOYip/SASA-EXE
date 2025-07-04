/**
 * Category Dropdown Handler
 * Handles the category dropdown functionality and integration with navigation
 */

// Import the data and utilities
import './catdropdown.js';

export class CategoryDropdownHandler {
    constructor(categoryElement) {
        this.categoryElement = categoryElement;
        this.dropdownContainer = null;
        this.isDropdownVisible = false;
        this.hoverTimeout = null;
        
        this.init();
    }

    init() {
        this.createDropdownHTML();
        this.setupEventListeners();
        this.loadInitialData();
    }

    createDropdownHTML() {
        // Create the dropdown container with the exact same structure as catdropdown.html
        this.dropdownContainer = document.createElement('div');
        this.dropdownContainer.className = 'category-dropdown-container';
        this.dropdownContainer.style.display = 'none';
        
        this.dropdownContainer.innerHTML = `
            <div class="dropdown-container">
                <!-- Main Categories Column -->
                <ul id="main-categories" class="category-list main-categories-list">
                    <!-- Main categories will be dynamically loaded here -->
                </ul>
                
                <!-- Subcategories Column -->
                <ul id="subcategories" class="category-list subcategories-list">
                    <!-- Subcategories will be dynamically loaded here -->
                </ul>
                
                <!-- Product Details Section -->
                <div class="product-details-section">
                    <div class="section-header">
                        <a id="product-section-title" class="section-title">Cleansers &amp; Scrubs</a>
                    </div>
                    <div class="section-content">
                        <div class="product-list-container">
                            <ul id="product-categories" class="product-list">
                                <!-- Product categories will be dynamically loaded here -->
                            </ul>
                        </div>
                    </div>
                </div>
                
                <!-- Recommended Brands Section -->
                <div class="recommended-brands-section">
                    <div class="section-header">
                        <a class="section-title">RECOMMENDED BRANDS</a>
                    </div>
                    <div id="recommended-brands" class="brands-grid">
                        <!-- Brands will be dynamically loaded here -->
                    </div>
                </div>
            </div>
        `;

        // Append to the category element
        this.categoryElement.appendChild(this.dropdownContainer);
    }

    setupEventListeners() {
        // Add hover events to the category menu item
        this.categoryElement.addEventListener('mouseenter', () => {
            this.clearHoverTimeout();
            this.showDropdown();
        });

        this.categoryElement.addEventListener('mouseleave', () => {
            this.setHoverTimeout(() => {
                this.hideDropdown();
            }, 300); // Small delay to prevent flickering
        });

        // Prevent dropdown from closing when hovering over it
        this.dropdownContainer.addEventListener('mouseenter', () => {
            this.clearHoverTimeout();
        });

        this.dropdownContainer.addEventListener('mouseleave', () => {
            this.setHoverTimeout(() => {
                this.hideDropdown();
            }, 300);
        });
    }

    setHoverTimeout(callback, delay) {
        this.clearHoverTimeout();
        this.hoverTimeout = setTimeout(callback, delay);
    }

    clearHoverTimeout() {
        if (this.hoverTimeout) {
            clearTimeout(this.hoverTimeout);
            this.hoverTimeout = null;
        }
    }

    showDropdown() {
        if (!this.isDropdownVisible) {
            this.dropdownContainer.style.display = 'flex';
            this.isDropdownVisible = true;
            
            // Add active class to category element
            this.categoryElement.classList.add('dropdown-active');
        }
    }

    hideDropdown() {
        if (this.isDropdownVisible) {
            this.dropdownContainer.style.display = 'none';
            this.isDropdownVisible = false;
            
            // Remove active class from category element
            this.categoryElement.classList.remove('dropdown-active');
        }
    }

    loadInitialData() {
        this.loadMainCategories();
        this.loadRecommendedBrands();
        
        // Load initial subcategories and products for the active category
        const activeCategory = window.CategoryDropdownUtils.getActiveCategory();
        if (activeCategory) {
            this.loadSubcategories(activeCategory);
        }
    }

    loadMainCategories() {
        const mainCategoriesContainer = this.dropdownContainer.querySelector('#main-categories');
        const categories = window.CategoryDropdownUtils.getMainCategories();
        
        mainCategoriesContainer.innerHTML = categories.map(category => `
            <li class="category-item ${category.isActive ? 'active' : ''}" data-category-id="${category.id}">
                <a href="${category.url}" class="category-link">
                    <div class="category-text">${category.name}</div>
                    ${category.hasSubcategories ? '<i class="ico ico-chevron-right"></i>' : ''}
                </a>
            </li>
        `).join('');

        // Add click event listeners for category hover/click
        mainCategoriesContainer.addEventListener('mouseover', (e) => {
            const categoryItem = e.target.closest('.category-item');
            if (categoryItem) {
                const categoryId = parseInt(categoryItem.dataset.categoryId);
                const category = window.CategoryDropdownUtils.findCategoryById(categoryId);
                if (category) {
                    this.loadSubcategories(category);
                    this.updateActiveCategory(categoryItem);
                }
            }
        });
    }

    loadSubcategories(category) {
        const subcategoriesContainer = this.dropdownContainer.querySelector('#subcategories');
        const categoryKey = category.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        const subcategories = window.CategoryDropdownUtils.getSubcategories(categoryKey);
        
        subcategoriesContainer.innerHTML = subcategories.map(subcategory => `
            <li class="category-item ${subcategory.isActive ? 'active' : ''}" data-subcategory-id="${subcategory.id}">
                <a href="${subcategory.url}" class="category-link">
                    <div class="category-text">${subcategory.name}</div>
                    ${subcategory.hasProducts ? '<i class="ico ico-chevron-right"></i>' : ''}
                </a>
            </li>
        `).join('');

        // Add event listeners for subcategory hover
        subcategoriesContainer.addEventListener('mouseover', (e) => {
            const subcategoryItem = e.target.closest('.category-item');
            if (subcategoryItem) {
                const subcategoryId = parseInt(subcategoryItem.dataset.subcategoryId);
                const subcategory = window.CategoryDropdownUtils.findCategoryById(subcategoryId);
                if (subcategory) {
                    this.loadProductCategories(subcategory);
                    this.updateActiveSubcategory(subcategoryItem);
                }
            }
        });

        // Load initial product categories for the first subcategory
        if (subcategories.length > 0) {
            this.loadProductCategories(subcategories[0]);
        }
    }

    loadProductCategories(subcategory) {
        const productCategoriesContainer = this.dropdownContainer.querySelector('#product-categories');
        const productSectionTitle = this.dropdownContainer.querySelector('#product-section-title');
        
        // Update section title
        productSectionTitle.textContent = subcategory.name;
        productSectionTitle.href = subcategory.url;
        
        // Map subcategory names to product category keys
        const subcategoryToProductKey = {
            "Cleansers & Scrubs": "cleansersAndScrubs",
            "Toners & Mists": "tonersAndMists", 
            "Serums": "serums"
        };
        
        // Get the product key based on subcategory name
        const productKey = subcategoryToProductKey[subcategory.name] || "cleansersAndScrubs";
        
        // Get product categories for this subcategory
        const productCategories = window.CategoryDropdownUtils.getProductCategories(productKey);
        
        productCategoriesContainer.innerHTML = productCategories.map(product => `
            <li class="product-item" data-product-id="${product.id}">
                <a href="${product.url}" class="product-link">
                    <div class="product-text">${product.name}</div>
                </a>
            </li>
        `).join('');
    }

    loadRecommendedBrands() {
        const brandsContainer = this.dropdownContainer.querySelector('#recommended-brands');
        const brands = window.CategoryDropdownUtils.getRecommendedBrands();
        
        brandsContainer.innerHTML = brands.map(brand => `
            <a href="${brand.url}" class="brand-link" data-brand-id="${brand.brandId}">
                <img src="${brand.imageUrl}" alt="${brand.name}" class="brand-image">
            </a>
        `).join('');
    }

    updateActiveCategory(categoryItem) {
        // Remove active class from all categories
        this.dropdownContainer.querySelectorAll('#main-categories .category-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to current category
        categoryItem.classList.add('active');
    }

    updateActiveSubcategory(subcategoryItem) {
        // Remove active class from all subcategories
        this.dropdownContainer.querySelectorAll('#subcategories .category-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to current subcategory
        subcategoryItem.classList.add('active');
    }
}
