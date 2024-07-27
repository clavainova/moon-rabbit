"use strict";

function ghosts() {
    console.log("                 .-.");
    console.log("    heehee      /aa \\_");
    console.log("              __\\-  / )                 .-.");
    console.log("    .-.      (__/    /        haha    _/oo \\");
    console.log("  _/ ..\\       /     \\               ( \\v  /__");
    console.log(" ( \\  u/__    /       \\__             \\/   ___)");
    console.log("  \\    \\__)   \\_.-._._   )  .-.       /     \\");
    console.log("  /     \\             `-`  / ee\\_    /       \\_");
    console.log("__/       \\               __\\  o/ )   \\_.-.__   )");
    console.log("(   _._.-._/     hoho     (___   \\/           '-'");
    console.log("jgs '-'                        /     \\");
    console.log("                        _/       \\    teehee");
    console.log("                       (   __.-._/");
}

function init() {
    buildNav();
    buildFooter();
    buildHeader();
}

function buildNav() {
    let nav = document.createElement("nav"),
        ul = document.createElement("ul"),
        articles = document.getElementsByTagName("article");

    for (let i = 0; i < articles.length; i++) { //can't use forEach on HTML collection
        let li = document.createElement("li"), a = document.createElement("a"), text = document.createTextNode(articles[i].id);
        a.appendChild(text);
        a.setAttribute('href', '#' + articles[i].id);
        li.appendChild(a);
        ul.appendChild(li);
    }

    nav.appendChild(ul);
    document.body.appendChild(nav);
}

function buildFooter() {
    let footer = document.createElement("footer"),
        p = document.createElement("p"),
        text = document.createTextNode("|￣￣￣￣￣￣ |\n|  WEBSITE   | \n|     BY     |\n|  CLAVAIN   | \n| ＿＿＿＿＿_ | \n(\\__/\) || \n(•ㅅ•) || \n/ 　 づ");
    p.appendChild(text);
    footer.appendChild(p);
    document.body.appendChild(footer);
}

function buildHeader() {
    let links = [{
        type: "text/css",
        rel: "stylesheet",
        href: "assets/styles/style-index.css"
    },
    {
        type: "text/css",
        rel: "stylesheet",
        href: "assets/styles/style-gallery.css"
    },
    {
        type: "text/css",
        rel: "stylesheet",
        href: "assets/styles/style-shared.css"
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    },
    {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
    },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
    },
    {
        rel: "icon",
        href: "assets/img/bunny.png"
    }
    ]

    links.forEach((item) => {
        let link = document.createElement("link");
        link.type = item.type; //ok to set to undefined
        link.rel = item.rel;
        link.href = item.href;
        document.head.appendChild(link);
    });
}

init();