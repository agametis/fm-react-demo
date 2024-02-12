import open from "open";
import path from "path";

import {config} from "./config.js";

// using node >=20.11
const __dirname = import.meta.dirname;

const {widgetName, uploadScript, file, server} = config;

const fileUrl = `fmp://${server}/${file}?script=${uploadScript}&param=`;

const thePath = path.join(__dirname, "../", "dist", "index.html");

const params = {widgetName, thePath};
const urlFM = fileUrl + encodeURIComponent(JSON.stringify(params));
open(urlFM);
