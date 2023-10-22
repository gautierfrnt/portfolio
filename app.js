// Dark - Light Mode

const icon = document.getElementById('icon')
console.log(icon);

icon.onclick = function() {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src = "images/moon-black.png";
    } else {
        icon.src = "images/sun.png";
    }
}

// GSAP

gsap.to("#bonhomme", {
    scrollTrigger: {
        trigger: "#bonhomme",
        start: "20px 100%",
        scrub: true,
        // markers: true
    },
    duration: 1,
    rotation: 360,
    ease: "none",
});

gsap.to("#etoile", {
    scrollTrigger: {
        trigger: "#etoile",
        start: "20px 100%",
        scrub: true,
        // markers: true
    },
    duration: 1,
    rotation: -360,
    ease: "none",
});

// Email.js

const btn = document.getElementById('submit');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Envoie...';

   const serviceID = 'service_bpl25xm';
   const templateID = 'template_jvorhyq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Votre message est envoyé');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});