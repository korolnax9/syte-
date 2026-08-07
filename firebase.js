import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getFirestore,
    doc,
    setDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDZvLvRegKnWCRisvFvC5ekM79d2_HBfn8",
    authDomain: "animeguy-cat.firebaseapp.com",
    projectId: "animeguy-cat",
    storageBucket: "animeguy-cat.firebasestorage.app",
    messagingSenderId: "705075928095",
    appId: "1:705075928095:web:9ef41b2b3c8d076b7ac92a",
    measurementId: "G-HWSXQXHN75"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// =================================================
// СТРАНИЦА 3 — ТИР-ЛИСТ ПОЛИНЫ
// =================================================

const page3 = document.getElementById("page3");

const inputs = document.querySelectorAll("#page3 input");

const selects3 =
    document.querySelectorAll("#page3 .tierSelect");

const saveButton =
    document.getElementById("saveTierButton");


// Документ Firebase
const polkaTierDoc =
    doc(db, "tierLists", "polkaAnswers");


// =================================================
// СОХРАНЕНИЕ
// =================================================

async function savePolkaTier(){

    const data = {

        inputs: [],

        selects: []

    };


    // Сохраняем написанные ответы

    inputs.forEach(input => {

        data.inputs.push(input.value);

    });


    // Сохраняем оценки S/A/B/C/D

    selects3.forEach(select => {

        data.selects.push(select.value);

    });


    try {

        await setDoc(
            polkaTierDoc,
            data
        );

        console.log(
            "Ответы Полины сохранены!"
        );


    } catch(error) {

        console.error(
            "Ошибка Firebase:",
            error
        );

    }

}


// =================================================
// КНОПКА СОХРАНИТЬ
// =================================================

if(saveButton){

    saveButton.addEventListener(
        "click",
        savePolkaTier
    );

}


// =================================================
// ПОЛУЧАЕМ ОТВЕТЫ В РЕАЛЬНОМ ВРЕМЕНИ
// =================================================

onSnapshot(
    polkaTierDoc,
    (snapshot) => {

        if(!snapshot.exists()){

            return;

        }


        const data =
            snapshot.data();


        // -----------------------------
        // ТЕКСТОВЫЕ ОТВЕТЫ
        // -----------------------------

        if(data.inputs){

            inputs.forEach(
                (input, index) => {

                    if(
                        data.inputs[index]
                        !== undefined
                    ){

                        input.value =
                            data.inputs[index];

                    }

                }
            );

        }


        // -----------------------------
        // ОЦЕНКИ
        // -----------------------------

        if(data.selects){

            selects3.forEach(
                (select, index) => {

                    if(
                        data.selects[index]
                        !== undefined
                    ){

                        select.value =
                            data.selects[index];

                        updateTier(select);

                    }

                }
            );

        }

    }
);