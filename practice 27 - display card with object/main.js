const PRODUCT = {
    title: 'کفش ورزشی زنانه ایر زوم نایک Nike Air Zoom',
    price: 14800000,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQD5v6c8znYbBS8mleh5E0Oy7RYjQjEfulFLuKYxX2J8BKMTw9wcctnjEnF7Bcai7jYdS0YjDwYpromgWD7znrKYNpqQvyEbQCICR3X5jrtYFJuwGX43lSU&usqp=CAE',
    rate: 4.5,
    badgeText: '10% OFF',
    hasBadge: true
}




// Get the elements in the HTML
const titleElement = document.querySelector('.card-title');
const priceElement = document.querySelector('.card .price');
const imageElement = document.querySelector('.card img.image');
const rateElement = document.querySelector('.card .rate');
const starsElement = document.querySelector('.card .stars');
const badgeElement = document.querySelector('.card .badge');



// Convert Rial price to Toman
const tomanPrice = convertToToman(PRODUCT.price);

// Format Toman price with thousands separators
const formattedPrice = priceSep(tomanPrice);




// Set the data from the PRODUCT object into the HTML elements
titleElement.textContent = PRODUCT.title;

imageElement.setAttribute('src', PRODUCT.imageUrl);

priceElement.textContent = formattedPrice + ' تومان'; 

// Star rating
rateElement.textContent = PRODUCT.rate;
starsElement.innerHTML = '&#9733;'.repeat(PRODUCT.rate) + '&#9734;'.repeat(Math.ceil(5 - PRODUCT.rate)); 


// ‌Badge
badgeElement.style.display = PRODUCT.hasBadge ? 'block' : 'none';

// Display badge if hasBadge is true
badgeElement.textContent = PRODUCT.badgeText;










// Price Functions


// Turn Rial into Toman
function convertToToman(price) {
    return price / 10;
}


// Return the Toman price with sepratores
function priceSep(price) {
    
    let result = '';  
  
    for (let i = String(price).length; i > 0; i -= 3) {
      
      let chunk = String(price).slice(Math.max(0, i - 3), i);
      
      result = chunk + (result ? ',' + result : '');
    }
  
    return result;
  }

