console.log('test');
let tl = gsap.timeline({defaults:{ease: "SlowMo.easeIn"}});
    tl.to(".fillsection",{opacity:'100%',duration:4, stagger:2});

    let tp = gsap.timeline({defaults:{ease: "easeIn"}});
    tp.to("#logo img",{opacity:'100%',duration:2, stagger:0});

    