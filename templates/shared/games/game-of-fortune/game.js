import Alpine from "@alpinejs/csp";


Alpine.data("gameElementFortune", () => ({
	root: null,
	h2: null,

	initGame() {
		
		this.root = this.$root;
		this.h2 = this.$el;
		this.populateTrackingForm('Visited', 'page-load', new Date().toISOString(), 'auto');
		const _this = this;
		/*--------------=== Slot Column definition ===--------------*/

		var NAME = 'SlotColumn';
		class SlotColumn {
			constructor() {
				this.col = document.createElement('div');
				this.col.className = 'col';
				this.init = this.init.bind(this);
				this.run = this.run.bind(this);
				this.beforeRun = this.beforeRun.bind(this);
				this.getResult = this.getResult.bind(this);
				this.getDOM = this.getDOM.bind(this);
				this.arr = [];
				this.colHeight = this.rowHeight = 0;
				this.loop = 2;
			}
			init() {
				this.col.empty();
				this.arr = arguments[0];
				var isShuffle = arguments[1];
				if (isShuffle) shuffle(this.arr);
				for (var i = 0; i < this.arr.length * this.loop; i++) {
					var row = document.createElement('div');
					row.className = 'row_machine ' + this.arr[i % this.arr.length];
					this.col.appendChild(row);
				}
				this.top = 0;
			}
			beforeRun() {
				this.halfHeight = this.col.offsetHeight / this.loop;
				this.colHeight = this.col.scrollHeight / 2;
				this.rowHeight = this.colHeight / this.arr.length;
				this.nextResult = arguments[0];
				var next = this.arr.indexOf(this.nextResult);
				if (next == -1) next = random(0, this.arr.length - 1) | 0;
				var s = this.top +
					(random(4, 8) | 0) * this.colHeight +
					(((next + 0.5) * this.rowHeight) | 0) -
					this.halfHeight;
				var n = (random(1, 4) | 0) * fps;
				this.speed = (2 * s) / (n + 1);
				this.acceleration = this.speed / n;
			}
			getResult() {
				var result = Math.ceil(((this.halfHeight - this.top) % this.colHeight) / this.rowHeight) - 1;
				return this.arr[result];
			}
			run() {
				if (this.speed <= 0) {
					//audioBing.play();
					return true; //completed
				}

				this.top = (this.top - this.speed) % this.colHeight;

				this.speed -= this.acceleration;
				this.top %= this.colHeight;
				this.col.style.transform = 'translateY(' + this.top + 'px)';
				return false; //not completed
			}
			getDOM() {
				return this.col;
			}
		}
		window[NAME] = SlotColumn;

		/*--------------=== Slot machine definition ===--------------*/

		var NAME = 'SlotMachine',
			defaultSettings = {
				width: '595',
				height: '343',
				colNum: 3,
				rowNum: 5,
				winRate: 50,
				autoPlay: false,
				autoSize: true,
				autoPlayTime: 10,
				layout: 'compact',
				handleShow: true,
				handleWidth: 35,
				handleHeight: -220,
				machineBorder: 0,
				machineColor: 'rgba(120,60,30,1)',
				names: ['seven', 'bar', 'apple', 'bell', 'cherry'],
				customImage: true
			},
			completed = true,
			isShuffle = false,
			supportTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints,
			firstTime = true,
			nextLoop = null;
		class SlotMachine {
			constructor(argument) {
				this.init = this.init.bind(this);
				this.run = this.run.bind(this);
				this.addListener = this.addListener.bind(this);
				this.beforeRun = this.beforeRun.bind(this);
				this.afterRun = this.afterRun.bind(this);
				this.showWin = this.showWin.bind(this);
				this.rotateHandle = this.rotateHandle.bind(this);
				this.colArr = [];
				this.options = {};
			}
			beforeRun() {
				if (completed) {
					this.showWin(false);
					this.turnOffGlow();
					completed = false;
					var result = null;
					var presetResult = random(0, 10);
					//result = this.options.names[random(this.options.rowNum*100/this.options.winRate)|0];//set winrate
					result = this.options.names[presetResult | 0]; //set winrate

					for (var i = 0; i < this.options.colNum; i++) {
						this.colArr[i].beforeRun(result);
					}
					this.rotateHandle();
					this.run();
				}
				if (this.options.autoPlay)
					nextLoop = setTimeout(
						function () {
							this.beforeRun();
						}.bind(this),
						this.options.autoPlayTime * 1000
					);
			}
			turnOffGlow() {
				//console.log("revert to default , remove glows");
				this.spinningGlow(false);
				for (let bar of glowBar) {
					bar.classList.remove('flux', 'flux_dark', 'flux_fast');
					bar.classList.add('dimmer');
				}
				roundedBox.classList.remove('flux_dark', 'flux_fast');
				starsContainer.classList.remove('flux_dark', 'flux_fast');
				shape.classList.add('dimmer');
				machineTitle.classList.remove('glow');

				for (let star of starMain) {
					star.classList.add('dimmer');
				}
			}
			turnOnGlow() {
				console.log('you win');
				_this.populateTrackingForm('Win', 'win-spin', new Date().toISOString(), 'auto');
				for (let bar of glowBar) {
					bar.classList.add('flux_fast');
				}
				roundedBox.classList.add('flux_fast');
				starsContainer.classList.add('flux_fast');
				machineTitle.classList.add('glow');
				this.showWinMessage(true);
			}
			glowLose() {
				console.log('you lost');
				_this.populateTrackingForm('Lose', 'lose-spin', new Date().toISOString(), 'auto');
				this.spinningGlow(false);
				for (let bar of glowBar) {
					bar.classList.add('flux_dark');
				}
				roundedBox.classList.add('flux_dark');
				starsContainer.classList.add('flux_dark');
				this.showLoseMessage(true);
				audioLose.play();
			}
			spinningGlow(remove) {
				console.log('machine running ' + remove);
				/* this.showWinMessage(false);
		  this.showLoseMessage(false); */
				for (let bar of glowBar) {
					if (remove) {
						bar.classList.add('flux');
						bar.classList.remove('dimmer');
					} else {
						bar.classList.remove('flux');
						bar.classList.add('dimmer');
					}
				}
				if (remove) {
					for (let star of starMain) {
						star.classList.remove('dimmer');
					}
					shape.classList.remove('dimmer');
					redSpin.classList.add('running_active');
				} else {
					for (let star of starMain) {
						star.classList.add('dimmer');
					}
					shape.classList.add('dimmer');
					redSpin.classList.remove('running_active');
				}
			}
			afterRun() {
				completed = true;
				_this.populateTrackingForm('Spiel gestartet', 'spin-handle', new Date().toISOString(), 'click');
				var results = [], win = true;
				this.colArrDone = [];
				for (var i = 0; i < this.options.colNum; i++) {
					this.colArrDone.push(0);
					results.push(this.colArr[i].getResult());
					if (i > 0 && results[i] != results[i - 1]) {
						win = false;
						break;
					}
				}
				if (win) {
					this.showWin(true);
					setTimeout(
						function () {
							this.showWin(false);
						}.bind(this),
						this.options.autoPlayTime * 1000
					);
				} else {
					this.glowLose();
				}
				setTimeout(() => {
					if (completed) {
						this.turnOffGlow();
					}
				}, 5000);
			}
			rotateHandle() {
				var handle = _this.root.querySelector('.handle');
				this.spinningGlow(true);
				audioPull.play();
				if (handle) {
					handle.addClass('active');
					setTimeout(function () {
						handle.removeClass('active');
					}, 1000);
				}
			}
			getImages() {
				var presetImages = _this.root.querySelectorAll('.slot_col_images');
				return presetImages;
			}
			run(time) {
				if (time - lastFrameTime < FRAME_MIN_TIME) {
					//skip the frame if the call is too early
					raf(this.run);
					console.log('did it');
					return; // return as there is nothing to do
				}
				lastFrameTime = time; // remember the time of the rendered frame
				var done = true;

				for (var i = 0; i < this.options.colNum; i++) {
					var doneCol = this.colArr[i].run();
					if (doneCol) {
						if (this.colArrDone[i] == 0) {
							audio.play();
							this.colArrDone[i] = 1;
						}
					}

					done &= doneCol;
				}
				if (!done) raf(this.run);
				else this.afterRun();
			}
			showWinMessage(show) {
				if (show) {
					_this.root.querySelector('#ribbon_box_2').classList.add('visible');
				} else {
					_this.root.querySelector('#ribbon_box_2').classList.remove('visible');
				}
			}
			showLoseMessage(show) {
				if (show) {
					_this.root.querySelector('#ribbon_box_1').classList.add('visible');
				} else {
					_this.root.querySelector('#ribbon_box_1').classList.remove('visible');
				}
			}
			showWin(show) {
				setTimeout(() => {
					var winner = _this.root.querySelector('.winner');
					if (glowBar) {
						if (show) {
							this.turnOnGlow();
						}
					}

					if (winner) {
						//winner.className = (show ? "winner active" : "winner");
					}
					if (show) {
						audioWin.play();
					}
				}, 300);
			}
			init() {
				//reset all
				completed = true;
				clearTimeout(nextLoop);
				//get settings
				var BannerFlow = arguments[0], settingStyle = '', machine = _this.root.querySelector('.machine'), container = _this.root.querySelector('.container_machine');
				container.innerHTML = '';
				machine.style.opacity = 0;
				for (var key in defaultSettings) {
					this.options[key] = defaultSettings[key];
				}
				if (BannerFlow !== undefined) {
					var settings = BannerFlow.settings;
					this.options.winRate = settings.winRate ? settings.winRate : defaultSettings.winRate;
					this.options.autoPlay = settings.autoPlay;
					this.options.colNum = settings.numberColumn ? settings.numberColumn : defaultSettings.colNum;
					this.options.layout = settings.layout ? settings.layout : defaultSettings.layout;
					this.options.machineColor = settings.machineColor
						? settings.machineColor
						: defaultSettings.machineColor;
					this.options.machineBorder =
						settings.machineBorder >= 0 ? settings.machineBorder : defaultSettings.machineBorder;
					this.options.height = settings.height ? settings.height : defaultSettings.height;
					this.options.width = settings.width ? settings.width : defaultSettings.width;
					this.options.autoSize = settings.autoSize;
					if (this.options.autoSize) {
						this.options.height = window.innerHeight;
						this.options.width = window.innerWidth;
					}
					this.options.handleShow = settings.handleShow;
					this.options.handleWidth = this.options.handleShow ? defaultSettings.handleWidth : 0;
					this.options.autoPlayTime = settings.autoPlayTime
						? settings.autoPlayTime
						: defaultSettings.autoPlayTime;
					this.options.customImage = settings.customImage;
				}
				//apply settings
				if (this.options.customImage) {
					var urls = this.getImages();
					this.options.names = [];
					for (var i = 0; i < urls.length; i++) {
						var name = 'image-' + i;
						urls[i].src;
						this.options.names.push(name);
						settingStyle += getStyle('.' + name + ':after', {
							'background-image': "url('" + urls[i].src + "')"
						});
					}
				}
				/* settingStyle += getStyle(".machine",{
			"margin-top"          : (window.innerHeight - this.options.height)/2 +"px",
			"margin-left"         : (window.innerWidth - this.options.width)/2 +"px"
		  }); */
				settingStyle += getStyle('.container_machine', {
					height: this.options.height + 'px',
					width: this.options.width - this.options.handleWidth + 'px',
					'border-width': this.options.machineBorder + 'px',
					'border-color': this.options.machineColor + ' ' + getLighter(this.options.machineColor)
				});
				var winnerSize = 1.2 * Math.max(this.options.height, this.options.width);
				// settingStyle += getStyle(".winner:before,.winner:after",{
				//   "height"              : winnerSize+"px",
				//   "width"               : winnerSize+"px",
				//   "top"                 : (this.options.height-winnerSize)/2 + "px",
				//   "left"                : (this.options.width-winnerSize)/2 + this.options.handleWidth + "px"
				// });
				settingStyle += getStyle('.winner:before,.winner:after', {
					height: '100%',
					width: '100%',
					top: '0px',
					left: '0px'
				});
				settingStyle += getStyle('.handle', {
					'margin-top': this.options.height / 2 - this.options.handleHeight + 'px'
				});
				const currentHtml = document.querySelector('html');
				if (!currentHtml.classList.contains('bsi-ce-edit-mode')) {
					_this.root.querySelector('#setting').innerHTML = settingStyle;
				}
				//remove old cols
				if (this.colArr && this.colArr.length > 0)
					for (var i = 0; i < this.colArr.length; i++) {
						container.removeChild(this.colArr[i].getDOM());
					}
				this.colArr = [];
				this.colArrDone = [];
				// add new cols
				for (var i = 0; i < this.options.colNum; i++) {
					var col = new SlotColumn();
					col.init(this.options.names.slice(0, this.options.rowNum), isShuffle);
					this.colArr.push(col);
					this.colArrDone.push(0);
					_this.root.querySelector('.container_machine').appendChild(col.getDOM());
				}
				machine.style.opacity = '1';
			}
			addListener() {
				var BannerFlow = arguments[0], timer, that = this, container = _this.root.querySelector('.container_machine');
				if (typeof BannerFlow != 'undefined') {
					// BannerFlow event
					BannerFlow.addEventListener(BannerFlow.RESIZE, function () {
						//clearTimeout(timer);
						//timer = setTimeout(function(){that.init(BannerFlow);that.beforeRun()},500);
					});
					BannerFlow.addEventListener(
						BannerFlow.CLICK,
						function () {
							that.beforeRun();
						},
						{ once: true }
					);
				} else {
					// Window event
					window.addEventListener('resize', function () {
						//clearTimeout(timer);
						//timer = setTimeout(function(){that.init(BannerFlow);that.beforeRun()},500)
					});
					if (supportTouch) {
						window.addEventListener('touchstart', function () {
							that.beforeRun();
						});
					} else {
						window.addEventListener(
							'click',
							function () {
								that.beforeRun();
							},
							{ once: true }
						);
					}
				}
				var slotTrigger = _this.root.querySelector('#slot-trigger');
				if (slotTrigger) {
					slotTrigger.addEventListener('click', function (e) {
						this.addClass('slot-triggerDown');
					});
				}
			}
		}

		window[NAME] = SlotMachine;

		//https://test.bmw.bsi.cloud/public/c/s9iJxUcvR8WbuO6AEVNjKgpJDnqGhJS1SG8haCE3zZ4gIIjxTwwqR5SkQOlxGEQkFw?a=bHVja3kgd2hlZWw
		const FRAMES_PER_SECOND = 30; // Valid values are 60,30,20,15,10...
		// set the mim time to render the next frame
		const FRAME_MIN_TIME = (1000 / 60) * (60 / FRAMES_PER_SECOND) - (1000 / 60) * 0.5;
		var lastFrameTime = 0; // the last frame time

		var fps = 60;
		const audio = _this.root.querySelector('#audioDing');
		const audioWin = _this.root.querySelector('#audioWin');
		const audioPull = _this.root.querySelector('#audioPull');
		const audioLose = _this.root.querySelector('#audioLose');
		const glowBar = [..._this.root.querySelectorAll('.bottom_glow_bar')];
		const redSpin = _this.root.querySelector('.roundedbox svg ellipse');
		const roundedBox = _this.root.querySelector('.roundedbox');
		const starsContainer = _this.root.querySelector('.stars_container');
		const shape = _this.root.querySelector('svg #shape');
		const starMain = [..._this.root.querySelectorAll('.star')];
		const machineTitle = _this.root.querySelector('.machinetitle > h1');

		window.raf = (function () {
			return (
				requestAnimationFrame ||
				webkitRequestAnimationFrame ||
				mozRequestAnimationFrame ||
				function (c) {
					setTimeout(c, 1000 / fps);
				}
			);
		})();

		/*--------------=== Utils definition ===--------------*/
		//random in range
		var random = function () {
			var isNumeric = function (n) {
				return !isNaN(parseFloat(n)) && isFinite(n);
			},
				val = Math.random(),
				arg = arguments;
			return isNumeric(arg[0]) ? (isNumeric(arg[1]) ? arg[0] + val * (arg[1] - arg[0]) : val * arg[0]) : val;
		};
		//shuffle an array
		var shuffle = function (arr) {
			var j, tmp;
			for (var i = 0; i < arr.length; i++) {
				j = random(arr.length) | 0;
				tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		};
		//get style from object style
		var getStyle = function (selector, styleObj) {
			var isAttribute = false;
			var newStyle = selector + '{';
			for (var attr in styleObj) {
				if (styleObj[attr]) {
					isAttribute = true;
					newStyle += attr + ' : ' + styleObj[attr] + ';';
				}
			}
			newStyle += '}';
			return isAttribute ? newStyle : '';
		};
		// get lighter color from rgba colors
		var getLighter = function (rgba) {
			var o = /[^,]+(?=\))/g.exec(rgba)[0] * 0.75;
			return rgba.replace(/[^,]+(?=\))/g, o);
		};
		//remove html from text
		if (!String.prototype.strip) {
			String.prototype.strip = function () {
				return this.replace(/(<[^>]+>)/gi, ' ').trim();
			};
		}
		//remove all child node
		if (!Node.prototype.empty) {
			Node.prototype.empty = function () {
				while (this.firstChild) {
					this.removeChild(this.firstChild);
				}
			};
		}
		if (!HTMLElement.prototype.hasClass) {
			Element.prototype.hasClass = function (c) {
				return (' ' + this.className + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + c + ' ') > -1;
			};
		}
		if (!HTMLElement.prototype.addClass) {
			HTMLElement.prototype.addClass = function (c) {
				if (!this.hasClass(c)) this.className += ' ' + c;
				return this;
			};
		}
		if (!HTMLElement.prototype.removeClass) {
			HTMLElement.prototype.removeClass = function (c) {
				if (this.hasClass(c)) this.className = (' ' + this.className + ' ').replace(' ' + c + ' ', ' ').trim();
				return this;
			};
		}
		/*--------------=== Main function ===--------------*/
		var timer,
			widget = null;
		if (typeof BannerFlow != 'undefined') {
			BannerFlow.addEventListener(BannerFlow.SETTINGS_CHANGED, function () {
				clearTimeout(timer);
				timer = setTimeout(function () {
					if (widget == null) {
						widget = new SlotMachine();
						widget.addListener(BannerFlow);
					}
					widget.init(BannerFlow);
					widget.beforeRun();
				}, 500);
			});
		} else {
			window.addEventListener('load', function (e) {
				if (widget == null) {
					widget = new SlotMachine();
					widget.addListener();
				}
				widget.init();
				//widget.beforeRun();
			});
		}
	},
	populateTrackingForm(eventName, eventElement, eventTime, eventType) {
		const form = this.root.querySelector('.track-event-form');
		if (form) {
			form.querySelector("input[name='eventName']").value = eventName;
			form.querySelector("input[name='eventElement']").value = eventElement;
			form.querySelector("input[name='eventTime']").value = eventTime;
			form.querySelector("input[name='eventType']").value = eventType;
			this.postData(form.action, new URLSearchParams(new FormData(form)))
		}


	}
}));
//////////////////////////////

