import { distConv, loadJSON } from "./script.js";

let medStoreSect,
    msDataWrap,
    medStoreData,
    medKeys,
    medDistFltr = {
        Anantapur: [],
        Chittoor: [],
        "East Godavari": [],
        Guntur: [],
        Krishna: [],
        Kurnool: [],
        Prakasam: [],
        Nellore: [],
        Srikakulam: [],
        Visakhapatnam: [],
        Vizianagaram: [],
        "West Godavari": [],
        Kadapa: [],
    },
    imgLinks = [
        "newgen_pharm.jpg",
        "pharmacy.jpg",
        "med_store.jpg",
        "store.jpg",
    ];

loadJSON("../json/medStoreData.json").then((data) => {
    medStoreData = data;
    filterMedData(medStoreData);
});

function filterMedData(msData) {
    medKeys = Object.keys(msData[0]);
    msData.forEach((e, ind) => {
        medDistFltr[e[medKeys[0]]].push(ind);
    });
}

function putMSHeaderData(msSect, distName) {
    let h3El = `<h3 class="medStoreHead resSectHead">Medical Stores - <span>${distName}</span></h3>`;
    let msWrap = `<div class="container"></div>`;
    msSect.insertAdjacentHTML("beforeend", h3El);
    msSect.insertAdjacentHTML("beforeend", msWrap);
}

function loadMDintoDoc(arr) {
    msDataWrap = document.querySelector("#medStoreTabContainer > .container");
    arr.forEach((el, ind) => {
        let i = ind % imgLinks.length;
        let medEl = `<div class="med card">
    <div class="storecontainerL">
        <img src="img/${imgLinks[i]}" alt="">
    </div>
    <div class="storecontainerR">
        <h3>${el["Store Name"]}</h3>
        <h4>OPEN NOW</h4>
        <p>${el["Address"]}</p>
        <span><i class="fas fa-clock"></i> Working Hours: ${el["Working Hours"]}</span>
        <div class="flex-cc">
            <a href="tel:${el["Contact No"]}" title="${el["Contact No"]}"><i class="fa fa-phone-square"></i>Call</a>
            <a href="#"><i class="fa fa-map-marker"></i>Location</a>
            <a href="#" class="btn">
                Directions
                <span class="material-icons icon">open_in_new</span>
            </a>
        </div>
    </div>
</div>`;
        msDataWrap.insertAdjacentHTML("beforeend", medEl);
    });
}

export function loadMedData(distName) {
    // console.log(distConv[distName]); // display name

    medStoreSect = document.getElementById("medStoreTabContainer");
    putMSHeaderData(medStoreSect, distConv[distName]);

    // console.log(medKeys, medDistFltr);

    let fltrArr = medDistFltr[distConv[distName]].map((el) => {
        return medStoreData[el];
    });
    loadMDintoDoc(fltrArr, distConv[distName]);
}
