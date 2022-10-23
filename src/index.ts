import express, { NextFunction } from "express";
import { Request, Response } from "express";
import * as path from "path";
import * as fs from "fs";

interface Website {
    [key: string]: string;
    sitename: string;
    title: string;
    description: string;
    jsfile: string;
    cssfile: string;
    themecolor: string;
}

const APP = express();
const TEMPLATE = fs
    .readFileSync(path.join(__dirname, "public/template.html"))
    .toString();
const WEBSITES = [
    {
        sitename: "index",
        title: "IEEE at UCSD",
        description: "",
        jsfile: "js/index.js",
        cssfile: "css/styles.css",
        themecolor: "",
    },
    {
        sitename: "events",
        title: "IEEE at UCSD",
        description: "",
        jsfile: "js/events.js",
        cssfile: "css/styles.css",
        themecolor: "",
    },
    {
        sitename: "projects",
        title: "IEEE at UCSD",
        description: "",
        jsfile: "js/projects.js",
        cssfile: "css/styles.css",
        themecolor: "",
    },
    {
        sitename: "committees",
        title: "IEEE at UCSD",
        description: "",
        jsfile: "js/committees.js",
        cssfile: "css/styles.css",
        themecolor: "",
    },
    {
        sitename: "contact",
        title: "IEEE at UCSD",
        description: "",
        jsfile: "js/index.js",
        cssfile: "css/styles.css",
        themecolor: "",
    },
] as Website[];

const PORT = 9000;

// Make the public directory traversible to people online
APP.use(express.static(path.join(__dirname, "public")));
// Put the cookies as a variable in the request
APP.use((req: Request, res: Response, next: NextFunction) => {
    req.cookies = req.headers.cookie;
    next();
});
// Receive json post requests and urlencoded requests
APP.use(express.json());
APP.use(express.urlencoded({ extended: true }));

// Send main page
APP.get("/", (req: Request, res: Response) => {
    respond(res, "index");
});
APP.get("/events", (req: Request, res: Response) => {
    respond(res, "events");
});
APP.get("/projects", (req: Request, res: Response) => {
    respond(res, "projects");
});
APP.get("/committees", (req: Request, res: Response) => {
    respond(res, "committees");
});
APP.get("/contact", (req: Request, res: Response) => {
    respond(res, "contact");
});

/**
 * Utility functions for above methods
 */
function respond(res: Response, filename: string) {
    res.set({
        "Content-Type": "text/html",
    });
    res.send(generatePage(filename));
}

function generatePage(name: string): string {
    const site = WEBSITES.find((e) => e.sitename === name);
    let html = TEMPLATE;
    let key;
    for (key of Object.keys(site)) {
        html = html.replace(new RegExp("\\$" + key.toUpperCase()), site[key]);
    }
    return html;
}

function generateFilePages() {
    let site;
    for (site of WEBSITES) {
        const html = generatePage(site.sitename);
        fs.writeFileSync(
            path.join(__dirname, "public/", `${site.sitename}.html`),
            html
        );
    }
}

if (process.argv[2] === "generate") {
    generateFilePages();
} else {
    APP.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}
