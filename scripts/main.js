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
    buildGallery();
    buildWriting();
    addEvents();
}

function addEvents() {
    document.getElementById("index").addEventListener("click", function (e) {
        this.classList.toggle("is-active");
    });


}

//writing

async function buildWriting() {
    let response = await fetch("data/writing.json"),
        writing = await response.json();
    let types = [];
    writing.forEach((item) => {
        //make headers
        if (!types.includes(item.type)) {
            types.push(item.type);
            let p = document.createElement("p");
            p.setAttribute("class","active");
            p.appendChild(document.createTextNode(item.type + " ▼"));
            p.addEventListener("click", function () {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
            });
            document.getElementById("writingList").appendChild(p);
            let div = document.createElement("div");
            div.setAttribute("id", "wl-div-" + item.type);
            document.getElementById("writingList").appendChild(div);
        }
        //make children of headers
        let li = document.createElement("li");
        let text = document.createTextNode(item.h1);
        li.appendChild(text);
        li.addEventListener("click", (e) => {
            loadText(item);
        });
        document.getElementById("wl-div-" + item.type).appendChild(li);

    });
}

function loadText(pText) {
    document.getElementById("textPane").innerHTML = "";

    let span = document.createElement("span"),
        h1 = document.createElement("h1"),
        p = document.createElement("p"), vText;

    vText = document.createTextNode(pText.h1);
    h1.appendChild(vText);
    document.getElementById("textPane").appendChild(h1);

    vText = document.createTextNode(pText.span)
    span.appendChild(vText);
    document.getElementById("textPane").appendChild(span);

    p.innerHTML = pText.p; //no text node because may contain html
    document.getElementById("textPane").appendChild(p);
}

//gallery

async function buildGallery() {
    let response = await fetch("data/galleryItems.json");
    let gallery = await response.json();
    gallery.forEach((item, index) => {
        let img = document.createElement("img");
        img.src = item.src;
        img.setAttribute("id", "gal_" + index);
        img.addEventListener("click", (e) => {
            openImgModal(item.src, item.desc);
        });
        img.setAttribute('placeholder', item.placeholder);
        img.classList.add("galleryItem");
        document.getElementById("galleryFlexGrid").appendChild(img);
    });
}

function openImgModal(url, desc) {
    //open modal to show fullsize image
    let div = document.createElement("div");
    div.classList.add("imgModal");
    let img = document.createElement("img");
    img.src = url;
    div.appendChild(img)
    let p = document.createElement("p");
    let text = document.createTextNode(desc);
    p.appendChild(text);
    div.appendChild(p);
    div.addEventListener("click", (e) => {
        div.remove(); //close when clicked
    });
    document.body.appendChild(div);
}

// index

function buildNav() {
    let nav = document.createElement("nav"),
        ul = document.createElement("ul"),
        articles = document.getElementsByTagName("article");

    for (let i = 0; i < articles.length; i++) { //can't use forEach on HTML collection
        let li = document.createElement("li"), a = document.createElement("a"), text = document.createTextNode(articles[i].id);
        a.appendChild(text);
        a.setAttribute('href', '#' + articles[i].id);
        li.appendChild(a);
        li.setAttribute("id", "nav_" + articles[i].id);
        li.classList.add("nav_default");
        li.addEventListener("click", (e) => {
            toggleNavButtons("nav_" + articles[i].id);
        });
        ul.appendChild(li);
    }

    nav.appendChild(ul);
    document.body.appendChild(nav);

    document.getElementById("nav_index").classList.toggle("is-active"); //set default to active
}

function toggleNavButtons(id) {
    //if(document.URL.includes(id.slice(4))){ - fix display bug
    document.getElementById(id).classList.toggle("is-active");
    let navButtons = document.getElementsByClassName("nav_default is-active");
    for (let i = 0; i < navButtons.length; i++) { //can't use forEach on HTML collection
        if (navButtons[i].id != id) {
            navButtons[i].classList.remove("is-active");
        }
    }
}

function buildFooter() {
    let footer = document.createElement("footer"),
        p = document.createElement("p"),
        text = document.createTextNode("|￣￣￣￣￣￣ |\n|  WEBSITE   | \n|     BY     |\n|  CLAVAIN   | \n| ＿＿＿＿＿_ | \n(\\__/\) || \n(•ㅅ•) || \n/ 　 づ");
    p.appendChild(text);
    p.addEventListener("mouseover", (e) => {
        p.innerHTML = "|￣￣￣￣￣￣ |\n|  WEBSITE   | \n|     BY     |\n|  CLAVAIN   | \n| ＿＿＿＿＿_ | \n(\\__/\) || \n(OㅅO) || \n/ 　 づ";
    });
    p.addEventListener("mouseout", (e) => {
        p.innerHTML = "|￣￣￣￣￣￣ |\n|  WEBSITE   | \n|     BY     |\n|  CLAVAIN   | \n| ＿＿＿＿＿_ | \n(\\__/\) || \n(nㅅn) || \n/ 　 づ";
    });
    footer.setAttribute("id","footer");
    footer.addEventListener("click", (e) => {
        document.getElementById("footer").style.display = "none";
    });
    footer.appendChild(p);
    document.body.appendChild(footer);
}

function buildHeader() {
    //better performance if this is kept here
    let links = [{
        type: "text/css",
        rel: "stylesheet",
        href: "assets/styles/style-index.css",
        layoutFor: "desktop"
    },
    {
        type: "text/css",
        rel: "stylesheet",
        href: "assets/styles/style-writing.css",
        layoutFor: "desktop"
    },
    {
        type: "text/css",
        rel: "stylesheet",
        href: "assets/styles/style-gallery.css",
        layoutFor: "desktop"
    },
    {
        type: "text/css",
        rel: "stylesheet",
        href: "assets/styles/style-shared.css",
        layoutFor: "desktop"
    },
    {
        type: "text/css",
        rel: "stylesheet",
        href: "assets/styles/style-mobile.css",
        layoutFor: "mobile"
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap",
        layoutFor: "all"
    },
    {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
        layoutFor: "all"
    },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        layoutFor: "all"
    },
    {
        rel: "icon",
        href: "assets/img/bunny.png",
        layoutFor: "all"
    }
    ], 
    layout = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "mobile" : "desktop");

    links.forEach((item) => {
        if (item.layoutFor == "all" || item.layoutFor == layout){
            console.log("adding... " + item.href);
            let link = document.createElement("link");
            link.type = item.type; //ok to set to undefined
            link.rel = item.rel;
            link.href = item.href;
            document.head.appendChild(link);
        }
    });
}

init();