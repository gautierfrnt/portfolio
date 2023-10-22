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

// function SendMail() {
//     var params = {
//         from_name : document.getElementById("fullName").value,
//         email_id : document.getElementById("email_id").value,
//         message : document.getElementById("message").value
//     }
//     emailjs.send(){

//     })
// }