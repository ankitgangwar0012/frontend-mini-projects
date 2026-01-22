function switchColor(bgColor){
    const colors=["red","brown","orange","green","#003fb4","#333"]; // can add more colors here

    const randomIndex= Math.floor(Math.random()* colors.length);

    const selectedColor= colors[randomIndex];
    document.documentElement.style.setProperty('--bgColor',selectedColor);

}