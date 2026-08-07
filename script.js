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

const nextMusicButton =
document.getElementById("nextMusicButton");

const playlist = [

    "music1.mp3",

    "music2.mp3",

    "music3.mp3",

    "music4.mp3",

    "music5.mp3"

];

let currentSong = 0;



if(music && musicButton && volume){

    music.src = playlist[currentSong];


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

nextMusicButton.onclick = () => {

    const wasPlaying = !music.paused;

    currentSong++;

    if(currentSong >= playlist.length){

        currentSong = 0;

    }

    music.src = playlist[currentSong];

    music.load();

    if(wasPlaying){

        music.play();

    }

};





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

"сюды",

"не нормалды",

"мимо ",

"опять",

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
            "давай не надо";


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
noButton.offsetHeight -
20;



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

// ================================
// НОВОЕ МЕНЮ
// ================================

let visitedPages = [false,false,false];

function hideAllPages(){

    document
    .querySelectorAll(".container")
    .forEach(page=>{

        page.classList.add("hidden");

    });

}

function openMenu(){

    hideAllPages();

    document
    .getElementById("menuPage")
    .classList.remove("hidden");

}

function backMenu(){

    openMenu();

}

function openPage(id){

    hideAllPages();

    const page = document.getElementById("page"+id);

    if(page){
        page.classList.remove("hidden");
    }


    if(id<=3){

        visitedPages[id-1]=true;

        checkPages();

    }


    if(id === 4){

        startLetter();

    }

}

function checkPages(){

    if(
        visitedPages[0] &&
        visitedPages[1] &&
        visitedPages[2]
    ){

        document
        .getElementById("page4Button")
        .classList.remove("hidden");

    }

}

function openFinalMenu(){

    hideAllPages();

    document
    .getElementById("finalMenu")
    .classList.remove("hidden");

}

function restartSite(){

    location.reload();

}

function openGameAgain(){

    hideAllPages();

    document
    .getElementById("gamePage")
    .classList.remove("hidden");

    startGame();

}




// ==================================
// 📄 СТРАНИЦЫ
// ==================================


function openGoodPage(){

    hideAllPages();

    document
    .getElementById("gamePage")
    .classList.remove("hidden");

    startGame();

}



function backPage(){

    hideAllPages();

    document
    .getElementById("mainPage")
    .classList.remove("hidden");



}

const gameArea =
document.getElementById("gameArea");

const counter =
document.getElementById("ballCounter");

const gameText =
document.getElementById("gameText");


const colors = [

"#ff4f8b",
"#4fc3ff",
"#7dff7d",
"#ffd84f",
"#c06cff",
"#ff884f",
"#6cf2ff",
"#ff66aa"

];


let ballsLeft = 10;



function startGame(){

    gameArea.innerHTML="";

    ballsLeft=10;

    counter.innerHTML="Осталось: 10";

    document.getElementById("nextPageButton").classList.add("hidden");
    restartGameButton.classList.add("hidden");

    for(let i=0;i<10;i++){

        createBall();

    }

}






function createBall(){

    const ball =
    document.createElement("div");

    ball.className="ball";


    ball.style.background =
    colors[
        Math.floor(Math.random()*colors.length)
    ];


    let x =
    Math.random()*
    (gameArea.clientWidth-80);


    let y =
    Math.random()*
    (gameArea.clientHeight-80);


    let dx =
    (Math.random()*2+1)*
    (Math.random()<0.5?-1:1);


    let dy =
    (Math.random()*2+1)*
    (Math.random()<0.5?-1:1);


    ball.style.left=x+"px";

    ball.style.top=y+"px";


    gameArea.appendChild(ball);




    const move = setInterval(()=>{


        x+=dx;

        y+=dy;


        if(x<=0 || x>=gameArea.clientWidth-70){

            dx=-dx;

        }


        if(y<=0 || y>=gameArea.clientHeight-70){

            dy=-dy;

        }


        ball.style.left=x+"px";

        ball.style.top=y+"px";


    },20);




    let popped = false;

ball.onclick = () => {

    if(popped) return;

    popped = true;

    clearInterval(move);

    ball.style.pointerEvents = "none";

    ball.style.transform = "scale(2)";

    ball.style.opacity = "0";

    setTimeout(() => {

        ball.remove();

    }, 200);

    ballsLeft--;

    counter.innerHTML =
    "Осталось: " + ballsLeft;

    if(ballsLeft === 0){

        finishGame();

    }

};


}




function finishGame(){

    gameText.innerHTML = "все можно дальше";

    counter.innerHTML = "ты полина я понял";

    const nextButton =
document.getElementById("nextPageButton");

nextButton.classList.remove("hidden");
nextButton.classList.add("gameButtonShow");

restartGameButton.classList.remove("hidden");
restartGameButton.classList.add("gameButtonShow");

}   
const nextButton = document.getElementById("nextPageButton");

restartGameButton.onclick = () => {

    startGame();

};

nextButton.onclick = () => {

    openMenu();

};

music.onended = () => {

    currentSong++;

    if(currentSong >= playlist.length){

        currentSong = 0;

    }

    music.src = playlist[currentSong];

    music.play();

};
// ===================================
// TIER LIST
// ===================================

const tierColors={

    S:"#ff4fa1",

    A:"#ff914d",

    B:"#4fc3ff",

    C:"#6edb7c",

    D:"#888888"

};



function updateTier(select){

    select.style.background=tierColors[select.value];

}
// ===================================
// СОХРАНЕНИЕ 3 СТРАНИЦЫ
// ===================================

const saveTierButton =
document.getElementById("saveTierButton");

if(saveTierButton){

saveTierButton.onclick = ()=>{

    document
    .querySelectorAll("#page3 input")
    .forEach(input=>{

        input.disabled = true;

    });

    document
    .querySelectorAll("#page3 select")
    .forEach(select=>{

        select.disabled = true;

    });

    saveTierButton.disabled = true;

    saveTierButton.innerHTML =
    "Сохранено";

    document
    .getElementById("saveMessage")
    .classList.add("show");

};

}           
function backHome(){

    document
    .querySelectorAll(".container")
    .forEach(page=>{

        page.classList.add("hidden");

    });

    document
    .getElementById("mainPage")
    .classList.remove("hidden");

}
// ===================================
// 💌 ФИНАЛЬНОЕ ПИСЬМО
// ===================================

let letterStarted = false;
let letterTimer;


function startLetter(){

    if(letterStarted) return;

    letterStarted = true;


    const source = 
    document.getElementById("letterSource");


    const text = 
    document.getElementById("letterText");


    const signature = 
    document.querySelector(".letterSignature");


    const buttons =
    document.querySelector(".letterButtons");


    const menuButton =
    document.getElementById("letterMenuButton");


    const restartButton =
    document.getElementById("letterRestartButton");



    if(!source || !text) return;



    text.innerHTML = "";

    signature.style.opacity = "0";

    buttons.classList.remove("show");

    menuButton.style.display = "none";

    restartButton.style.display = "none";



    const letter = source.value;



    let index = 0;



    letterTimer = setInterval(()=>{


        if(index >= letter.length){


            clearInterval(letterTimer);



            signature.style.opacity = "1";



            setTimeout(()=>{


                menuButton.style.display = "inline-block";

                restartButton.style.display = "inline-block";


                buttons.classList.add("show");


            },500);



            return;


        }



        text.innerHTML += letter[index];


        index++;


    },40);


}
