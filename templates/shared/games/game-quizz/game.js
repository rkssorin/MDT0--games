import Alpine from '@alpinejs/csp';

Alpine.data("gameQuiz", () => ({
	root: null,
	h2: null,

	initGameQuiz() {
		this.root = this.$root;
		this.h2 = this.$el;
		const formAnswer = this.root.querySelector("#answers-form");
		const playedToday = this.root.querySelector("#playedToday");
		if (playedToday) {
			const days = playedToday.value.split("=");
			if (days.length > 1) {
				if (days[0] == days[1]) {
					formAnswer.submit();
					this.populateTrackingForm('Abgeschickt', 'submit-button', new Date().toISOString(), 'auto');
				}
			}
		}
		this.populateTrackingForm('game-init', 'page-load', new Date().toISOString(), 'auto');
		const isBSIEditMode = window.self !== window.top;
		const counterSection = this.root.querySelector(".counter_section");
		if (counterSection && !isBSIEditMode) {
			let styleString = "";
			const playerNumbers = this.root.querySelectorAll(".players_numbers");
			playerNumbers.forEach((num, index) => {
				let n = parseInt(num.innerHTML);
				styleString += "--myNum" + (playerNumbers.length - index) + ":" + n + ";";
			});
			counterSection.setAttribute("style", styleString);

			let currentDay = this.root.querySelector(".currentDate .currentDateChild").textContent;
			currentDay = parseInt(currentDay);
			if (!currentDay) {
				currentDay = new Date().getDate();
			}

			const cards = this.root.querySelectorAll(".flip-cards-christmas .element");
			if (!isBSIEditMode) {
				cards.forEach((card, index) => {
					if (index + 1 == currentDay) {
						card.classList.remove("previous");
					}
					if (index + 1 > currentDay) {
						card.classList.remove("previous");
						card.classList.add("next");
					}
				});
			}
		}

		if (formAnswer) {

			const timer = 15;
			const startTimer = this.root.querySelector(".start_button");
			const blurredArea = this.root.querySelector(".bluruiema");
			const questionArea = this.root.querySelector(".the_question h2");
			const radiosAnswer = this.root.querySelectorAll("#answers-form input[type='radio']");
			const timerLine = this.root.querySelector(".timer_section #progressbar span");
			const postUrl = formAnswer.action;
			const postData = async (url = "", data = {}) => {
				// Default options are marked with *
				const response = await fetch(url, {
					method: "POST", // *GET, POST, PUT, DELETE, etc.
					mode: "cors", // no-cors, *cors, same-origin
					cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
					credentials: "same-origin", // include, *same-origin, omit
					headers: {
						//"Content-Type": "text/plain",
						"Content-Type": "application/x-www-form-urlencoded",
					},
					redirect: "follow", // manual, *follow, error
					referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
					body: data, // body data type must match "Content-Type" header
				});
				return response.json(); // parses JSON response into native JavaScript objects
			}
			const removeListeners = () => {
				radiosAnswer.forEach((radio) => {
					radio.removeEventListener("change", handleAnswer, radio);
				});
			}

			const timeUp = async () => {
				removeListeners();
				this.root.querySelector(".game_section_container").classList.add("u-hide");
				this.root.querySelector("#time-out").classList.remove("u-hide");
				await postData(postUrl, "timeout=2");
				this.populateTrackingForm('timeout', 'AnswerTimeout', new Date().toISOString(), 'auto');
			}

			const handleAnswer = async (radio) => {
				clearTimeout(timeout);
				const response = await postData(postUrl, "timeout=0&answers=" + radio.target.value);

				removeListeners();
				//const responseJson = await response;
				let answer = response.response;
				this.root.querySelector(".game_section_container").classList.add("u-hide");
				switch (answer) {
					case "0":
						const card1 = this.root.querySelector("#success_1");
						card1.scrollIntoView(true);
						card1.classList.remove("u-hide");
						this.populateTrackingForm('Win', 'Answer' + answer, new Date().toISOString(), 'auto');
						break;
					case "1":
						const card2 = this.root.querySelector("#success_2");
						card2.scrollIntoView(true);
						card2.classList.remove("u-hide");
						this.populateTrackingForm('Win', 'Answer' + answer, new Date().toISOString(), 'auto');
						break;
					case "3":
						const card3 = this.root.querySelector("#didnt-win");
						card3.scrollIntoView(true);
						card3.classList.remove("u-hide");
						this.populateTrackingForm('Lose', 'Answer' + answer, new Date().toISOString(), 'auto');
						break;
				}
				this.populateTrackingForm('Response', 'Answer' + answer, new Date().toISOString(), 'click');
			}
			let timeout;
			startTimer.addEventListener(
				"click",
				() => {
					this.populateTrackingForm('Spiel gestartet', 'start-button', new Date().toISOString(), 'click');
					startTimer.classList.add("disabled");
					blurredArea.classList.remove("bluruiema");
					timerLine.id = "loading";
					timeout = setTimeout(() => {
						timeUp();
					}, timer * 1000);
					radiosAnswer.forEach((radio) => {
						radio.addEventListener("change", handleAnswer, radio);
					});
				},
				{ once: true }
			);

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

}));

