gsap.registerPlugin(ScrollTrigger);

// animating the info-status
const animate = (config) => {
    gsap.to(config.class, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: config.trigger,
            end: config.end,
            start: config.start,
            // toggleActions: 'play reverse complete reset'
            toggleActions: 'play reverse restart reset'
        },
    });
}

// animating the background
const animateBg = (config) => {
    gsap.to(config.class, {
        color: config.color,
        backgroundColor: config.backgroundColor,
        scrollTrigger: {
            trigger: config.trigger,
            end: config.end,
            start: config.start,
            toggleActions: 'restart pause restart pause'
            // toggleActions: 'reset restart restart reset'
        },
    });
}

//animating the svg path
const animateSvg = (config) => {
    gsap.to(config.class, {
        strokeDasharray: `${config.strokeLength}, 1000`,
        fill: config.fillColor,
        scrollTrigger: {
            trigger: config.trigger,
            end: config.end,
            start: config.start,
            toggleActions: config.toggleActions
        },
    });
}

const animateAll = (config) => {
    animateBg({
        class: '.slide',
        trigger: config.trigger,
        start: config.start,
        end: config.end,
        color: config.color,
        backgroundColor: config.backgroundColor
    });

    config.classes.map(ele => animate({
        class: ele,
        trigger: config.trigger,
        start: config.start,
        end: config.end
    }))

    animateSvg({
        class: '.transrgwht',
        strokeLength: config.strokeLength,
        trigger: config.trigger,
        start: config.start,
        end: config.end,
        toggleActions: 'restart pause restart pause'
    })

    animateSvg({
        class: config.svgDot,
        trigger: config.trigger,
        start: config.start,
        end: config.end,
        fillColor: 'blue',
        toggleActions: 'play none none reset'
    })
}


animateAll({ classes: ['.s1', '.ad-1', '.cta-1', '.img-1', '.img-2', '.logo-1', '.dot-1'], svgDot: '.dotsfill1', trigger: '.slide-3', start: 'top 105%', end: 'top 50%', color: '#6640a3', backgroundColor: '#dedede', strokeLength: 0 });
animateAll({ classes: ['.s2', '.ad-2', '.cta-2', '.img-3', '.img-4', '.dot-2'], svgDot: '.dotsfill2',trigger: '.slide-3', start: 'top 50%', end: 'top 0%', color: '#0303c2', backgroundColor: '#00008b', strokeLength: (140 * 1) });
animateAll({ classes: ['.s3', '.ad-3', '.cta-3', '.img-5', '.img-6', '.img-7', '.img-8', '.img-9', '.dot-3'], svgDot: '.dotsfill3',trigger: '.slide-4', start: 'top 100%', end: 'top 50%', color: '#1a1a3b', backgroundColor: '#0c0c1d', strokeLength: (140 * 2) });
animateAll({ classes: ['.s4', '.ad-4', '.cta-4', '.img-10', '.dot-4'], svgDot: '.dotsfill4',trigger: '.slide-4', start: 'top 50%', end: 'top 0%', color: '#0762f5', backgroundColor: '#00008b', strokeLength: (140 * 3) });
animateAll({ classes: ['.s5', '.ad-5', '.cta-5', '.img-11', '.img-12', '.logo-5', '.dot-5'], svgDot: '.dotsfill5',trigger: '.slide-5', start: 'top 100%', end: 'top 50%', color: '#006400', backgroundColor: '#4ca14c', strokeLength: (140 * 4) });
animateAll({ classes: ['.s6', '.ad-6', '.cta-6', '.img-16', '.img-17', '.img-18', '.img-19', '.dot-6'], svgDot: '.dotsfill6',trigger: '.slide-5', start: 'top 50%', end: 'top 0%', color: '#2f5ca5', backgroundColor: '#1a1a3b', strokeLength: (140 * 5) });
animateAll({ classes: ['.s7', '.ad-7', '.cta-7', '.img-14', '.img-15', '.dot-7'], svgDot: '.dotsfill7',trigger: '.slide-6', start: 'top 100%', end: 'top -10%', color: '#1a1a41', backgroundColor: '#222255', strokeLength: (140 * 6) });