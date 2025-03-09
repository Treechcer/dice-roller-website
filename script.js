function rollTheDice(){
    let y = Math.ceil(Math.random() * 6);
    return y;
}

function display(num){
    if (num == 1){
        for (let i = 1; i <= 9; i++){
            if (i == 5){
                document.getElementById(i).style.visibility = "visible";
                continue;
            }
            document.getElementById(i).style.visibility = "hidden";
        }
    }

    else if (num == 2){
        for (let i = 1; i <= 9; i++){
            if (i == 7 || i == 3){
                document.getElementById(i).style.visibility = "visible";
                continue;
            }
            document.getElementById(i).style.visibility = "hidden";
        }
    }

    else if (num == 3){
        for (let i = 1; i <= 9; i++){
            if (i == 7 || i == 3 || i == 5){
                document.getElementById(i).style.visibility = "visible";
                continue;
            }
            document.getElementById(i).style.visibility = "hidden";
        }
    }

    else if (num == 4){
        for (let i = 1; i <= 9; i++){
            if (i == 7 || i == 3 || i == 1 || i == 9){
                document.getElementById(i).style.visibility = "visible";
                continue;
            }
            document.getElementById(i).style.visibility = "hidden";
        }
    }

    else if (num == 5){
        for (let i = 1; i <= 9; i++){
            if (i == 7 || i == 3 || i == 1 || i == 9 || i == 5){
                document.getElementById(i).style.visibility = "visible";
                continue;
            }
            document.getElementById(i).style.visibility = "hidden";
        }
    }

    else if (num == 6){
        for (let i = 1; i <= 9; i++){
            if (i == 7 || i == 3 || i == 1 || i == 9 || i == 4 || i == 6){
                document.getElementById(i).style.visibility = "visible";
                continue;
            }
            document.getElementById(i).style.visibility = "hidden";
        }
    }
}


window.onload = function(){
    for (let i = 1; i <= 9; i++){
        document.getElementById(i).style.visibility = "hidden"
    }
}