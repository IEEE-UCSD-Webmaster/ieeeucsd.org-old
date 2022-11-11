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
    path?: string;
    filename?: string;
}

const APP = express();
const TEMPLATE = fs
    .readFileSync(path.join(__dirname, "template.html"))
    .toString();

const WEBSITES = [
    {
        sitename: "index",
        title: "IEEE at UCSD",
        description: "",
        jsfile: "/assets/js/index.js",
        cssfile: "/assets/css/styles.css",
        themecolor: "",
        path: "/",
    },
    {
        sitename: "events",
        title: "IEEE at UCSD",
        description: "",
        jsfile: "/assets/js/events.js",
        cssfile: "/assets/css/styles.css",
        themecolor: "",
    },
    {
        sitename: "projects",
        title: "IEEE at UCSD",
        description: "",
        jsfile: "/assets/js/projects.js",
        cssfile: "/assets/css/styles.css",
        themecolor: "",
    },
    {
        sitename: "committees",
        title: "IEEE at UCSD",
        description: "",
        jsfile: "/assets/js/committees.js",
        cssfile: "/assets/css/styles.css",
        themecolor: "",
    },
    {
        sitename: "404",
        title: "Page Not Found",
        description: "404 Page Not Found",
        jsfile: "/assets/js/404.js",
        cssfile: "/assets/css/styles.css",
        themecolor: "",
        path: "/",
        filename: "404.html",
    },
] as Website[];

const PORT = process.env.PORT ?? 9000;

// Make the public directory traversible to people online
APP.use(express.static(path.join(__dirname, "../public")));
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

// Utility functions for above methods

function respond(res: Response, filename: string) {
    res.set({
        "Content-Type": "text/html",
    });
    res.send(generatePage(filename));
}

function generatePage(name: string): string {
    const site = WEBSITES.find((e) => e.sitename === name);
    let html = TEMPLATE;
    let key: string;
    for (key of Object.keys(site)) {
        html = html.replace(new RegExp("\\$" + key.toUpperCase()), site[key]);
    }
    return html;
}

function generateFilePages() {
    let site: Website;
    for (site of WEBSITES) {
        const html = generatePage(site.sitename);
        fs.mkdirSync(
            path.join(__dirname, "../public/", site.path ?? site.sitename),
            {
                recursive: true,
            }
        );
        fs.writeFileSync(
            path.join(
                __dirname,
                "../public/",
                site.filename ?? (site.path ?? site.sitename) + "/index.html"
            ),
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
