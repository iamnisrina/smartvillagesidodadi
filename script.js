   //  RESPONSIVE ANIMASI
   const menuBtn = document.querySelector(".menu-btn");
   const navLinks = document.querySelector(".nav-links");
   const menuIcon = menuBtn.querySelector("i");

   menuBtn.addEventListener("click", () => {
       navLinks.classList.toggle("active");
       menuIcon.classList.toggle("fa-bars");
       menuIcon.classList.toggle("fa-times");
   });

 //  SEJARAH Kampung 
 const observer = new IntersectionObserver(
   (entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         entry.target.classList.add("show");
       }
     });
   },
   {
     threshold: 0.2,
   }
 );

    document
   .querySelectorAll(".title-section h2, .image-container, .text-content")
   .forEach((el) => {
     observer.observe(el);
   });

   // STRUKTUR Kampung
   const textobserver = new IntersectionObserver(
       (entries) => {
           entries.forEach((entry) => {
               if (entry.isIntersecting) {
                   entry.target.classList.add('show');
               }
           });
       },
       {
           threshold: 0.1,
       }
   );

   document.querySelectorAll('.content-text, .grid-item').forEach((el) => {
       textobserver.observe(el);
   });


   // ANIMASI TEXT
   function typeWriterEffect(element, text, speed, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            setTimeout(callback, 1000); 
        }
    }
    type();
}

function startTypingLoop() {
    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");
    const titleText = "Selamat Datang Di Kampung Sidodadi . . ";
    const subtitleText = "Mewujudkan kampung sidodadi yang aman melalui pelayanan yang terbaik";

    function eraseText(element, callback) {
        let text = element.innerHTML;
        let i = text.length;
        function erase() {
            if (i > 0) {
                element.innerHTML = text.substring(0, i - 1);
                i--;
                setTimeout(erase, 50);
            } else if (callback) {
                setTimeout(callback, 500); 
            }
        }
        erase();
    }

    function loop() {
        title.innerHTML = "";
        subtitle.innerHTML = "";
        typeWriterEffect(title, titleText, 100, function () {
            typeWriterEffect(subtitle, subtitleText, 50, function () {
                setTimeout(function () {
                    eraseText(subtitle, function () {
                        eraseText(title, loop);
                    });
                }, 2000);
            });
        });
    }

    loop();
}

startTypingLoop();


// ZOOM IMAGE
function openZoom() {
    document.getElementById("zoomOverlay").classList.add("show");
}

function closeZoom() {
    document.getElementById("zoomOverlay").classList.remove("show");
}