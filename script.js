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

    const petal = document.createElement("div");

    petal.className = "petal";


    const size = Math.random() * 20 + 10;


    petal.style.width = size + "px";
    petal.style.height = size + "px";


    petal.style.left = Math.random() * 100 + "vw";


    petal.style.background =
        petalColors[
            Math.floor(Math.random()*petalColors.length)
        ];


    const duration = Math.random()*5 + 7;

    petal.style.animationDuration = duration + "s";


    petal.style.animationDelay =
        Math.random()*3 + "s";


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
[
    ...document.querySelectorAll(".gallery img")
];


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

    if(currentImage >= galleryImages.length){

        currentImage=0;

    }


    bigImage.src =
    galleryImages[currentImage].src;

};



prev.onclick=()=>{

    currentImage--;

    if(currentImage < 0){

        currentImage =
        galleryImages.length-1;

    }


    bigImage.src =
    galleryImages[currentImage].src;

};



close.onclick=()=>{

    viewer.style.display="none";

};



viewer.onclick=(event)=>{

    if(event.target===viewer){

        viewer.style.display="none";

    }

};



// 📱 свайп пальцем

let startX=0;


viewer.addEventListener("touchstart",(event)=>{

    startX =
    event.changedTouches[0].clientX;

});


viewer.addEventListener("touchend",(event)=>{


    let endX =
    event.changedTouches[0].clientX;


    if(startX-endX > 60){

        next.click();

    }


    if(endX-startX > 60){

        prev.click();

    }

});




// ==================================
// 🎵 МУЗЫКА
// ==================================


// 🎵 Музыка

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");
const volume = document.getElementById("volume");


if (music && musicButton && volume) {


    music.volume = 0.5;


    volume.value = 0.5;


    musicButton.onclick = () => {


        if (music.paused) {


            music.play();


            musicButton.innerHTML =
            "⏸ Пауза";


        } else {


            music.pause();


            musicButton.innerHTML =
            "🎵 Музыка";


        }

    };


    volume.oninput = () => {


        music.volume = volume.value;


    };


}




// ==================================
// 😂 УБЕГАЮЩАЯ КНОПКА
// ==================================


const noButton =
document.getElementById("noButton");

let noClicks = 0;


noButton.addEventListener("mouseenter", ()=>{

    noClicks++;

    noButton.style.position="fixed";

    noButton.style.left =
    Math.random()*80+"vw";

    noButton.style.top =
    Math.random()*80+"vh";


    if(noClicks>=8){

        noButton.style.opacity="0";


        let text=document.createElement("h2");


        text.innerHTML =
        " Я знаю что ты улыбаешься)";

        


        text.className="fade smileText";


        document.querySelector(".buttons")
        .appendChild(text);

    }

});

const noLink =
document.getElementById("noLink");


let tries = 0;


const messages = [

" Не очень",

" не поймаешь",

" неа",

" сюда",

" почти",

" хаха",

" ну все",

" последняя попытка"

];



function moveNoButton(){


    tries++;


    if(tries >= 8){


        noButton.style.transition=".5s";

        noButton.style.opacity="0";


        setTimeout(()=>{


            noLink.remove();


            const text=document.createElement("h2");


            text.innerHTML =
           " я знаю что ты улыбаешься)";


            text.style.color="pink";


            document
            .querySelector(".buttons")
            .appendChild(text);


        },500);


            ;

    }



    noButton.innerHTML =
    messages[tries];


    const box = document.querySelector(".buttons");

const rect = box.getBoundingClientRect();


const x =
rect.left + Math.random() * (rect.width - 220);


const y =
rect.top + Math.random() * (rect.height - 60);



noButton.style.position="fixed";

noButton.style.left=x+"px";

noButton.style.top=y+"px";


}



// ПК — только убегает

noButton.addEventListener(
"mouseenter",
()=>{

    if(window.innerWidth > 768){

        moveNoButton();

    }

});



// Телефон — только по нажатию

noButton.addEventListener(
"click",
(e)=>{


    if(window.innerWidth <= 768){

        e.preventDefault();

        moveNoButton();

    }

});



// ==================================
// ✨ Эффект кнопки при клике
// ==================================

document.querySelectorAll("button")
.forEach(button=>{


button.addEventListener("click",()=>{


    button.style.transform="scale(.9)";


    setTimeout(()=>{

        button.style.transform="";

    },150);


});


});
function openGoodPage(){

    document.getElementById("mainPage")
    .classList.add("hidden");


    document.getElementById("goodPage")
    .classList.remove("hidden");

}



function backPage(){

    document.getElementById("goodPage")
    .classList.add("hidden");


    document.getElementById("mainPage")
    .classList.remove("hidden");

}

