                        //! Les bouttons //


let btns = document.querySelectorAll('.button');

btns.forEach((btn) => {
    btn.addEventListener('mouseover', (e) => {
        e.target.style.width = "240px";
        e.target.style.height = "65px";
   });

   btn.addEventListener('mouseout', (e) => {
        e.target.style.width = "223px";
        e.target.style.height= "64px";
   })
})


let btnss = document.querySelector('.actions .container > a');

btnss.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "#ffe8f7";
    e.target.style.color = "#3040C4";
});

btnss.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "#3040C4";
})


let btn = document.querySelector('.is-outline');

btn.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "#ffe8f7";
    e.target.style.color = "#3040C4";
});

btn.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#FFFFFF";
})


                            //! Les Widgets Meet Your Match //

let widgetsM = document.querySelectorAll('.widgets.is-searchResults > .widget img');

widgetsM.forEach((widget) => {
    widget.addEventListener('mouseover', (e) => {
        e.target.style.borderRadius = "50px";
    });

    widget.addEventListener('mouseout', (e) => {
        e.target.style.borderRadius = "0px";
    });
})


                            //! Les Widgets How It Works? //

let widgetsH = document.querySelectorAll('.widgets.is-howItWorks > .widget img');

widgetsH.forEach((widget) => {
    widget.addEventListener('mouseover', (e) => {
        e.target.style.width = "300px";
        //e.target.style.transform = "scale(1.4)";
    });

    widget.addEventListener('mouseout', (e) => {
        e.target.style.width = "218px";
        //e.target.style.transform = "scale(1)";
    });
})



                            //! Les Widgets Stories //

let widgetsS = document.querySelectorAll('.stories .widgets > .widget img');

widgetsS.forEach((widget) => {
    widget.addEventListener('mouseover', (e) => {
        e.target.style.transform = "scale(1.1)";
    });

    widget.addEventListener('mouseout', (e) => {
        e.target.style.transform = "scale(1)";
    })
})

                            //! Les Liens du header //

let links = document.querySelectorAll('.main-nav > ul > li > a , .link');

links.forEach((link) => {
    link.addEventListener('mouseover', (e) => {
        e.target.style.textDecorationLine  = "underline";
    });

    link.addEventListener('mouseout', (e) => {
        e.target.style.textDecorationLine = "none";
    });
})

                            //! Dog & Cat //

let animals = document.querySelectorAll('.dog , .cat');

animals.forEach((animal) => {
    animal.addEventListener('mouseover', (e) => {
        e.target.style.opacity= "1";
    });

    animal.addEventListener('mouseout', (e) => {
        e.target.style.opacity= "0.5";
    })
})

                            //! Les liens du footer //

let liens = document.querySelectorAll('.footer-nav .item > ul > li > a');

liens.forEach((lien) => {
    lien.addEventListener('mouseover', (e) => {
        e.target.style.fontWeight= "bold";
        e.target.style.textDecorationLine = "underline";
    });

    lien.addEventListener('mouseout', (e) => {
        e.target.style.fontWeight= "normal";
        e.target.style.textDecorationLine = "none";
    });
})

                            //! Les Paragraphes //


let parags = document.querySelectorAll('.widgets.is-howItWorks .widget .widget__desc > p , .heading-paragraph');

parags.forEach((parag) => {
    parag.addEventListener('mouseover', (e) => {
        e.target.style.transform = "scale(1.3)";
    });
    
    parag.addEventListener('mouseout', (e) => {
        e.target.style.transform = "scale(1)";
    });
})


                        //! Boutton Scroll //


let scroll = document.querySelector('.is-visible-laptop');
window.onscroll = function() {scrollFunction()};

scroll.addEventListener('click', () => {
    scrollingFunction();
})

function scrollFunction() {
    
            /// Pour Safari ///                / Pour chrome, firefox , opera /
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        scroll.style.display = "block";
    } else {
        scroll.style.display = "none";
    }
}

function scrollingFunction(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}


