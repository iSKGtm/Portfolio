//Photos Carousel Framework (FIC 8 / 1) (iSKGtm)
//FIC CUSTOM VER.

//MASTER API
let globalmasterCarousel = true;

//PLACEHOLDER 1
let globalCarouselBox1 = "";
let globalCarouselName1 = "";
let globalCarouselIMG1 = "./src/img/carouselImages/carousel1.jpg";

//PLACEHOLDER 2
let globalCarouselBox2 = "";
let globalCarouselName2 = "";
let globalCarouselIMG2 = "./src/img/carouselImages/carousel2.jpg";

//PLACEHOLDER 3
let globalCarouselBox3 = "";
let globalCarouselName3 = "";
let globalCarouselIMG3 = "./src/img/carouselImages/carousel3.jpg";

//PLACEHOLDER 4
let globalCarouselBox4 = "";
let globalCarouselName4 = "";
let globalCarouselIMG4 = "./src/img/carouselImages/carousel4.jpg";

//PLACEHOLDER 5
let globalCarouselBox5 = "";
let globalCarouselName5 = "";
let globalCarouselIMG5 = "./src/img/carouselImages/carousel5.jpg";

//PLACEHOLDER 6
let globalCarouselBox6 = "";
let globalCarouselName6 = "";
let globalCarouselIMG6 = "./src/img/carouselImages/carousel6.jpg";

//PLACEHOLDER 7
let globalCarouselBox7 = "";
let globalCarouselName7 = "";
let globalCarouselIMG7 = "./src/img/carouselImages/carousel7.jpg";

//PLACEHOLDER 8
let globalCarouselBox8 = "";
let globalCarouselName8 = "";
let globalCarouselIMG8 = "./src/img/carouselImages/carousel8.jpg";


//DOM CONNECTION [FAVOR, NÃO MEXER]

//SCROLLING EFFECT (OPTIONAL)

let carouselCont = document.querySelector('.carouselCont');

function carouselScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    //let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //let scrolled = (winScroll / height) * 100;
    let scroll3D = -160 + ((winScroll / 50) *-1);

    carouselCont.style.transform = "perspective(1200px) scale(1.0) rotateY(" + scroll3D + "deg)";
}

window.addEventListener("scroll", carouselScroll);

//MASTER

    function masterCarouselF() {
        let masterCarousel = document.querySelector('#sysCarousel');
        if (globalmasterCarousel == true) {
            masterCarousel.style.display = "flex"
        }
        else {
            masterCarousel.style.display = "none"
        }
    }

masterCarouselF();

//PLACEHOLDER 1
let carouselBox1 = document.querySelector('#carouselBox1');
let carouselIMG1 = document.querySelector('#carouselIMG1');
let carouselName1 = document.querySelector('#carouselName1');
let carouselNameLabel1 = document.querySelector('#carouselNameLabel1');

let carouselBox1LP = document.querySelector('#carouselBox1LP');
let carouselIMG1LP = document.querySelector('#carouselIMG1LP');
let carouselName1LP = document.querySelector('#carouselName1LP');
let carouselNameLabel1LP = document.querySelector('#carouselNameLabel1LP');

let carouselBox12 = document.querySelector('#carouselBox1-2');
let carouselIMG12 = document.querySelector('#carouselIMG1-2');
let carouselName12 = document.querySelector('#carouselName1-2');
let carouselNameLabel12 = document.querySelector('#carouselNameLabel1-2');

let carouselBox1LP2 = document.querySelector('#carouselBox1LP-2');
let carouselIMG1LP2 = document.querySelector('#carouselIMG1LP-2');
let carouselName1LP2 = document.querySelector('#carouselName1LP-2');
let carouselNameLabel1LP2 = document.querySelector('#carouselNameLabel1LP-2');

let carouselBox13 = document.querySelector('#carouselBox1-3');
let carouselIMG13 = document.querySelector('#carouselIMG1-3');
let carouselName13 = document.querySelector('#carouselName1-3');
let carouselNameLabel13 = document.querySelector('#carouselNameLabel1-3');

let carouselBox1LP3 = document.querySelector('#carouselBox1LP-3');
let carouselIMG1LP3 = document.querySelector('#carouselIMG1LP-3');
let carouselName1LP3 = document.querySelector('#carouselName1LP-3');
let carouselNameLabel1LP3 = document.querySelector('#carouselNameLabel1LP-3');

//PLACEHOLDER 2
let carouselBox2 = document.querySelector('#carouselBox2');
let carouselIMG2 = document.querySelector('#carouselIMG2');
let carouselName2 = document.querySelector('#carouselName2');
let carouselNameLabel2 = document.querySelector('#carouselNameLabel2');

let carouselBox2LP = document.querySelector('#carouselBox2LP');
let carouselIMG2LP = document.querySelector('#carouselIMG2LP');
let carouselName2LP = document.querySelector('#carouselName2LP');
let carouselNameLabel2LP = document.querySelector('#carouselNameLabel2LP');

let carouselBox22 = document.querySelector('#carouselBox2-2');
let carouselIMG22 = document.querySelector('#carouselIMG2-2');
let carouselName22 = document.querySelector('#carouselName2-2');
let carouselNameLabel22 = document.querySelector('#carouselNameLabel2-2');

let carouselBox2LP2 = document.querySelector('#carouselBox2LP-2');
let carouselIMG2LP2 = document.querySelector('#carouselIMG2LP-2');
let carouselName2LP2 = document.querySelector('#carouselName2LP-2');
let carouselNameLabel2LP2 = document.querySelector('#carouselNameLabel2LP-2');

let carouselBox23 = document.querySelector('#carouselBox2-3');
let carouselIMG23 = document.querySelector('#carouselIMG2-3');
let carouselName23 = document.querySelector('#carouselName2-3');
let carouselNameLabel23 = document.querySelector('#carouselNameLabel2-3');

let carouselBox2LP3 = document.querySelector('#carouselBox2LP-3');
let carouselIMG2LP3 = document.querySelector('#carouselIMG2LP-3');
let carouselName2LP3 = document.querySelector('#carouselName2LP-3');
let carouselNameLabel2LP3 = document.querySelector('#carouselNameLabel2LP-3');

//PLACEHOLDER 3
let carouselBox3 = document.querySelector('#carouselBox3');
let carouselIMG3 = document.querySelector('#carouselIMG3');
let carouselName3 = document.querySelector('#carouselName3');
let carouselNameLabel3 = document.querySelector('#carouselNameLabel3');

let carouselBox3LP = document.querySelector('#carouselBox3LP');
let carouselIMG3LP = document.querySelector('#carouselIMG3LP');
let carouselName3LP = document.querySelector('#carouselName3LP');
let carouselNameLabel3LP = document.querySelector('#carouselNameLabel3LP');

let carouselBox32 = document.querySelector('#carouselBox3-2');
let carouselIMG32 = document.querySelector('#carouselIMG3-2');
let carouselName32 = document.querySelector('#carouselName3-2');
let carouselNameLabel32 = document.querySelector('#carouselNameLabel3-2');

let carouselBox3LP2 = document.querySelector('#carouselBox3LP-2');
let carouselIMG3LP2 = document.querySelector('#carouselIMG3LP-2');
let carouselName3LP2 = document.querySelector('#carouselName3LP-2');
let carouselNameLabel3LP2 = document.querySelector('#carouselNameLabel3LP-2');

let carouselBox33 = document.querySelector('#carouselBox3-3');
let carouselIMG33 = document.querySelector('#carouselIMG3-3');
let carouselName33 = document.querySelector('#carouselName3-3');
let carouselNameLabel33 = document.querySelector('#carouselNameLabel3-3');

let carouselBox3LP3 = document.querySelector('#carouselBox3LP-3');
let carouselIMG3LP3 = document.querySelector('#carouselIMG3LP-3');
let carouselName3LP3 = document.querySelector('#carouselName3LP-3');
let carouselNameLabel3LP3 = document.querySelector('#carouselNameLabel3LP-3');

//PLACEHOLDER 4
let carouselBox4 = document.querySelector('#carouselBox4');
let carouselIMG4 = document.querySelector('#carouselIMG4');
let carouselName4 = document.querySelector('#carouselName4');
let carouselNameLabel4 = document.querySelector('#carouselNameLabel4');

let carouselBox4LP = document.querySelector('#carouselBox4LP');
let carouselIMG4LP = document.querySelector('#carouselIMG4LP');
let carouselName4LP = document.querySelector('#carouselName4LP');
let carouselNameLabel4LP = document.querySelector('#carouselNameLabel4LP');

let carouselBox42 = document.querySelector('#carouselBox4-2');
let carouselIMG42 = document.querySelector('#carouselIMG4-2');
let carouselName42 = document.querySelector('#carouselName4-2');
let carouselNameLabel42 = document.querySelector('#carouselNameLabel4-2');

let carouselBox4LP2 = document.querySelector('#carouselBox4LP-2');
let carouselIMG4LP2 = document.querySelector('#carouselIMG4LP-2');
let carouselName4LP2 = document.querySelector('#carouselName4LP-2');
let carouselNameLabel4LP2 = document.querySelector('#carouselNameLabel4LP-2');

let carouselBox43 = document.querySelector('#carouselBox4-3');
let carouselIMG43 = document.querySelector('#carouselIMG4-3');
let carouselName43 = document.querySelector('#carouselName4-3');
let carouselNameLabel43 = document.querySelector('#carouselNameLabel4-3');

let carouselBox4LP3 = document.querySelector('#carouselBox4LP-3');
let carouselIMG4LP3 = document.querySelector('#carouselIMG4LP-3');
let carouselName4LP3 = document.querySelector('#carouselName4LP-3');
let carouselNameLabel4LP3 = document.querySelector('#carouselNameLabel4LP-3');

//PLACEHOLDER 5
let carouselBox5 = document.querySelector('#carouselBox5');
let carouselIMG5 = document.querySelector('#carouselIMG5');
let carouselName5 = document.querySelector('#carouselName5');
let carouselNameLabel5 = document.querySelector('#carouselNameLabel5');

let carouselBox5LP = document.querySelector('#carouselBox5LP');
let carouselIMG5LP = document.querySelector('#carouselIMG5LP');
let carouselName5LP = document.querySelector('#carouselName5LP');
let carouselNameLabel5LP = document.querySelector('#carouselNameLabel5LP');

let carouselBox52 = document.querySelector('#carouselBox5-2');
let carouselIMG52 = document.querySelector('#carouselIMG5-2');
let carouselName52 = document.querySelector('#carouselName5-2');
let carouselNameLabel52 = document.querySelector('#carouselNameLabel5-2');

let carouselBox5LP2 = document.querySelector('#carouselBox5LP-2');
let carouselIMG5LP2 = document.querySelector('#carouselIMG5LP-2');
let carouselName5LP2 = document.querySelector('#carouselName5LP-2');
let carouselNameLabel5LP2 = document.querySelector('#carouselNameLabel5LP-2');

let carouselBox53 = document.querySelector('#carouselBox5-3');
let carouselIMG53 = document.querySelector('#carouselIMG5-3');
let carouselName53 = document.querySelector('#carouselName5-3');
let carouselNameLabel53 = document.querySelector('#carouselNameLabel5-3');

let carouselBox5LP3 = document.querySelector('#carouselBox5LP-3');
let carouselIMG5LP3 = document.querySelector('#carouselIMG5LP-3');
let carouselName5LP3 = document.querySelector('#carouselName5LP-3');
let carouselNameLabel5LP3 = document.querySelector('#carouselNameLabel5LP-3');

//PLACEHOLDER 6
let carouselBox6 = document.querySelector('#carouselBox6');
let carouselIMG6 = document.querySelector('#carouselIMG6');
let carouselName6 = document.querySelector('#carouselName6');
let carouselNameLabel6 = document.querySelector('#carouselNameLabel6');

let carouselBox6LP = document.querySelector('#carouselBox6LP');
let carouselIMG6LP = document.querySelector('#carouselIMG6LP');
let carouselName6LP = document.querySelector('#carouselName6LP');
let carouselNameLabel6LP = document.querySelector('#carouselNameLabel6LP');

let carouselBox62 = document.querySelector('#carouselBox6-2');
let carouselIMG62 = document.querySelector('#carouselIMG6-2');
let carouselName62 = document.querySelector('#carouselName6-2');
let carouselNameLabel62 = document.querySelector('#carouselNameLabel6-2');

let carouselBox6LP2 = document.querySelector('#carouselBox6LP-2');
let carouselIMG6LP2 = document.querySelector('#carouselIMG6LP-2');
let carouselName6LP2 = document.querySelector('#carouselName6LP-2');
let carouselNameLabel6LP2 = document.querySelector('#carouselNameLabel6LP-2');

let carouselBox63 = document.querySelector('#carouselBox6-3');
let carouselIMG63 = document.querySelector('#carouselIMG6-3');
let carouselName63 = document.querySelector('#carouselName6-3');
let carouselNameLabel63 = document.querySelector('#carouselNameLabel6-3');

let carouselBox6LP3 = document.querySelector('#carouselBox6LP-3');
let carouselIMG6LP3 = document.querySelector('#carouselIMG6LP-3');
let carouselName6LP3 = document.querySelector('#carouselName6LP-3');
let carouselNameLabel6LP3 = document.querySelector('#carouselNameLabel6LP-3');

//PLACEHOLDER 7
let carouselBox7 = document.querySelector('#carouselBox7');
let carouselIMG7 = document.querySelector('#carouselIMG7');
let carouselName7 = document.querySelector('#carouselName7');
let carouselNameLabel7 = document.querySelector('#carouselNameLabel7');

let carouselBox7LP = document.querySelector('#carouselBox7LP');
let carouselIMG7LP = document.querySelector('#carouselIMG7LP');
let carouselName7LP = document.querySelector('#carouselName7LP');
let carouselNameLabel7LP = document.querySelector('#carouselNameLabel7LP');

let carouselBox72 = document.querySelector('#carouselBox7-2');
let carouselIMG72 = document.querySelector('#carouselIMG7-2');
let carouselName72 = document.querySelector('#carouselName7-2');
let carouselNameLabel72 = document.querySelector('#carouselNameLabel7-2');

let carouselBox7LP2 = document.querySelector('#carouselBox7LP-2');
let carouselIMG7LP2 = document.querySelector('#carouselIMG7LP-2');
let carouselName7LP2 = document.querySelector('#carouselName7LP-2');
let carouselNameLabel7LP2 = document.querySelector('#carouselNameLabel7LP-2');

let carouselBox73 = document.querySelector('#carouselBox7-3');
let carouselIMG73 = document.querySelector('#carouselIMG7-3');
let carouselName73 = document.querySelector('#carouselName7-3');
let carouselNameLabel73 = document.querySelector('#carouselNameLabel7-3');

let carouselBox7LP3 = document.querySelector('#carouselBox7LP-3');
let carouselIMG7LP3 = document.querySelector('#carouselIMG7LP-3');
let carouselName7LP3 = document.querySelector('#carouselName7LP-3');
let carouselNameLabel7LP3 = document.querySelector('#carouselNameLabel7LP-3');

//PLACEHOLDER 8
let carouselBox8 = document.querySelector('#carouselBox8');
let carouselIMG8 = document.querySelector('#carouselIMG8');
let carouselName8 = document.querySelector('#carouselName8');
let carouselNameLabel8 = document.querySelector('#carouselNameLabel8');

let carouselBox8LP = document.querySelector('#carouselBox8LP');
let carouselIMG8LP = document.querySelector('#carouselIMG8LP');
let carouselName8LP = document.querySelector('#carouselName8LP');
let carouselNameLabel8LP = document.querySelector('#carouselNameLabel8LP');

let carouselBox82 = document.querySelector('#carouselBox8-2');
let carouselIMG82 = document.querySelector('#carouselIMG8-2');
let carouselName82 = document.querySelector('#carouselName8-2');
let carouselNameLabel82 = document.querySelector('#carouselNameLabel8-2');

let carouselBox8LP2 = document.querySelector('#carouselBox8LP-2');
let carouselIMG8LP2 = document.querySelector('#carouselIMG8LP-2');
let carouselName8LP2 = document.querySelector('#carouselName8LP-2');
let carouselNameLabel8LP2 = document.querySelector('#carouselNameLabel8LP-2');

let carouselBox83 = document.querySelector('#carouselBox8-3');
let carouselIMG83 = document.querySelector('#carouselIMG8-3');
let carouselName83 = document.querySelector('#carouselName8-3');
let carouselNameLabel83 = document.querySelector('#carouselNameLabel8-3');

let carouselBox8LP3 = document.querySelector('#carouselBox8LP-3');
let carouselIMG8LP3 = document.querySelector('#carouselIMG8LP-3');
let carouselName8LP3 = document.querySelector('#carouselName8LP-3');
let carouselNameLabel8LP3 = document.querySelector('#carouselNameLabel8LP-3');

//RESOURCES

function rendererBoxes() {
    //PLACEHOLDER 1
    carouselIMG1.src = globalCarouselIMG1;
    carouselName1.innerText = globalCarouselName1;
    carouselIMG1LP.src = globalCarouselIMG1;
    carouselName1LP.innerText = globalCarouselName1; 

    carouselIMG12.src = globalCarouselIMG1;
    carouselName12.innerText = globalCarouselName1;
    carouselIMG1LP2.src = globalCarouselIMG1;
    carouselName1LP2.innerText = globalCarouselName1; 

    carouselIMG13.src = globalCarouselIMG1;
    carouselName13.innerText = globalCarouselName1;
    carouselIMG1LP3.src = globalCarouselIMG1;
    carouselName1LP3.innerText = globalCarouselName1; 

    function placeholder1() {
        if (globalCarouselBox1 == null || globalCarouselBox1 == "") {
            window.open("", '_self');
        } else {
            window.open(globalCarouselBox1, '_blank');
        }
    }

    //PLACEHOLDER 2
    carouselIMG2.src = globalCarouselIMG2;
    carouselName2.innerText = globalCarouselName2;
    carouselIMG2LP.src = globalCarouselIMG2;
    carouselName2LP.innerText = globalCarouselName2; 
    
    carouselIMG22.src = globalCarouselIMG2;
    carouselName22.innerText = globalCarouselName2;
    carouselIMG2LP2.src = globalCarouselIMG2;
    carouselName2LP2.innerText = globalCarouselName2; 
    
    carouselIMG23.src = globalCarouselIMG2;
    carouselName23.innerText = globalCarouselName2;
    carouselIMG2LP3.src = globalCarouselIMG2;
    carouselName2LP3.innerText = globalCarouselName2; 

    function placeholder2() {
        if (globalCarouselBox2 == null || globalCarouselBox2 == "") {
            window.open("", '_self');
        } else {
            window.open(globalCarouselBox2, '_blank');
        }
    }

    //PLACEHOLDER 3
    carouselIMG3.src = globalCarouselIMG3;
    carouselName3.innerText = globalCarouselName3;
    carouselIMG3LP.src = globalCarouselIMG3;
    carouselName3LP.innerText = globalCarouselName3; 


    carouselIMG32.src = globalCarouselIMG3;
    carouselName32.innerText = globalCarouselName3;
    carouselIMG3LP2.src = globalCarouselIMG3;
    carouselName3LP2.innerText = globalCarouselName3; 
    

    carouselIMG33.src = globalCarouselIMG3;
    carouselName33.innerText = globalCarouselName3;
    carouselIMG3LP3.src = globalCarouselIMG3;
    carouselName3LP3.innerText = globalCarouselName3; 
    

    function placeholder3() {
        if (globalCarouselBox3 == null || globalCarouselBox3 == "") {
            window.open("", '_self');
        } else {
            window.open(globalCarouselBox3, '_blank');
        }
    }

    //PLACEHOLDER 4
    carouselIMG4.src = globalCarouselIMG4;
    carouselName4.innerText = globalCarouselName4
    carouselIMG4LP.src = globalCarouselIMG4;
    carouselName4LP.innerText = globalCarouselName4; 


    carouselIMG42.src = globalCarouselIMG4;
    carouselName42.innerText = globalCarouselName4;
    carouselIMG4LP2.src = globalCarouselIMG4;
    carouselName4LP2.innerText = globalCarouselName4; 
    

    carouselIMG43.src = globalCarouselIMG4;
    carouselName43.innerText = globalCarouselName4;
    carouselIMG4LP3.src = globalCarouselIMG4;
    carouselName4LP3.innerText = globalCarouselName4; 
    

    function placeholder4() {
        if (globalCarouselBox4 == null || globalCarouselBox4 == "") {
            window.open("", '_self');
        } else {
            window.open(globalCarouselBox4, '_blank');
        }
    }

    //PLACEHOLDER 5
    carouselIMG5.src = globalCarouselIMG5;
    carouselName5.innerText = globalCarouselName5;
    carouselIMG5LP.src = globalCarouselIMG5;
    carouselName5LP.innerText = globalCarouselName5; 


    carouselIMG52.src = globalCarouselIMG5;
    carouselName52.innerText = globalCarouselName5;
    carouselIMG5LP2.src = globalCarouselIMG5;
    carouselName5LP2.innerText = globalCarouselName5; 
    

    carouselIMG53.src = globalCarouselIMG5;
    carouselName53.innerText = globalCarouselName5;
    carouselIMG5LP3.src = globalCarouselIMG5;
    carouselName5LP3.innerText = globalCarouselName5; 
    

    function placeholder5() {
        if (globalCarouselBox5 == null || globalCarouselBox5 == "") {
            window.open("", '_self');
        } else {
            window.open(globalCarouselBox5, '_blank');
        }
    }

    //PLACEHOLDER 6
    carouselIMG6.src = globalCarouselIMG6;
    carouselName6.innerText = globalCarouselName6;
    carouselIMG6LP.src = globalCarouselIMG6;
    carouselName6LP.innerText = globalCarouselName6;

    carouselIMG62.src = globalCarouselIMG6;
    carouselName62.innerText = globalCarouselName6;

    carouselIMG6LP2.src = globalCarouselIMG6;
    carouselName6LP2.innerText = globalCarouselName6;

    carouselIMG63.src = globalCarouselIMG6;
    carouselName63.innerText = globalCarouselName6;

    carouselIMG6LP3.src = globalCarouselIMG6;
    carouselName6LP3.innerText = globalCarouselName6;

    function placeholder6() {
        if (globalCarouselBox6 == null || globalCarouselBox6 == "") {
            window.open("", '_self');
        } else {
            window.open(globalCarouselBox6, '_blank');
        }
    }

    //PLACEHOLDER 7
    carouselIMG7.src = globalCarouselIMG7;
    carouselName7.innerText = globalCarouselName7;

    carouselIMG72.src = globalCarouselIMG7;
    carouselName72.innerText = globalCarouselName7;

    carouselIMG73.src = globalCarouselIMG7;
    carouselName73.innerText = globalCarouselName7;

    function placeholder7() {
        if (globalCarouselBox7 == null || globalCarouselBox7 == "") {
            window.open("", '_self');
        } else {
            window.open(globalCarouselBox7, '_blank');
        }
    }

    //PLACEHOLDER 8
    carouselIMG8.src = globalCarouselIMG8;
    carouselName8.innerText = globalCarouselName8;

    carouselIMG82.src = globalCarouselIMG8;
    carouselName82.innerText = globalCarouselName8;

    carouselIMG83.src = globalCarouselIMG8;
    carouselName83.innerText = globalCarouselName8;

    function placeholder8() {
        if (globalCarouselBox8 == null || globalCarouselBox8 == "") {
            window.open("", '_self');
        } else {
            window.open(globalCarouselBox8, '_blank');
        }
    }

    function imageRenderer() {
        //PLACEHOLDER 1
        if (globalCarouselIMG1 == null || globalCarouselIMG1 == "") {
            carouselIMG1.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG1LP.src = "src/img/symb/palceholderCarouselInst.jpg"

            carouselIMG12.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG1LP2.src = "src/img/symb/palceholderCarouselInst.jpg"

            carouselIMG13.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG1LP3.src = "src/img/symb/palceholderCarouselInst.jpg"
        }
        //PLACEHOLDER 2
        if (globalCarouselIMG2 == null || globalCarouselIMG2 == "") {
            carouselIMG2.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG2LP.src = "src/img/symb/palceholderCarouselInst.jpg"

            carouselIMG22.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG2LP2.src = "src/img/symb/palceholderCarouselInst.jpg"

            carouselIMG23.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG2LP3.src = "src/img/symb/palceholderCarouselInst.jpg"
        }
        //PLACEHOLDER 3
        if (globalCarouselIMG3 == null || globalCarouselIMG3 == "") {
            carouselIMG3.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG3LP.src = "src/img/symb/palceholderCarouselInst.jpg"

            carouselIMG32.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG3LP2.src = "src/img/symb/palceholderCarouselInst.jpg"

            carouselIMG33.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG3LP3.src = "src/img/symb/palceholderCarouselInst.jpg"
        }
        //PLACEHOLDER 4
        if (globalCarouselIMG4 == null || globalCarouselIMG4 == "") {
            carouselIMG4.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG4LP.src = "src/img/symb/palceholderCarouselInst.jpg"

            carouselIMG42.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG4LP2.src = "src/img/symb/palceholderCarouselInst.jpg"

            carouselIMG43.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG4LP3.src = "src/img/symb/palceholderCarouselInst.jpg"
        }
        //PLACEHOLDER 5
        if (globalCarouselIMG5 == null || globalCarouselIMG5 == "") {
            carouselIMG5.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG5LP.src = "src/img/symb/palceholderCarouselInst.jpg"

            carouselIMG52.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG5LP2.src = "src/img/symb/palceholderCarouselInst.jpg"

            carouselIMG53.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG5LP3.src = "src/img/symb/palceholderCarouselInst.jpg"
        }
        //PLACEHOLDER 6
        if (globalCarouselIMG6 == null || globalCarouselIMG6 == "") {
            carouselIMG6.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG6LP.src = "src/img/symb/palceholderCarouselInst.jpg"

            carouselIMG62.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG6LP2.src = "src/img/symb/palceholderCarouselInst.jpg"

            carouselIMG63.src = "src/img/symb/palceholderCarouselInst.jpg"
            carouselIMG6LP3.src = "src/img/symb/palceholderCarouselInst.jpg"
        }

        //PLACEHOLDER 7
        if (globalCarouselIMG7 == null || globalCarouselIMG7 == "") {
            carouselIMG7.src = "src/img/symb/palceholderCarouselInst.jpg"

            carouselIMG72.src = "src/img/symb/palceholderCarouselInst.jpg"

            carouselIMG73.src = "src/img/symb/palceholderCarouselInst.jpg"
        }
        //PLACEHOLDER 8
        if (globalCarouselIMG8 == null || globalCarouselIMG8 == "") {
            carouselIMG8.src = "src/img/symb/palceholderCarouselInst.jpg"

            carouselIMG82.src = "src/img/symb/palceholderCarouselInst.jpg"

            carouselIMG83.src = "src/img/symb/palceholderCarouselInst.jpg"
        }
    }

    //PLACEHOLDER 1
    carouselBox1.addEventListener('click', placeholder1);
    carouselBox1LP.addEventListener('click', placeholder1);

    carouselBox12.addEventListener('click', placeholder1);
    carouselBox1LP2.addEventListener('click', placeholder1);

    carouselBox13.addEventListener('click', placeholder1);
    carouselBox1LP3.addEventListener('click', placeholder1);

    //PLACEHOLDER 2
    carouselBox2.addEventListener('click', placeholder2);
    carouselBox2LP.addEventListener('click', placeholder2);

    carouselBox22.addEventListener('click', placeholder2);
    carouselBox2LP2.addEventListener('click', placeholder2);

    carouselBox23.addEventListener('click', placeholder2);
    carouselBox2LP3.addEventListener('click', placeholder2);

    //PLACEHOLDER 3
    carouselBox3.addEventListener('click', placeholder3);
    carouselBox3LP.addEventListener('click', placeholder3);

    carouselBox32.addEventListener('click', placeholder3);
    carouselBox3LP2.addEventListener('click', placeholder3);

    carouselBox33.addEventListener('click', placeholder3);
    carouselBox3LP3.addEventListener('click', placeholder3);

    //PLACEHOLDER 4
    carouselBox4.addEventListener('click', placeholder4);
    carouselBox4LP.addEventListener('click', placeholder4);

    carouselBox42.addEventListener('click', placeholder4);
    carouselBox4LP2.addEventListener('click', placeholder4);

    carouselBox43.addEventListener('click', placeholder4);
    carouselBox4LP3.addEventListener('click', placeholder4);

    //PLACEHOLDER 5
    carouselBox5.addEventListener('click', placeholder5);
    carouselBox5LP.addEventListener('click', placeholder5);

    carouselBox52.addEventListener('click', placeholder5);
    carouselBox5LP2.addEventListener('click', placeholder5);

    carouselBox53.addEventListener('click', placeholder5);
    carouselBox5LP3.addEventListener('click', placeholder5);

    //PLACEHOLDER 6
    carouselBox6.addEventListener('click', placeholder6);
    carouselBox6LP.addEventListener('click', placeholder6);

    carouselBox62.addEventListener('click', placeholder6);
    carouselBox6LP2.addEventListener('click', placeholder6);

    carouselBox63.addEventListener('click', placeholder6);
    carouselBox6LP3.addEventListener('click', placeholder6);

    //PLACEHOLDER 7
    carouselBox7.addEventListener('click', placeholder7);

    carouselBox72.addEventListener('click', placeholder7);

    carouselBox73.addEventListener('click', placeholder7);

    //PLACEHOLDER 8
    carouselBox8.addEventListener('click', placeholder8);

    carouselBox82.addEventListener('click', placeholder8);

    carouselBox83.addEventListener('click', placeholder8);

    imageRenderer();
}

rendererBoxes();

