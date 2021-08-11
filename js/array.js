
const places = [
    {   place: "Boston, MA",
        descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "img/boston.jpeg"
    }
    , 
    {   place: "Denver, CO",
        descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "img/denver.png"
    }
    ,
    {   place: "Salt Lake City, UT",
        descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "img/utah.jpeg"
    }
]


// const cityContainerAlernate = document.querySelectorAll(".body");

// for(let i = 0; i<places.length; i++){
//     cityContainerAlernate[i].innerHTML += `
//     <img class='city-img' src='${places[i].img}'>
//         <div class='body-container'>
//             <p class='city'>${places[i].place}</p>
//             <p> ${places[i].descr}
//             </p>
//         </div>
//   ` 

// }
const cityContainer = document.getElementById("city-container");
    places.forEach( city => { 
        cityContainer.innerHTML += `<div class='body'>
        <img class='city-img' src='${city.img}'>
            <div class='body-container'>
                <p class='city'>${city.place}</p>
                <p> ${city.descr}
                </p>
            </div>
        </div>`
})