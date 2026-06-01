const message = `
Hari ini adalah hari spesialmu✨
1 juni podo koyok hari lahir e pancasila,
berarti kamu sama kayak pancasila,
sama-sama jadi pedoman hidup
awowkwokwqodkqkdk
(ketoke e aku gabakat gombal deh)

Happy Birthday Neva ❤️

Semoga panjang umur,
sehat selalu,
dan bahagia setiap hari.

Terima kasih karena telah menjadi
pribadi yang baik dan luar biasa.

Semoga semua impianmu tercapai,
rezekimu lancar,
dan setiap langkahmu dipenuhi
kebahagiaan. You can call me bos everytime

🎂❤️✨
`;

let i = 0;

function typeWriter() {

    if (i < message.length) {

        document.getElementById("text").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 40);
    }
}

typeWriter();

function playMusic() {
    document.getElementById("music").play();
}

const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

    slides[current].classList.remove("active");

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    slides[current].classList.add("active");

}, 4000);

setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = Math.random() * 30 + 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 300);

const nums = ["3", "2", "1", "🎉"];

let idx = 0;

function countdown() {

    if (idx < nums.length) {

        const div = document.createElement("div");

        div.className = "countdown";

        div.innerText = nums[idx];

        document.body.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 1000);

        idx++;

        setTimeout(countdown, 1000);
    }
}

countdown();


// ===============================
// AUTOPLAY SETELAH KLIK PERTAMA
// ===============================

document.addEventListener("click", () => {
    const music = document.getElementById("music");
    music.play();
}, { once: true });

// Memutar musik otomatis begitu layar disentuh atau diklik pertama kali
document.addEventListener('click', function() {
    const musik = document.getElementById('music');
    if (musik) {
        musik.play().catch(error => {
            console.log("Autoplay diblokir oleh browser, mencoba lagi...", error);
        });
    }
}, { once: true }); // { once: true } memastikan fungsi ini cuma berjalan 1 kali saat klik pertama
