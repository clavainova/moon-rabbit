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
    buildOverlay();
    buildNav(document.title);
    buildFooter();
    buildHeader(document.title);
}

function buildNav(title) {
    let nav = document.createElement("nav");
    let ul = document.createElement("ul");
    let pages = ["index", "photos", "web", "writing", "worms"];
    pages.forEach((item) => {
        if (item !== title) { //don't make nav button for current page
            let li = document.createElement("li"), a = document.createElement("a"), text = document.createTextNode(item);
            a.appendChild(text);
            a.setAttribute('href', "/" + item + ".html");
            li.appendChild(a);
            ul.appendChild(li);
        }
    });
    nav.appendChild(ul);
    document.body.appendChild(nav);
}

function buildOverlay() {
    let div = document.createElement("div");
    div.setAttribute('class', "overlay");
    div.setAttribute('id', "animated-overlay");
    div.innerHTML = document.getElementById("content").innerHTML;
    document.getElementById("content").innerHTML = "";
    document.getElementById("content").appendChild(div);
}

function buildFooter() {
    let footer = document.createElement("footer"),
        p = document.createElement("p"),
        text = document.createTextNode("|￣￣￣￣￣￣ |\n|  WEBSITE   | \n|     BY     |\n|  CLAVAIN   | \n| ＿＿＿＿＿_ | \n(\\__/\) || \n(•ㅅ•) || \n/ 　 づ");
    p.appendChild(text);
    footer.appendChild(p);
    document.body.appendChild(footer);
}

function buildHeader(title) {
    let links = [{
        type: "text/css",
        rel: "stylesheet",
        href: "assets/styles/style-" + title + ".css"
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
    }]
    // style

    links.forEach((item)=>{
        let link = document.createElement("link");
        link.type = item.type; //ok to set to undefined
        link.rel = item.rel;
        link.href = item.href;
        document.head.appendChild(link);
    });
}

init();