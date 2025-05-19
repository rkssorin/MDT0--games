// import dependencies
import Alpine from "@alpinejs/csp";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./../../shared/static/css/fonts.scss";
// add module specific scripts in ALPHABETICAL order
import "./../../shared/content-elements/advanced/webcam-image-upload/prototype/webcam-image-upload";
import "./../../shared/content-elements/base/accordion/prototype/accordion";
import "./../../shared/content-elements/base/button/prototype/button";
import "./../../shared/content-elements/base/chart/prototype/chart";
import "./../../shared/content-elements/base/news-snippet/prototype/news-snippet";
import "./../../shared/content-elements/base/slot-finder/prototype/slot-finder";
import "./../../shared/content-elements/base/table/prototype/table";
import "./../../shared/content-elements/form/form-container/form";
import "./../../shared/content-elements/form/form-field-bet/prototype/form-field-bet";
import "./../../shared/content-elements/form/form-field-tel/prototype/form-tel-input";
import "./../../shared/content-elements/form/form-field/prototype/form-field";
import "./../../shared/content-elements/form/poll/prototype/poll";
import "./../../shared/content-elements/form/radio/prototype/radio";
import "./../../shared/content-elements/form/select/prototype/select";
import "./../../shared/content-elements/form/checkbox/prototype/checkbox";
//custom modules
import "./../../shared/games/form-container-game/form";
import "./../../shared/games/game-animals/game";
import "./../../shared/games/game-quizz/game";
import "./../../shared/games/game-cxycle/game";
import "./../../shared/games/game-of-fortune/game";
import "./../../shared/games/tipp-spiel/form";
// start Alpine.js AFTER importing all module scripts
window.Alpine = Alpine;
Alpine.start();
