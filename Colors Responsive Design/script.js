let i = 0;  // starting position of color 

function changebackColor() {
    let colors = ["Beige", "BurlyWood", "CadetBlue", "DarkCyan",
        "DarkGrey", "DarkSeaGreen", "DimGrey", "Lavender", "IndianRed"];

    document.getElementById("bgcolor")
        .style.background = colors[i++] // initial is 0 .. as we click on button it will go to Beige and so on



    if (i > colors.length - 1)// index start with 0 and in order to get to last element we have to make it to -1
    {
        i = 0; // at the last index set it to 0 to return it to the first color
    }
}