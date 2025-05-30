import Alpine from "@alpinejs/csp";

Alpine.data("formFieldBet", () => ({
  rootEl: null,
  inputEl: null,

  initFormFieldBetInput() {
    this.rootEl = this.$root;
    this.divEl = this.$el;
    const self = this.divEl;
    this.scoreModifiers = this.divEl.querySelectorAll(".score-modifier");
    this.scoreModifiers.forEach((element) => {
      element.addEventListener("click", (event) => {
        //let el = event.target;
        let op = parseInt(element.dataset.op);
        let quantiInvitati = parseInt(self.querySelector("input").value) || 0;
        let quantiInvitatiMin = parseInt(self.querySelector("input").getAttribute("min")) || 0;
        let quantiInvitatiMax = parseInt(self.querySelector("input").getAttribute("max")) || 99;
        self.querySelector("input").value = Math.min(quantiInvitatiMax, Math.max(quantiInvitatiMin, quantiInvitati + op));
        self.querySelectorAll(".score-modifier").forEach((e) => {
          e.classList.remove("disabled");
        });
        if (self.querySelector("input").value == quantiInvitatiMin) {
          element.classList.add("disabled");
        }
      });
      this.divEl.querySelector(".bsi-form-field-input").addEventListener("change", (e) => {
        this.populateTrackingForm('Bet score modified ' + e.target.id, 'score-modifier', new Date().toISOString(), 'click');
      }, { once: true });
      
    });
  },
  populateTrackingForm(eventName, eventElement, eventTime, eventType,) {
    const form = document.querySelector('.track-event-form');
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
}));
