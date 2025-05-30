///////////////////////////////////

import Alpine from '@alpinejs/csp';

Alpine.data("gameElementCX", () => ({
	root: null,
	h2: null,

	initGame() {
		this.root = this.$root;
		this.h2 = this.$el;
		const _this = this;
		const wheel = this.root.querySelector("#fortune-wheel");

		this.populateTrackingForm('Visited', 'visited', new Date().toISOString(), 'auto');

		function easeInOutCubic(x) {
			return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
		}

		function easeBlur(blur, progress, duration) {
			let half = duration / 2;
			return blur - (blur * Math.abs(half - progress)) / half;
		}
		if (wheel) {
			const startBtn = this.root.querySelector("#start_btn");
			const wheelTitle = this.root.querySelector("#game_title1");
			const wheelTitle2 = this.root.querySelector("#game_title2");
			const wheelContainer = this.root.querySelector(".wheel_of_fortune_container");
			const indicatorWheel = this.root.querySelector("#indicator-wheel");
			const needle = this.root.querySelector("#indicator-wheel");
			const ribbons = this.root.querySelectorAll(".ribbon");
			const ribbonLinks = this.root.querySelectorAll(".ribbon a");
			const gwr = this.root.querySelector("#gwr").value;
			const GaP = this.root.querySelector("#GaP").value;
			let winner = 1;
			if (!isNaN(gwr)) {
				winner = parseInt(gwr);
				//or if 1 - random 1 si 4
				//or if 2 - random 2 si 3
			}
			//0 1 2 3 4
			/*
			0 - gherla - 2
			1 - cioco - 0
			2 - m1 - 2
			3 - m2 - 1
			4 - key - 1
			*/

			startBtn.addEventListener(
				"click",
				function changeContent() {
					const Http = new XMLHttpRequest();
					if (typeof GaP != "undefined") {
						_this.populateTrackingForm('Spiel gestartet', 'start-button', new Date().toISOString(), 'click');
						const url = GaP;
						//XHR
						Http.open("GET", url);
						Http.send();
						startBtn.classList.add("fadeOut");
						wheelTitle.classList.add("fadeOut");
						indicatorWheel.classList.add("fadeIn");
						animate(wheel, 5000, 360 * 10 - 72 * (winner - 1), 3, function () {
							wheel.querySelector(":nth-child(" + (winner + 1) + ")").classList.add("redish");
							setTimeout(() => {
								_this.root.querySelector("#ribbon_box_" + winner).classList.add("fadeIn");
								wheelTitle2.classList.add("fadeIn");
								wheelContainer.classList.add("fadeOut");
								indicatorWheel.classList.remove("fadeIn");
								indicatorWheel.classList.add("fadeOut");
								_this.populateTrackingForm('Played', 'landed ' + winner, new Date().toISOString(), 'auto');
							}, 2000);
						});
					}
				},
				{ once: true }
			);

			/* ribbons.forEach((a) =>
				a.addEventListener(
					'click',
					function closeRibbon() {
						a.classList.remove('fadeIn');
						a.classList.add('fadeOut');
					},
					{ once: true }
				)
			); */

			ribbonLinks.forEach((a) =>
				a.addEventListener("click", function (e) {
					//e.preventDefault();
					allWhite = this.root.querySelectorAll(".white_inside_box");
					allWhite.forEach((box) => {
						box.classList.add("fadeOut");
					});
					_this.populateTrackingForm('Weiter clicked', 'ribbon-link', new Date().toISOString(), 'click');
				})
			);

			let animationId = null;
			function animate(element, duration, stopAt, blur, callback) {
				window.cancelAnimationFrame(animationId);
				let start = null;
				function step(timestamp) {
					if (!start) {
						start = timestamp;
					}

					const progress = timestamp - start;
					const translation = stopAt * easeInOutCubic(progress / duration);
					const translation2 = (stopAt / 40) * easeInOutCubic(progress / duration);
					const translationBlur = easeBlur(blur, progress, duration);

					element.style.transform = "translateX(-50%) rotate(" + translation + "deg) ";
					element.style.filter = "blur(" + translationBlur + "px)";

					needle.style.transform = "translateX(-50%) rotate(-" + Math.abs(Math.sin(translation2)) * 20 + "deg) ";

					if (progress < duration) {
						animationId = window.requestAnimationFrame(step);
					} else {
						needle.style.transform = "translateX(-50%) rotate(0deg) ";
						element.style.filter = "blur(0px)";
						callback();
					}
				}
				animationId = window.requestAnimationFrame(step);
			}
		}
	},
	populateTrackingForm(eventName, eventElement, eventTime, eventType,) {
		const form = this.root.querySelector('.track-event-form');
		if (form) {
			form.querySelector("input[name='eventName']").value = eventName;
			form.querySelector("input[name='eventElement']").value = eventElement;
			form.querySelector("input[name='eventTime']").value = eventTime;
			form.querySelector("input[name='eventType']").value = eventType;
			this.postData(form.action, new URLSearchParams(new FormData(form)))
		}


	},
	async postData(url = "", data) {
		// Default options are marked with *
		const response = await fetch(url, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			credentials: "same-origin", // include, *same-origin, omit
			headers: {
				//"Content-Type": "application/json",
				"Content-Type": "application/x-www-form-urlencoded",
			},
			redirect: "follow", // manual, *follow, error
			referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: data, // body data type must match "Content-Type" header
		});
		return response.json(); // parses JSON response into native JavaScript objects
	}

}))






////////////////////////////////////////////
