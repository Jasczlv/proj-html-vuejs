import { createApp } from "vue";
import "./style.css";
import "./scss/styles.scss";
import * as bootstrap from "bootstrap";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
