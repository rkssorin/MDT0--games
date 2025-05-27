import Alpine from '@alpinejs/csp';
import { Draggable, Sortable, Droppable, Swappable } from "@shopify/draggable";
Alpine.data("gameElementAnimals", () => ({
	root: null,
	h2: null,

	initGame() {
		this.root = this.$root;
		this.h2 = this.$el;

		const startBtn = this.root.querySelector("#start_btn");
		const startA = startBtn.querySelector("a");
		this.fetchURL = function (url) {
			const response = fetch(url);
		};
		startBtn.addEventListener(
			"click",
			(e) => {
				startBtn.classList.add("fadeOut");
				this.fetchURL(startA.href);
				this.populateTrackingForm('game-start', 'start-button', new Date().toISOString(), 'click');
				
			},
			{ once: true }
		);
		startBtn.addEventListener("transitionend", () => {
			startBtn.remove();
		});
		window.detectmob = function () {
			if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
				return true;
			} else {
				return false;
			}
		};
		const is_mobile = detectmob();
		document.querySelectorAll(".button.button_close a").forEach((button) => {
			button.addEventListener("click", (e) => {
				e.preventDefault();
				let parent = button.closest(".form_overlay");
				if (parent != document.querySelector(".form_overlay.main_form")) {
					document.querySelector(".form_overlay.thank_you").classList.add("open_game");
					document.body.style.overflow = "hidden";
				}
				parent.classList.remove("open_game");
			});
		});
		document.querySelector(".toform_btn .button_open_form").addEventListener("click", (e) => {
			e.preventDefault();
			document.querySelector(".main_form").classList.add("open_game");
		});

		const containers = document.querySelectorAll(".animal_images .animal_comun");
		const dropzones = document.querySelectorAll(".dropp_images_dropzones .animal_drop");

		const submitButton = document.querySelector(".toform_btn .button_open_form");
		submitButton.disabled = true;
		document.querySelector(".toform_btn a").addEventListener("click", (e) => {
			this.fetchURL(e.target.href);
			e.preventDefault();
			return false;
		});

		const allAreas = [...containers, ...dropzones];

		containers.forEach((container, index) => {

			container.querySelector('.animalText').innerHTML = container.querySelector('img').alt;
			container.dataset.dropzone = index + 1;
			container.dataset.orginalLocation = index + 1;
		});
		let allowedDropzones = [];
		dropzones.forEach((dropzone, index) => {
			allowedDropzones.push(index + 1);
			dropzone.dataset.originalLocation = 0;
		});
		dropzones.forEach((dropzone) => {
			dropzone.dataset.dropzone = JSON.stringify(allowedDropzones);
			dropzone.isOriginalDropzone = true;
		});
		let finalData = [];
		if (!is_mobile) {
			window.getFinalData = function () {
				let justDropzones = [];
				droppable.containers.forEach((container) => {
					if (container.isOriginalDropzone) {
						justDropzones.push(container);
					}
				});
				justDropzones.forEach((dropzone, index) => {
					finalData[index] = dropzone.dataset.originalLocation;
				});
				submitButton.disabled = finalData.includes("0");
				return finalData;
			};

			let droppable = new Droppable(allAreas, {
				draggable: ".Block--isDraggable",
				dropzone: ".BlockWrapper--isDropzone",
				mirror: {
					constrainDimensions: true,
				},
				delay: {
					mouse: 0,
					drag: 0,
					touch: 20,
				},
			});
			window.dropy = droppable;

			let droppableOrigin;

			// --- Draggable events --- //
			droppable.on("drag:start", (evt) => {
				droppableOrigin = evt.originalSource.parentNode.dataset;
			});

			droppable.on("droppable:dropped", (evt) => {
				if (!evt.dropzone.isOriginalDropzone) {
					if (evt.dropzone.dataset.dropzone !== droppableOrigin.originalLocation) {
						evt.cancel();
					}
					console.log("placeContainer", grabbedContainer, dropzone);
					getFinalData();
					return;
				}

				let targetDropzone = JSON.parse(evt.dropzone.dataset.dropzone);

				if (!targetDropzone.includes(parseInt(droppableOrigin.dropzone))) {
					evt.cancel();
					return;
				}
			});
			droppable.on("droppable:stop", (evt) => {
				if (!evt.dropzone.isOriginalDropzone) {
					if (evt.dropzone.dataset.dropzone !== droppableOrigin.originalLocation) {
						evt.cancel();
					}
					droppableOrigin.originalLocation = 0;
					getFinalData();
					return;
				}

				let targetDropzone = JSON.parse(evt.dropzone.dataset.dropzone);

				if (!targetDropzone.includes(parseInt(droppableOrigin.dropzone))) {
					evt.cancel();
					return;
				}
				evt.dropzone.dataset.originalLocation = droppableOrigin.dropzone;

				getFinalData();
			});
			droppable.on("droppable:returned", (evt) => {
				evt.dropzone.dataset.originalLocation = 0;
				getFinalData();
			});

			document.querySelector(".button.zuruk_btn").addEventListener("click", (e) => {
				e.preventDefault();
				finalData = [];
				let dragElements = droppable.getDraggableElements();
				dragElements.forEach((element) => {
					containers.forEach((container) => {
						if (element.dataset.zone == container.dataset.dropzone) {
							dropzones.forEach((dropzone) => {
								dropzone.classList.remove("draggable-dropzone--occupied");
								dropzone.dataset.originalLocation = 0;
							});
							container.classList.add("draggable-dropzone--occupied");

							container.append(element);
						}
					});
				});
				droppable.destroy();
				droppable = new Droppable(allAreas, {
					draggable: ".Block--isDraggable",
					dropzone: ".BlockWrapper--isDropzone",
					mirror: {
						constrainDimensions: true,
					},
					delay: {
						mouse: 0,
						drag: 0,
						touch: 20,
					},
				});
				window.dropy = droppable;
				// --- Draggable events --- //
				droppable.on("drag:start", (evt) => {
					droppableOrigin = evt.originalSource.parentNode.dataset;
				});

				droppable.on("droppable:dropped", (evt) => {
					if (!evt.dropzone.isOriginalDropzone) {
						if (evt.dropzone.dataset.dropzone !== droppableOrigin.originalLocation) {
							evt.cancel();
						}

						getFinalData();
						return;
					}

					let targetDropzone = JSON.parse(evt.dropzone.dataset.dropzone);

					if (!targetDropzone.includes(parseInt(droppableOrigin.dropzone))) {
						evt.cancel();
						return;
					}
				});
				droppable.on("droppable:stop", (evt) => {
					if (!evt.dropzone.isOriginalDropzone) {
						if (evt.dropzone.dataset.dropzone !== droppableOrigin.originalLocation) {
							evt.cancel();
						}
						droppableOrigin.originalLocation = 0;
						getFinalData();
						return;
					}

					let targetDropzone = JSON.parse(evt.dropzone.dataset.dropzone);

					if (!targetDropzone.includes(parseInt(droppableOrigin.dropzone))) {
						evt.cancel();
						return;
					}
					evt.dropzone.dataset.originalLocation = droppableOrigin.dropzone;

					getFinalData();
				});
				droppable.on("droppable:returned", (evt) => {
					evt.dropzone.dataset.originalLocation = 0;
					getFinalData();
				});
			});
		} else {
			document.querySelector(".button.zuruk_btn").addEventListener("click", (e) => {
				e.preventDefault();
				finalData = [];
				grabbedContainerWindow = null;
				previewNodes.forEach((preview) => {
					preview.remove();
				});
				dropzones.forEach((dropzone) => {
					let blockToMove = dropzone.querySelector(".Block--isDraggable");
					if (dropzone.filled) {
						moveBackToOriginalLocation(blockToMove);
						dropzone.filled = false;
						dropzone.dataset.dropped = 0;
						dropzone.classList.remove("draggable-dropzone--occupied");
					} else {
						dropzone.classList.remove("draggable-dropzone--occupied", "draggable-container-over");
					}
				});
			});
			window.highlightSelf = function (this_container) {
				containers.forEach(function (container) {
					container.classList.remove("highlight");
				});
				this_container.classList.add("highlight");
			};
			let previewNodes = [];
			window.highlightValid = function (this_container) {
				let preview = this_container.querySelector(".Block--isDraggable");

				if (grabbedContainerWindow == null) {
					return;
				}
				dropzones.forEach(function (dropzone) {
					if (!dropzone.filled) {
						dropzone.classList.add("draggable-dropzone--occupied", "draggable-container-over");
						let previewNode = preview.cloneNode(true);
						previewNode.classList.add("draggable-source--is-dragging", "draggable-over");
						previewNodes.push(previewNode);
						dropzone.appendChild(previewNode);
					}
				});
			};
			window.placeContainer = function (grabbedContainer, dropzone) {
				
				dropzones.forEach(function (dropzone) {
					if (!dropzone.filled) {
						dropzone.classList.remove("draggable-dropzone--occupied", "draggable-container-over");
					}
				});
				previewNodes.forEach((preview) => {
					preview.remove();
				});
				let toMove = grabbedContainer.querySelector(".Block--isDraggable");
				toMove.originalLocation = grabbedContainer;
				dropzone.appendChild(toMove);
				dropzone.classList.add("draggable-dropzone--occupied");
				grabbedContainer.classList.remove("draggable-dropzone--occupied");
				dropzone.filled = true;
				dropzone.dataset.dropped = grabbedContainer.dataset.dropzone;
				grabbedContainer.placed = true;
				grabbedContainer.classList.remove("highlight");
				grabbedContainerWindow = null;
				highlightValid(dropzone);
				return toMove;
			};
			window.moveBackToOriginalLocation = function (blockToMove) {
				blockToMove.originalLocation.appendChild(blockToMove);
				blockToMove.originalLocation.classList.remove("highlight");
				blockToMove.originalLocation.classList.add("draggable-dropzone--occupied");
				blockToMove.originalLocation.placed = false;
			};
			window.getFinalData = function () {
				finalData = [];
				dropzones.forEach((dropzone) => {
					finalData.push(dropzone.dataset.dropped);
				});
				return finalData;
			};
			let grabbedContainerWindow = null;
			dropzones.forEach(function (dropzone) {
				dropzone.filled = false;
				dropzone.addEventListener("click", (evt) => {
					if (grabbedContainerWindow != null && !dropzone.filled) {
						placeContainer(grabbedContainerWindow, dropzone);
					} else {
						dropzones.forEach((dropzone) => {
							if (!dropzone.filled) {
								dropzone.classList.remove("draggable-dropzone--occupied", "draggable-container-over");
							}
						});

						previewNodes.forEach((preview) => {
							preview.remove();
						});
						let blockToMove = dropzone.querySelector(".Block--isDraggable");
						moveBackToOriginalLocation(blockToMove);
						dropzone.filled = false;
						dropzone.dataset.dropped = 0;
						dropzone.classList.remove("draggable-dropzone--occupied");
						grabbedContainerWindow = null;
					}
					finalData = window.getFinalData();
					submitButton.disabled = finalData.includes("0") || finalData.includes(undefined);
				});
			});
			containers.forEach(function (container) {
				container.grabbed = null;
				container.validZones = [];
				container.placed = false;
				dropzones.forEach((dropzone) => {
					if (dropzone.dataset.dropzone.includes(container.dataset.dropzone) && !dropzone.filled) {
						container.validZones.push(dropzone);
					}
				});

				container.addEventListener("click", (evt) => {
					finalData = window.getFinalData();
					submitButton.disabled = finalData.includes("0") || finalData.includes(undefined);
					if (container.placed) {
						return;
					}
					container.grabbed = true;
					grabbedContainerWindow = container;
					highlightSelf(container);
					previewNodes.forEach((preview) => {
						preview.remove();
					});
					highlightValid(container);
				});
			});
		}
	},
	resetTrackingForm() {
		this.root.querySelector('.track-event-form').reset();
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
	},
}));
