// ==================================
// 🌸 ЛЕПЕСТКИ САКУРЫ
// ==================================

const petals = document.getElementById("petals");

const petalColors = [
    "#ffd6e7",
    "#ffc1d9",
    "#ffb3d1",
    "#ffe5f0",
    "#fff0f6"
];


function createPetal(){

    if(!petals) return;


    const petal = document.createElement("div");

    petal.className = "petal";


    const size = Math.random()*20+10;


    petal.style.width = size+"px";
    petal.style.height = size+"px";


    petal.style.left =
    Math.random()*100+"vw";


    petal.style.background =
    petalColors[
        Math.floor(Math.random()*petalColors.length)
    ];


    petal.style.animationDuration =
    Math.random()*5+7+"s";


    petals.appendChild(petal);



    setTimeout(()=>{

        petal.remove();

    },12000);

}


setInterval(createPetal,250);





// ==================================
// 📸 ГАЛЕРЕЯ
// ==================================


const galleryImages =
document.querySelectorAll(".gallery img");


const viewer =
document.getElementById("viewer");


const bigImage =
document.getElementById("bigImage");


const close =
document.getElementById("close");


const next =
document.getElementById("next");


const prev =
document.getElementById("prev");



let currentImage = 0;



function openImage(index){

    currentImage=index;

    bigImage.src =
    galleryImages[currentImage].src;


    viewer.style.display="flex";

}



galleryImages.forEach((img,index)=>{


    img.onclick=()=>{

        openImage(index);

    };


});



next.onclick=()=>{


    currentImage++;


    if(currentImage>=galleryImages.length){

        currentImage=0;

    }


    bigImage.src =
    galleryImages[currentImage].src;

};



prev.onclick=()=>{


    currentImage--;


    if(currentImage<0){

        currentImage =
        galleryImages.length-1;

    }


    bigImage.src =
    galleryImages[currentImage].src;

};



close.onclick=()=>{

    viewer.style.display="none";

};



viewer.onclick=(e)=>{

    if(e.target===viewer){

        viewer.style.display="none";

    }

};




// ==================================
// 📱 СВАЙП
// ==================================


let startX=0;


viewer.addEventListener(
"touchstart",
(e)=>{

    startX =
    e.changedTouches[0].clientX;

});


viewer.addEventListener(
"touchend",
(e)=>{


    let endX =
    e.changedTouches[0].clientX;


    if(startX-endX>60){

        next.click();

    }


    if(endX-startX>60){

        prev.click();

    }

});





// ==================================
// 🎵 МУЗЫКА
// ==================================


const music =
document.getElementById("music");


const musicButton =
document.getElementById("musicButton");


const volume =
document.getElementById("volume");



if(music && musicButton && volume){


    music.volume=.5;


    musicButton.onclick=()=>{


        if(music.paused){


            music.play();


            musicButton.innerHTML =
            "⏸ Пауза";


        }else{


            music.pause();


            musicButton.innerHTML =
            "🎵 Музыка";


        }


    };



    volume.oninput=()=>{

        music.volume =
        volume.value;

    };

}





// ==================================
// 😂 УБЕГАЮЩАЯ КНОПКА
// ==================================


const noButton =
document.getElementById("noButton");


let tries = 0;


const messages=[

"не поймаешь ",

"неа ",

"почти",

"хаха",

"сюда",

"мимо ",

"ну всё",

"последняя попытка"

];




function moveNoButton(){


    tries++;


    if(tries>=8){


        noButton.style.opacity="0";


        setTimeout(()=>{


            noButton.remove();



            const text =
            document.createElement("h2");


            text.innerHTML =
            "Я знаю что ты улыбаешься)";


            text.className =
            "fade smileText";



            document
            .querySelector(".buttons")
            .appendChild(text);



        },500);


        return;

    }




    noButton.innerHTML =
    messages[tries];



    const area =
    document.querySelector(".buttons");



    const maxX =
    area.clientWidth -
    noButton.offsetWidth;



    const maxY =
    area.clientHeight -
    noButton.offsetHeight;



    noButton.style.position =
    "absolute";



    noButton.style.left =
    Math.random()*maxX+"px";



    noButton.style.top =
    Math.random()*maxY+"px";


}




// ПК

if(noButton){

    noButton.addEventListener(
    "mouseenter",
    ()=>{


        if(window.innerWidth>768){

            moveNoButton();

        }


    });



    // телефон

    noButton.addEventListener(
    "click",
    (e)=>{


        if(window.innerWidth<=768){


            e.preventDefault();


            moveNoButton();

        }


    });

}





// ==================================
// ✨ ЭФФЕКТ КНОПОК
// ==================================


document
.querySelectorAll("button")
.forEach(button=>{


    button.addEventListener(
    "click",
    ()=>{


        button.style.transform =
        "scale(.9)";


        setTimeout(()=>{


            button.style.transform="";


        },150);


    });


});




// ==================================
// 📄 СТРАНИЦЫ
// ==================================


function openGoodPage(){


    document
    .getElementById("mainPage")
    .classList.add("hidden");



    document
    .getElementById("goodPage")
    .classList.remove("hidden");


}



function backPage(){


    document
    .getElementById("goodPage")
    .classList.add("hidden");



    document
    .getElementById("mainPage")
    .classList.remove("hidden");


}