const places = [
    {   place: "Boston, MA",
        descr: "asdf ",
        img: "img/boston.jpg"
    }
    , 
    {   place: "Denver, CO",
        descr: " asdf",
        img: "img/denver.png"
    }
    ,
    {   place: "Salt Lake City, UT",
        descr: " asf",
        img: "img/utah.jpg"
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