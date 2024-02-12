import open from "open";
import path from "path";
// import url from "url";

import {config} from "./config.js";

//const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// using node >=20.11
const __dirname = import.meta.dirname;

const {widgetName, uploadScript, file, server} = config;

const fileUrl = `fmp://${server}/${file}?script=${uploadScript}&param=`;

const thePath = path.join(__dirname, "../", "dist", "index.html");

const params = {widgetName, thePath};
const urlFM = fileUrl + encodeURIComponent(JSON.stringify(params));
open(urlFM);
