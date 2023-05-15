let products = [
    {
        name: "Ace Hotel New Orleans",
        description: "Ace Hotel New Orleans is a boutique hotel known for its stylish accommodations and vibrant atmosphere.They offer a range of amenities, including a rooftop bar, a restaurant, and event spaces.Visit their website to learn more and make a reservation.",
        image: "AceHotel.jpg",
        link: {
            href: "https://acehotel.com/new-orleans/?gclid=CjwKCAjw3ueiBhBmEiwA4BhspPy5IQyuN8xT-tHqnJ3bMsJRbCr7uYkHxPYbvg0zAzr_pcGLGeJBBBoCL-QQAvD_BwE"
        }




    },
    {
        name: "Walk-On's Bistreaux and Bar",
        description: "Walk-On's Bistreaux and Bar is a popular restaurant and bar located in New Orleans. They offer a diverse menu featuring Louisiana-inspired dishes and a wide selection of drinks. Visit their website to explore their menu and learn more about their services.",
        image: "wolksO2.jpg",
        link: {
            href: "https://walk-ons.com"
        }


    },
    {
        name: "Sheraton New Orleans Hotel",
        description: "Sheraton New Orleans Hotel is a luxury hotel located in the heart of New Orleans. They provide comfortable accommodations, excellent amenities, and exceptional service. Visit their website to book a room and experience their world-class hospitality.",
        image: "sheraton2.png",
        link: {
            href: "https://www.booking.com/hotel/us/new-orleans.he.html?aid=357009&label=gog235jc-1DCAso7AE4xwNIM1gDaGqIAQGYAQ64AQfIAQ3YAQPoAQGIAgGoAgO4AujN6aIGwAIB0gIkZDVjOTMyZjEtOTUxMi00MmY4LTgxZTctNjA2NmI0NDU0MmY02AIE4AIB&sid=b7573d070222fa243b5700c6e9c8615e&dist=0&keep_landing=1&sb_price_type=total&type=total&"
        }


    },
    {
        name: "The Ritz-Carlton, New Orleans",
        description: "The Ritz-Carlton, New Orleans is a renowned luxury hotel offering elegant accommodations and exceptional service. With a range of amenities and a prime location, they provide an unforgettable experience. Visit their website to explore their offerings and make a reservation.",
        image: "TheRitz.jpg",
        link: {
            href: "https://maisondelaluz.com/?gclid=CjwKCAjw3ueiBhBmEiwA4BhspC-OTUEegzvRZxFBuBAbYiP-pXxB9FeJutNVGsc5LoHAGnDn1-5JQBoCDiAQAvD_BwE"
        }


    },
    {
        name: "Louisiana Children's Museum",
        description: "The Louisiana Children's Museum is a fun and interactive destination for children of all ages. They offer hands-on exhibits, educational programs, and engaging activities. Visit their website to discover the exciting experiences they have to offer.",
        image: "LMC.jpg",
        link: {
            href: "https://lcm.org"
        }


    },
    {
        name: "Premium Parking - P402",
        description: "Premium Parking - P402 offers convenient and secure parking services in New Orleans. Located in a prime area, their parking facility provides easy access to various attractions, hotels, and restaurants in the city.",
        image: "ParkingP.png",
        link: {
            href: "https://www.premiumparking.com/P402"
        }



    },
    {
        name: "Museum of Death",
        description: "The Museum of Death is a unique and thought-provoking museum that explores various aspects of death and its cultural significance. From historical artifacts to forensic displays, the museum offers a one-of-a-kind experience. Visit their website to delve into the intriguing world of mortality.",
        image: "MOD.png",
        link: {
            href: "http://www.museumofdeath.net"
        }


    },
    {
        name: "Haunted Museum",
        description: "The Haunted Museum is a spine-chilling attraction that showcases haunted artifacts and paranormal exhibits. Explore the world of ghosts, spirits, and supernatural phenomena. Visit their website to embark on a thrilling journey into the unknown.",
        image: "huntedM.jpg",
        link: {
            href: "https://thehauntedmuseum.com"
        }


    }
]
// לכתוב פונקציה שתפקידה להציג את המוצרים בקארדים של בוטסטרפ
// שלושה קארדים בשורה
// תמונה של המוצר, שם המוצר, קטגוריה וכפתור לפרטים מלאים
/* function showCards() {
    for (let i = 0; 0 < products.length; i++)
        document.getElementById("row").innerHTML +=

} */

function showCards() {
    for (let i = 0; i < products.length; i++) {
        document.getElementById("sponsor").innerHTML += `
        <div class="col">
        <div class="card h-100">
  <img src=${products[i].image} class="card-img-top" alt=${products[i].name}>
  <div class="card-body">
    <h5 class="card-title">${products[i].name}</h5>
   
    <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-warning" onclick="setModal(${i})">See More!</a>
  </div>
</div>
        </div>
        `;
    }
}

showCards();
// לכתוב פונקציה שמזינה את פרטי המוצר למודאל על סמך אינדקס
function setModal(index) {
    document.getElementById("title").innerText = products[index].name;
    document.getElementById("modalBody").innerHTML = `
  <p><b>Description:</b> ${products[index].description}</p>
  <h4 class="text-end">Site:  <a href="${products[index].link.href}" class="btn btn-warning" target="_blank">Visit their website</a></h4>`;
}