console.log("script running...");

function genCard(VideoTitle, cName, views, monthsOld, duration, thumbnail) {
    console.log("function running...");
    let cont = document.querySelector('.container');
    let card = document.createElement('div');
    card.className = 'card';

    //thumbnail node create
    let thumb = document.createElement('div');
    thumb.className = 'thumbnail';
    console.log(VideoTitle, thumbnail)
    thumb.innerHTML = `<img src="${thumbnail}" alt="thumbnail" title='${VideoTitle}'>
    <span>${duration}`;
    card.append(thumb);

    //content node create
    let contentNode = document.createElement('div');
    contentNode.className = "card-content";
    contentNode.innerHTML = `<h2>${VideoTitle}</h2>
    <span>${cName}</span>
    <span>${viewCount(views)} views</span>
    <span>${monthsOld} months ago</span>`
    card.append(contentNode);
    cont.append(card);
}

function viewCount(views) {
    if (views >= 1000 && views < 1000000) {
        return `${Math.floor(views / 1000)}K`;
    }
    else if (views >= 1000000) {
        return `${Math.floor(views / 1000000)}M`;
    }
    else {
        return views
    }
}

//card details
let VideoTitle, cName, views, monthsOld, duration, thumbnail;
VideoTitle = "Lets fun | Manali travel tour | Full details #Bagpacker";
cName = "Bagpacker";
views = 727000;
monthsOld = 2;
duration = "31:20";
thumbnail = "assets/thumbnail.jpg";