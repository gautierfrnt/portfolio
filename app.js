gsap.registerPlugin(ScrollTrigger);

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

/* ---------------------------------- GSAP ---------------------------------- */

gsap.to("#bonhomme", {
    scrollTrigger: {
        trigger: "#bonhomme",
        start: "30px 100%",
        scrub: true,
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
    },
    duration: 1,
    rotation: -360,
    ease: "none",
});

gsap.to(".contain", {
    scrollTrigger: {
        trigger: ".contain",
        start: "20px 100%",
        end: "30px 0%",
        scrub: 0.5, // Valeur entre 0 et 1, 0 signifie pas de scrub
        // markers: true
    },
    x: 1000,
});

gsap.to(".contain2", {
    scrollTrigger: {
        trigger: ".contain2",
        start: "20px 100%",
        end: "30px 0%",
        scrub: 0.5, // Valeur entre 0 et 1, 0 signifie pas de scrub
        // markers: true
    },
    x: -1000,
});


gsap.from(".gsap", {
    scrollTrigger: {
        trigger: ".gsap",
        start: "30px 80%",
        end: '20px 50%',
        // markers: true
    },
    duration: 1,
    opacity: 0,
    y: 50,
    stagger : {
        each: 0.2,
        from: 'left'
    }
});

gsap.from(".gsap2", {
    scrollTrigger: {
        trigger: ".gsap2",
        start: "30px 80%",
        end: '20px 50%',
        // markers: true
    },
    duration: 1,
    opacity: 0,
    y: 50,
    stagger : {
        each: 0.2,
        from: 'left'
    }
});

gsap.from(".gsap3", {
    scrollTrigger: {
        trigger: ".gsap3",
        start: "30px 80%",
        end: '20px 50%',
    },
    duration: 1,
    opacity: 0,
    y: 50,
    stagger : {
        each: 0.2,
        from: 'left'
    }
});

gsap.from(".gsap4", {
    scrollTrigger: {
        trigger: ".gsap4",
        start: "30px 80%",
        end: '20px 50%',
    },
    duration: 1,
    opacity: 0,
    y: 50,
});

gsap.from(".img", {
    scrollTrigger: {
        trigger: ".img",
        start: "30px 90%",
        end: '20px 50%',
    },
    duration: .5,
    y: 50,
    ease: "power1.out"
});

gsap.from(".span", {
    duration: 2,
    opacity: 0,
    stagger : {
        each: 0.05,
        from : "center", //L'animation part du centre
    },
});

/* -------------------------------- Barba.js -------------------------------- */

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".transition", {
        duration: 0.8,
        scaleY: 1,
        transformOrigin: "bottom",
        ease: "power4.inOut",
    });

    tl.to(".transition", {
        duration: 1,
        scaleY: 0,
        transformOrigin: "top",
        ease: "power4.inOut",
        delay: 0.2,
    });
}

function contentAnimation() {
    let tl = gsap.timeline();

    tl.to('h1', {
        top: 0,
        duration: 1,
        ease: "power3.inOut",
        delay: 0.75,
    })

    
}


barba.init({
    sync: true,
    transitions: [
        {
            async leave(data) {
                const done = this.async();
                
                pageTransition();
                await delay(1000);
                done();
            },

            async enter(data) {
                contentAnimation();
            },

            async once(data) {
                contentAnimation();
            }
        }
    ]
})






/* -------------------------------- Email.js -------------------------------- */

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

emailjs.init("TL560xq4WlMFu91I-");


/* ---------------------------------- Lenis --------------------------------- */

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)