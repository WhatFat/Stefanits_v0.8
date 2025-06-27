document.addEventListener('DOMContentLoaded', function() {
    let navbar = document.querySelector('.header .navbar');

    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        navbar.classList.remove('active');
    };

    var swiper = new Swiper('.home-slider', {
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

        document.getElementById("Logo").addEventListener("click", function() {
        window.location.href = "https://wwww.stefanitskft.hu";
    });

        document.getElementById("facebook-btn").addEventListener("click", function() {
        window.location.href = "https://www.facebook.com/stefanitskft";
    });

        document.getElementById("instagram-btn").addEventListener("click", function() {
        window.location.href = "https://www.instagram.com/stefanitskft";
    });
    
    const links = document.querySelectorAll('.header .navbar a');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            if (!this.classList.contains('active')) {
                event.preventDefault();
                links.forEach(function(link) {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                setTimeout(() => {
                    window.location.href = this.href;
                }, 0);
            }
        });
    });

    document.getElementById("home-btn").addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

function toggleContactDetails(employee) {
    var contactDetails = employee.querySelector('.contact-details');
    if (contactDetails.style.display === "none" || contactDetails.style.display === "") {
        contactDetails.style.display = "block";
    } else {
        contactDetails.style.display = "none";
    }
}

const projects = [
    {
        name: "Újhartyán",
        images: ["pics/ujhartyan1.webp","pics/ujhartyan2.webp","pics/ujhartyan3.webp","pics/ujhartyan4.webp","pics/ujhartyan5.webp","pics/ujhartyan6.webp"],
        description: "Projekt:<br>Hely: Újhartyán<br>Munkanem:<br>"
    },
    {
        name: "Mercedes-Akcionáló Csarnok",
        images: ["pics/mercedes1.webp","pics/mercedes2.webp","pics/mercedes3.webp","pics/mercedes4.webp"],
        description: "Projekt:<br>Hely: Kecskemét<br>Munkanem:<br>"
    },
    {
        name: "Paks Energy",
        images: ["pics/paks1.webp","pics/paks2.webp","pics/paks3.webp","pics/paks4.webp","pics/paks5.webp","pics/paks6.webp"],
        description: "Projekt:<br>Hely: Paks<br>Munkanem:<br>"
    },
    {
        name: "Alcsútdoboz",
        images: ["pics/alcsutdoboz1.webp", "pics/alcsutdoboz2.webp", "pics/alcsutdoboz3.webp"],
        description: "Projekt 4 a legújabb vállalkozásunk. Ezek a fő célkitűzései és jellemzői."
    },
    {
        name: "Zalaegerszeg",
        images: ["pics/zalaegerszeg1.webp", "pics/zalaegerszeg2.webp", "pics/zalaegerszeg3.webp"],
        description: "Projekt 5 a legújabb vállalkozásunk. Ezek a fő célkitűzései és jellemzői."
    },
    {
        name: "VGP Csarnok",
        images: ["pics/vgp1.webp","pics/vgp2.webp"],
        description: "Projekt: <br>Hely: Győr<br>Munkanem: Fit-out munkák- Belsőépítészeti generál kivitelezés<br>"
    }, 
    {
        name: "Richter",
        images: ["pics/richter1.webp","pics/richter2.webp","pics/richter3.webp","pics/richter4.webp","pics/richter5.webp"],
        description: "Projekt: <br>Hely: Budapest<br>Munkanem: Szárazépítési és Felületképzési munkák<br>"
    },  
    {
        name: "Átrium",
        images: ["pics/atrium1.webp","pics/atrium2.webp","pics/atrium3.webp"],
        description: "Projekt: <br>Hely: Budapest<br>Munkanem: Szárazépítési és Felületképzési munkák<br>"
    }, 
    {
        name: "Medicover",
        images: ["pics/medicover1.webp","pics/medicover2.webp","pics/medicover3.webp","pics/medicover4.webp"],
        description: "Hely: Budapest<br>Munkanem: Szárazépítési és Felületképzési munkák<br>"
    },
    {
        name: "Kekszgyár",
        images: ["pics/kekszgyar1.webp","pics/kekszgyar2.webp","pics/kekszgyar3.webp","pics/kekszgyar4.webp"],
        description: "Projekt: Győri Kekszgyár volt épületének felújítása keretében a Széchenyi István Egyetem Tudományos és Innovációs Park kiépítése, valamint új Művészeti kar oktatási tereinek kialakítása<br>Hely: Győr<br>Munkanem: Szárazépítési munkák, Külső szerelt falak komplett kivitelezése<br>"
    },
    {
        name: "Krisztina Pláza",
        images: ["pics/krisztina1.webp","pics/krisztina2.webp","pics/krisztina3.webp"],
        description: "Projekt: Krisztina Pláza Irodaszint kialakítás<br>Hely: Budapest<br>Munkanem: Szárazépítési és Felületképzési munkák<br>"
    }, 
    {
        name: "Intercity Hotel",
        images: ["pics/Intercity1.webp","pics/Intercity2.webp","pics/Intercity3.webp","pics/Intercity4.webp","pics/Intercity5.webp","pics/Intercity6.webp","pics/Intercity7.webp"],
        description: "Projekt: Intercity Hotel épület 1-7. emeleteinek szárazépítési kivitelezési munkái<br>Hely: Budapest<br>Munkanem: Szárazépítészeti kivitelezési munkák, beleértve gipszkarton válaszfalak, álmennyezetek és egyéb belsőépítészeti szerkezetek kialakítását.<br>"
    },    
    {
        name: "Tata Interspar",
        images: ["pics/interspar1.webp","pics/interspar2.webp","pics/interspar3.webp","pics/interspar4.webp"],
        description: "Projekt:<br>Hely: Tata<br>Munkanem: Szárazépítészeti kivitelezési munkák, beleértve gipszkarton válaszfalak, álmennyezetek és egyéb belsőépítészeti szerkezetek kialakítását.<br>"
    },  
    {
        name: "Sukoró KKS",
        images: ["pics/sukoro1.webp","pics/sukoro2.webp","pics/sukoro3.webp","pics/sukoro4.webp","pics/sukoro5.webp","pics/sukoro6.webp"],
        description: "Projekt: Kovács Katalin Nemzeti Kajak-Kenu Sportakadémia tervezése és kivitelezése<br>Hely: Sukoró<br>Munkanem: Szárazépítészeti kivitelezési munkák, beleértve gipszkarton válaszfalak, álmennyezetek és egyéb belsőépítészeti szerkezetek kialakítását.<br>"
    },
];

function openGallery(projectId) {
    const project = projects[projectId - 1];
    document.getElementById('galleryTitle').textContent = `${project.name} képgaléria`;
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    project.images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.alt = project.name;
        gallery.appendChild(imgElement);
    });
    document.getElementById('galleryModal').style.display = 'block';
}

function openDescription(projectId) {
    const project = projects[projectId - 1];
    document.getElementById('descriptionTitle').textContent = project.name;
    const description = document.getElementById('description');
    description.innerHTML = `
        <img src="${project.images[0]}" alt="${project.name}">
        <p>${project.description}</p>
    `;
    document.getElementById('descriptionModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('galleryModal').style.display = 'none';
    document.getElementById('descriptionModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('galleryModal') || 
        event.target == document.getElementById('descriptionModal')) {
        closeModal();
    }
};

document.getElementById('tovabbGomb').addEventListener('click', function(e) {
    e.preventDefault();
    
    const existingAdditionalText = document.querySelector('.content .additional-text');
    
    if (!existingAdditionalText) {
        const additionalText = document.createElement('p');
        additionalText.className = 'additional-text';
        additionalText.textContent = 'A gipszkarton előtétfalak utólagos hőszigetelést biztosítanak, míg a gipszkarton mennyezetekkel szabályozható a belmagasság, így csökkenthetők a fűtési és hűtési költségek. Tetőtér-beépítéssel új lakóterek hozhatók létre, szálas hőszigeteléssel és párazáró fóliával kiegészítve. Száraz vakolással esztétikus felületek készíthetők gyorsan és tisztán, akár festéshez vagy tapétázáshoz előkészítve. A kazettás álmennyezetek gyorsan szerelhetők, és könnyen hozzáférést biztosítanak a gépészeti és elektromos rendszerekhez, így irodákba, üzletekbe és otthonokba is ideálisak.';
        
        const lessButton = document.createElement('a');
        lessButton.href = '#';
        lessButton.className = 'btn';
        lessButton.id = 'kevesebbGomb';
        lessButton.textContent = '...Kevesebb';
        
        const contentDiv = this.closest('.content');
        contentDiv.appendChild(additionalText);
        contentDiv.appendChild(lessButton);
        
        this.style.display = 'none';
        
        lessButton.addEventListener('click', function(e) {
            e.preventDefault();
            additionalText.remove();
            lessButton.remove();
            document.getElementById('tovabbGomb').style.display = 'inline-block'; // Visszaállítjuk a "Több..." gomb láthatóságát
        });
    } else {
        existingAdditionalText.remove();
        
        const lessButton = document.querySelector('#kevesebbGomb');
        if (lessButton) {
            lessButton.remove();
        }
        
        document.getElementById('tovabbGomb').style.display = 'inline-block';
    }
});

      if (localStorage.getItem("cookieConsent") === "true") {
        // Itt mehet a Google Analytics script betöltése
        let gaScript = document.createElement("script");
        gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-4EWVZ9RDM3";
        gaScript.async = true;
        document.head.appendChild(gaScript);
    
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4EWVZ9RDM3');
      };

      function acceptCookies() {
        document.getElementById("cookie-banner").style.display = "none";
    
        // Csak ekkor töltjük be a Google Analytics kódot
        loadGoogleAnalytics();
      }
    
      function loadGoogleAnalytics() {
        // Google Analytics script betöltése
        const gaScript = document.createElement("script");
        gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-4EWVZ9RDM3"; 
        gaScript.async = true;
        document.head.appendChild(gaScript);
    
        gaScript.onload = function () {
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-4EWVZ9RDM3'); 
        };
      }
    
      window.onload = function() {
        // Minden betöltésnél mutatjuk a bannert
        document.getElementById("cookie-banner").style.display = "block";
      };


