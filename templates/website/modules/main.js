// import dependencies
import Alpine from "@alpinejs/csp";
import "../includes/navigation/languageSwitch";

import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// add module specific scripts in ALPHABETICAL order
import "./../../shared/content-elements/advanced/webcam-image-upload/prototype/webcam-image-upload";
import "./../../shared/content-elements/base/accordion/prototype/accordion";
import "./../../shared/content-elements/base/button/prototype/button";
import "./../../shared/content-elements/base/chart/prototype/chart";
import "./../../shared/content-elements/base/news-snippet/prototype/news-snippet";
import "./../../shared/content-elements/base/slot-finder/prototype/slot-finder";
import "./../../shared/content-elements/base/table/prototype/table";
import "./../../shared/content-elements/form/form-container/form";
import "./../../shared/content-elements/form/form-field-tel/prototype/form-tel-input";
import "./../../shared/content-elements/form/form-field/prototype/form-field";
import "./../../shared/content-elements/form/poll/prototype/poll";
import "./../../shared/content-elements/form/radio/prototype/radio";
import "./../../shared/content-elements/form/checkbox/prototype/checkbox";
import "./../../shared/content-elements/form/select/prototype/select";

// start Alpine.js AFTER importing all module scripts
window.Alpine = Alpine;
Alpine.start();
