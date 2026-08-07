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


// Один общий документ для тир-листа
const tierDoc = doc(db, "tierLists", "polka");


const selects = document.querySelectorAll("#page2 .tierSelect");


// ======================================
// СОХРАНЕНИЕ В FIREBASE
// ======================================

selects.forEach((select, index) => {

    select.addEventListener("change", async () => {

        const data = {};

        selects.forEach((item, i) => {
            data["item" + i] = item.value;
        });


        try {

            await setDoc(tierDoc, data);

            console.log("Тир-лист сохранён!");

        } catch (error) {

            console.error("Ошибка сохранения:", error);

        }

    });

});


// ======================================
// ПОЛУЧЕНИЕ ИЗ FIREBASE
// ======================================

onSnapshot(tierDoc, (snapshot) => {

    if (!snapshot.exists()) {
        return;
    }


    const data = snapshot.data();


    selects.forEach((select, index) => {

        const value = data["item" + index];


        if (value) {

            select.value = value;

            updateTier(select);

        }

    });

});