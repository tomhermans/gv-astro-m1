console.log("swup strt");
import Swup from "swup";

// const Swup = require("swup");
// import Swup from "../node_modules/swup/dist/swup.js";
// const swup = new Swup(); // only this line when included with script tag

// import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupSlideTheme from "@swup/slide-theme";
import SwupOverlayTheme from "@swup/overlay-theme";
import SwupA11yPlugin from "@swup/a11y-plugin";

const swup = new Swup({
  plugins: [
    new SwupOverlayTheme({
      color: "#2D2E82",
      duration: 600,
      direction: "to-right",
    }),
    new SwupA11yPlugin(),
    new SwupHeadPlugin(),
    new SwupSlideTheme(),
  ],
});
console.log("swup end");
