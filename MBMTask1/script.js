let a = 10;
console.log(a);

document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		console.log("readyState: Complete");
		document.getElementById("loading-screen").style.display = "none";
		initApp();
	}
});

/**
 * Counts up the given html element
 * @param {HTMLElement} counterElement The counting element
 */
function count(counterElement) {
	// console.log("Counting");
	let currentValue = parseInt(counterElement.innerText);
	const endValue = parseInt(counterElement.getAttribute("data-val"));
	if (currentValue == endValue) {
		return;
	}
	const divisions = 400;
	const increment = endValue / divisions;
	// for (; currentValue < endValue; currentValue += time) {
	// 	counterElement.innerText = Math.ceil(currentValue);
	// 	setTimeout(count, 1);
	// }
	const animate = () => {
		if (currentValue < endValue) {
			counterElement.innerText = currentValue;
			currentValue += Math.ceil(increment);
			setTimeout(animate, 1);
		} else {
			console.log("Counting complete");
			counterElement.innerText = endValue;
			return;
		}
	};
	animate();
	return;
}

const initApp = () => {
	const boxes = document.querySelectorAll(".block");

	for (let index = 0; index < boxes.length; index++) {
		const box = boxes[index];
		console.log(box);
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

	// const anchor = document.querySelector("footer a");
	// console.log(anchor);

	// let scamState = 0;

	// anchor.addEventListener("mouseover", (event) => {
	// 	if (scamState === 0) {
	// 		console.log("Scammed");
	// 		footer.style.textAlign = "right";
	// 		event.target.textContent = "Can't touch me";
	// 		scamState = 1;
	// 	} else if (scamState === 1) {
	// 		footer.style.textAlign = "center";
	// 		event.target.textContent = "Nope";
	// 		scamState = 2;
	// 	} else if (scamState === 2) {
	// 		footer.style.textAlign = "right";
	// 		footer.style.backgroundColor = "lightblue";
	// 		event.target.textContent = "Ok u win";
	// 		scamState = 3;
	// 	}
	// });
	// anchor.addEventListener("click", (event) => {
	// 	console.log("Back to top");
	// 	footer.style.textAlign = "left";
	// 	footer.style.backgroundColor = null;
	// 	event.target.textContent = "Back to top";
	// 	scamState = 0;
	// });

	const articles = document.querySelectorAll("article");
	const titles = document.querySelectorAll(".tableOfContents a");
	const observers = new Array();
	const counterElements = document.querySelectorAll(".counter");

	window.addEventListener("scroll", (event) => {
		let index = 0;
		const windowHeight = window.innerHeight;
		articles.forEach((article) => {
			const heading = article.querySelector("h2");
			const rect = article.getBoundingClientRect();
			if (
				(rect.top >= 0 && rect.top < windowHeight / 4) ||
				(rect.bottom <= windowHeight && rect.bottom >= windowHeight / 4)
			) {
				titles.forEach((title) => {
					if (
						heading.textContent.toLowerCase() ===
						title.textContent.toLowerCase()
					) {
						title.style.borderLeftStyle = "groove";
						title.style.borderLeftColor = "blueviolet";
						title.style.borderLeftWidth = "5px";
						// title.style.color = "darkmagenta";
						// title.style.fontSize = "1.3rem";
					} else {
						title.style.borderLeftWidth = "0";
						title.style.color = "black";
						// title.style.fontSize = "1.1rem";
					}
				});
			}
		});
		counterElements.forEach((counterElement) => {
			const rect = counterElement.getBoundingClientRect();
			if (
				(rect.top >= 0 && rect.top < windowHeight) ||
				(rect.bottom <= windowHeight && rect.bottom >= 0)
			) {
				const currentValue = parseInt(counterElement.innerText);
				const endValue = parseInt(counterElement.getAttribute("data-val"));
				if (currentValue < endValue) {
					count(counterElement);
				}
			}
		});
	});

	// for (let i = 0; i < articles.length; i++) {
	// 	const article = articles[i];
	// const heading = article.querySelector("h2");
	// console.log(heading.textContent);
	// console.log(titles[i].textContent);
	// console.log(heading.textContent === titles[i].textContent);
	// article.addEventListener("", (event) => {
	// 	console.log("Scrolled");
	// for (let j = 0; j < titles.length; j++) {
	// 	const title = titles[j];
	// 	console.log(title);
	// 	if (heading.textContent === title.textContent) {
	// 		title.style.classList.toggle("scrolledTo");
	// 	}
	// 	}
	// });
	// const observer = new IntersectionObserver((entries, observer) => {
	// 	entries.forEach((entry) => {
	// 		if (entry.intersectionRatio > 0) {
	// 			console.log("Triggered");
	// 			console.log(observer);
	// 			console.log(entry);
	// 			const heading = entry.target.querySelector("h2");
	// 			for (let j = titles.length - 1; j >= 0; j--) {
	// 				const title = titles[j];
	// 				console.log(title);
	// if (heading.textContent === title.textContent) {
	// 	title.style.borderLeftStyle = "solid";
	// 	title.style.borderLeftColor = "green";
	// 	title.style.borderLeftWidth = "5px";
	// 	title.style.fontSize = "1.5rem";
	// } else {
	// 	title.style.borderLeftWidth = "0";
	// 	title.style.fontSize = "1.3rem";
	// 				}
	// 			}
	// 		}
	// 	});
	// });
	// observer.observe(article);
	// observers.push(observer);
	// }

	// anchor.addEventListener("mouseout", (event) => {
	//     footer.style.textAlign = "left";
	//     event.target.textContent = "Back to top";
	// })
};
