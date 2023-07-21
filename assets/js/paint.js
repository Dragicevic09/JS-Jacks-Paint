function configureListeners() {
    let images = document.querySelectorAll('img'); // select all img elements

    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('mouseover', addOpacity);
        images[i].addEventListener('mouseout', removeOpacity);
    }
}

function addOpacity(event) {
    // add appropriate CSS class to reduce image opacity
    event.target.classList.add('reduced-opacity');
    getProductInfo(event.target.id);
}

function removeOpacity(event) {
    // remove appropriate CSS class to revert image opacity
    event.target.classList.remove('reduced-opacity');

    let element = document.getElementById('color-price');
    element.textContent = '';

    let color = document.getElementById('color-name');
    color.textContent = '';
}

function getProductInfo(paintColor) {
    let price;
    let colorName;

    switch (paintColor) {
        case 'pn1':
            // set variables for price and color name and invoke a function to update the price
            price = 19.99;
            colorName = 'Vibrant Red';
            updatePrice(colorName, price);
            break;
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price
            price = 15.99;
            colorName = 'Sky Blue';
            updatePrice(colorName, price);
            break;
        // Add cases for other paint colors
        default:
            // Handle the case when the paint color is not found
    }
}

function updatePrice(colorName, price) {
    let colorPrice = document.getElementById('color-price'); // select element with corresponding id
    // display price
    colorPrice.textContent = 'Price: $' + price.toFixed(2);

    let color = document.getElementById('color-name'); // select element with corresponding id
    // display color name
    color.textContent = 'Color: ' + colorName;
}

// Call the configureListeners function when the DOM is loaded
document.addEventListener('DOMContentLoaded', configureListeners);
