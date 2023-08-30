// Getting Doms
const library = document.getElementById('library');
const favButton = document.querySelector('library__cards__content__buttons--fav');


// Model 
const BOOKS = [
    {
        id: 1,
        title: "خواجه تاجدار",
        author: "ژان گور",
        published_date: 2007,
        language: "persian",
        genre: "تاریخ",
        imgSrc: "1.jpg"
    },
    {
        id: 2,
        title: "ضیافت",
        author: "افلاطون",
        published_date: 385,
        language: "greek",
        genre: "فلسفه",
        imgSrc: "2.jpg"
    },
    {
        id: 3,
        title: "منطق الطیر",
        author: "عطار",
        published_date: 1177,
        language: "persian",
        genre: "شعر",
        imgSrc: "3.jpg"
    },
    {
        id: 4,
        title: "مثنوی معنوی",
        author: "مولوی",
        published_date: 1258,
        language: "persian",
        genre: "شعر",
        imgSrc: "4.jpg"
    },
    {
        id: 5,
        title: "دیوان حافظ",
        author: "حافظ",
        published_date: 1200,
        language: "persian",
        genre: "شعر",
        imgSrc: "5.jpg"
    },
    {
        id: 6,
        title: "رومیو و جولیت",
        author: "ویلیام شکسپیر",
        published_date: 1595,
        language: "english",
        genre: "عاشقانه",
        imgSrc: "6.jpg"
    },
    {
        id: 8,
        title: "ویس و رامین",
        author: "فخرالدین اسعد گرگانی",
        published_date: 1054,
        language: "persian",
        genre: "عاشقانه",
        imgSrc: "7.jpg"
    },
    {
        id: 9,
        title: "گلستان",
        author: "سعدی",
        published_date: 1258,
        language: "persian",
        genre: "شعر",
        imgSrc: "8.jpg"
    },
    {
        id: 9,
        title: "بوستان",
        author: "سعدی",
        published_date: 1257,
        language: "persian",
        genre: "شعر",
        imgSrc: "9.jpg"
    },
    {
        id: 10,
        title: "گلشن راز",
        author: "شیخ محمود شبستری",
        published_date: 1311,
        language: "persian",
        genre: "شعر",
        imgSrc: "10.jpg"
    },
    {
        id: 11,
        title: "لیلی و مجنون",
        author: "نظامی",
        published_date: 1188,
        language: "persian",
        genre: "عاشقانه",
        imgSrc: "11.jpg"
    },
    {
        id: 12,
        title: "شاهنامه",
        author: "فردوسی",
        published_date: 1010,
        language: "persian",
        genre: "شعر",
        imgSrc: "12.jpg"
    },
    {
        id: 13,
        title: "ایلیاد",
        author: "هومر",
        published_date: 762,
        language: "greek",
        genre: "شعر",
        imgSrc: "13.jpg"
    },
    {
        id: 14,
        title: "اودیسه",
        author: "هومر",
        published_date: 725,
        language: "greek",
        genre: "شعر",
        imgSrc: "14.jpg"
    },
    {
        id: 15,
        title: "هملت",
        author: "ویلیام شکسپیر",
        published_date: 1609,
        language: "greek",
        genre: "درام",
        imgSrc: "15.jpg"
    },
    {
        id: 16,
        title: "دن کیشوت",
        author: "میگل دسروانتس",
        published_date: 1605,
        language: "spanish",
        genre: "درام",
        imgSrc: "16.jpg"
    }
]

// Adding cards to library
function createCard(book) {
    const bookCard =

        `   <div class="library__cards--bookmoc">

                    <div class="library__cards--bookmoc--image">
                        <img class="library__cards--bookmoc--image--frame" src="./assets/images/${book.imgSrc}" alt="">
                    </div>
                    

                </div>
                <div class="library__cards__content">
                    <h3 class="library__cards__content--title">${book.title}</h3>
                    <p class="library__cards__content--author">${book.author}</p>
                   
                    <div class="library__cards__content__info">
                        <p class="library__cards__content__info--published-date card-info">${book.published_date}</p>
                        <p class="library__cards__content__info--genre card-info">${book.genre}</p>
                        <p class="library__cards__content__info--language card-info">${book.language}</p>
                    </div>
                   
                    <div class="library__cards__content__buttons">
                        <button class="library__cards__content__buttons--add">افزودن به کتابخانه</button>
                        <div class="library__cards__content__buttons--fav ">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                </div>
            </div>
        `

    return bookCard;
}


// Render functions
function renderCards() {
   

    BOOKS.map(book => {
        const card = createCard(book);

        const Container = document.createElement('div');
        Container.classList.add('library__cards')
        Container.innerHTML = card;

        library.appendChild(Container)
    });
}




// Add event listeners
document.addEventListener("DOMContentLoaded", renderCards);











































