function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewStr
    if(views<1000){
        viewStr = views; 
    }
    else if(views>1000000){
         viewStr = views/100000 +"M";
    }
    else{
         viewStr = views/1000 +"K"
    }
    let html=   `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
            <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div>
</div>`
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML +html
}


// To run copy paste the below in your browser console
//createCard("Introduction to Backend | JS - Programming #2", "Engineer_Aakash", 560000, 7, "13:22", "https://oracle-devrel.github.io/devo-image-repository/seo-thumbnails/JavaScript---Thumbnail-1200-x-630.jpg")
