let a = 10;
console.log(a);

document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		console.log("readyState: Complete");
		initApp();
	}
});

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
	const titles = document.querySelectorAll("#tableOfContents a");
	const observers = new Array();

	window.addEventListener("scroll", (event) => {
		articles.forEach((article) => {
			const heading = article.querySelector("h2");
			const rect = article.getBoundingClientRect();
			if (
				(rect.top >= 0 && rect.top < window.innerHeight / 2) ||
				(rect.bottom <= window.innerHeight &&
					rect.bottom >= window.innerHeight / 2)
			) {
				titles.forEach((title) => {
					if (
						heading.textContent.toLowerCase() ===
						title.textContent.toLowerCase()
					) {
						title.style.borderLeftStyle = "solid";
						title.style.borderLeftColor = "green";
						title.style.borderLeftWidth = "5px";
						title.style.fontSize = "1.3rem";
					} else {
						title.style.borderLeftWidth = "0";
						title.style.fontSize = "1.1rem";
					}
				});
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
