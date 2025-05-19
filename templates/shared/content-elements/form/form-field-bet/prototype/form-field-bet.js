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
    });
  },
}));
