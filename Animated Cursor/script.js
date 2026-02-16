let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imgDiv = document.querySelector("#image")

main.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.5,
        ease: "back.out(2)"
    })
})

imgDiv.addEventListener("mouseenter", () => {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 2,
        backgroundColor: "#ffffff70",
    })
})

imgDiv.addEventListener("mouseleave", () => {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white"
    })
})