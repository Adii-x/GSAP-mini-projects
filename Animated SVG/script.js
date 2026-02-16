var path = "M 10 100 Q 300 100 580 100";
var finalPath = "M 10 100 Q 300 100 580 100"

var string = document.querySelector("#string");

string.addEventListener("mousemove", function(e){
    path = `M 10 100 Q ${e.x} ${e.y} 580 100`
    gsap.to("svg path", {
        attr: {
            d: path,
        },
        duration: 0.3,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave", function(){
    path = finalPath;
    gsap.to("svg path", {
        attr:{
            d: path
        },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)"
    })
})