gsap.to('.imageContainer', {
    ease:Expo.easeInOut,
    width:"100%",
    stagger:2,
    repeat:-1,
})

gsap.to('.text h1', {
    ease:Expo.easeInOut,
    stagger:2,
    top:"0",
    repeat:-1,
})

gsap.to('.text h1', {
    delay:2,
    ease:Expo.easeInOut,
    stagger:2,
    top:"-100%",
    repeat:-1,
})