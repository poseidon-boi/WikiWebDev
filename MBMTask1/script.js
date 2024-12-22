let a = 10;
console.log(a);

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: Complete");
        initApp();
    }
})

const initApp = () => {

    const boxes = document.querySelectorAll(".block");

    for (let index = 0; index < boxes.length; index++) {
        const box = boxes[index];
        box.addEventListener("mouseover", (event) => {
            console.log("Hovering");
            box.style.backgroundColor = "lightblue";
            event.target.textContent = "Hovering";
        });
        box.addEventListener("click", (event) => {
            console.log("Clicked");
            box.style.backgroundColor = "blueviolet";
            event.target.textContent = "Clicked!";
        });
        box.addEventListener("mouseout", (event) => {
            console.log("Exited");
            box.style.backgroundColor = "aliceblue";
            event.target.textContent = "Float Block";
        });
    }

    const footer = document.querySelector("footer");
    const anchor = footer.querySelector("a");

    let scamState = 0;

    anchor.addEventListener("mouseover", (event) => {
        if (scamState === 0) {
            console.log("Scammed");
            footer.style.textAlign = "right";
            event.target.textContent = "Can't touch me";
            scamState = 1;
        } else if (scamState === 1) {
            footer.style.textAlign = "center";
            event.target.textContent = "Nope";
            scamState = 2;
        } else if (scamState === 2) {
            footer.style.textAlign = "right";
            footer.style.backgroundColor = "lightblue";
            event.target.textContent = "Ok u win";
            scamState = 3;
        }
    });
    anchor.addEventListener("click", (event) => {
        console.log("Back to top");
        footer.style.textAlign = "left";
        footer.style.backgroundColor = null;
        event.target.textContent = "Back to top";
        scamState = 0;
    });
    // anchor.addEventListener("mouseout", (event) => {
    //     footer.style.textAlign = "left";
    //     event.target.textContent = "Back to top";
    // })
};