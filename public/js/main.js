console.log('test');
let tl = gsap.timeline({defaults:{ease: "SlowMo.easeIn"}});
    tl.to(".fillsection",{opacity:'100%',duration:5, stagger:0});

    let tp = gsap.timeline({defaults:{ease: "SlowMo.easeIn"}});
    tp.to("#logo img",{opacity:'100%',duration:5, stagger:0});

    