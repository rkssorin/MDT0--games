import Alpine from '@alpinejs/csp';
Alpine.data("formElementGame", () => ({
	form: null,
	root: null,

	initFormGame() {
		this.form = this.$el;
		this.root = this.$root;
		console.log("init");
		if (this.root.classList.contains("bsi-form-label-floating")) {
			const floatingElements = this.form.getElementsByClassName("bsi-label-floating-element");
			floatingElements.forEach((floatingElement) => {
				this._initFloatingLabels(floatingElement);
			});
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
	},
	resetFormGame(e) {
		this.populateTrackingForm('form-reset', 'reset-button', new Date().toISOString(), 'click');
	},
	submitFormGame(e) {
		console.log("subnmit");
		e.preventDefault();
		if (!this.form.checkValidity()) {
			e.preventDefault();
			e.stopPropagation();
			this._validateFormFieldInput();
			this._validateTelInput();
			this._validateRadioInput();
		}
		this.form.classList.add("was-validated");

		//post data
		let finalData = getFinalData();
		for (let rIndex = 0; rIndex < 4; rIndex++) {
			let response = this.form.querySelector("input[name='r" + (rIndex + 1) + "']");
			if (response) {
				response.value = finalData[rIndex];
			}
		}
		/* this.form.querySelectorAll(".answer_vals").forEach((answer, index) => {
			console.log("xxx", finalData[index]);
			answer.value = finalData[index];
		}); */
		const postUrl = this.form.action;
		const formData = new FormData(this.form);
		const data = new URLSearchParams(formData);
		this.postData(postUrl, data).then((data) => {
			let display = ".lose";
			if (data) {
				if (data.response == "1") {
					display = ".win";
				}
			}
			document.querySelector(display).classList.add("open_game");
			document.querySelector(".main_form").classList.remove("open_game");
			document.querySelectorAll(".thank_you  *").forEach((n) => {
				if (n.innerHTML.includes("{Mister Muster}")) {
					let fullName = document.getElementById("name").value + " " + document.getElementById("vorname").value;
					n.innerHTML = n.innerHTML.replace("{Mister Muster}", fullName);
				}
			});
		});
		this.populateTrackingForm('form-submit', 'submit-button', new Date().toISOString(), 'click');
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
	_initFloatingLabels(floatingElement) {
		let input = floatingElement.querySelector(".form-control");
		let label = floatingElement.querySelector(".form-label");
		if (!input) {
			input = floatingElement.querySelector(".form-select");
		} else {
			if (input.placeholder.length === 0) {
				if (input.type === "date") {
					label.style.opacity = 1;
					label.style.transform = "initial";
				} else {
					input.placeholder = "Placeholder";
				}
			}
		}

		if (!(input.type === "range")) {
			floatingElement.classList.add("form-floating");
			floatingElement.insertBefore(input, label);
		}
	},

	_validateFormFieldInput() {
		let formFieldInputs = this.form.getElementsByClassName("bsi-form-field-element");
		for (const formFieldInput of formFieldInputs) {
			let input = formFieldInput.getElementsByClassName("bsi-form-field-input")[0];
			if (!input.checkValidity() && !input.value) {
				formFieldInput.getElementsByClassName("invalid-feedback")[0].style.display = "block";
			} else {
				formFieldInput.getElementsByClassName("invalid-feedback")[0].style.display = "none";
			}
		}
	},

	_validateTelInput() {
		let telInputs = this.form.getElementsByClassName("bsi-form-tel-input");
		for (const telInput of telInputs) {
			let input = telInput.getElementsByClassName("bsi-form-tel-input-element")[0];
			if (!input.checkValidity() && !input.value) {
				telInput.getElementsByClassName("bsi-tel-input-error-required")[0].style.display = "block";
			} else {
				telInput.getElementsByClassName("bsi-tel-input-error-required")[0].style.display = "none";
			}
		}
	},

	_validateRadioInput() {
		let radioElements = this.form.getElementsByClassName("bsi-form-radio-element");
		let radioValid = false;
		for (const radioElement of radioElements) {
			let radioInputs = radioElement.getElementsByClassName("form-check-input");
			for (const radioInput of radioInputs) {
				if (radioInput.checked || !radioInput.hasAttribute("required")) {
					radioValid = true;
					break;
				}
			}
			if (!radioValid) {
				radioElement.getElementsByClassName("invalid-feedback")[0].style.display = "block";
			} else {
				radioElement.getElementsByClassName("invalid-feedback")[0].style.display = "none";
			}
		}
	},
}));
