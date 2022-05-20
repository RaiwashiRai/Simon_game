var clickedBtn = 0;
var level = 0;
var patrn = [];
var c = 0;

$("#red").click(function(){
    clickedBtn = 1;
    animation("#red");
    checkPlayerPatrn();});
$("#blue").click(function(){
    clickedBtn = 2;
    animation("#blue");
    checkPlayerPatrn();});
$("#yellow").click(function(){
    clickedBtn = 3;
    animation("#yellow");
    checkPlayerPatrn();});
$("#green").click(function(){
    clickedBtn = 4;
    animation("#green");
    checkPlayerPatrn();});


count = 0;
$("h1").click(function(e){
    count++;
    if(count == 1){
        generatePatrn(patrn);
        // alert(patrn);
    }
    if(count == 2){
        gameOver(1);
    }
});


function generatePatrn(patrn){
    $("h1").html(`level ${level+1}`);
    patrn.push(Math.floor(4*Math.random())+1);
    // alert(patrn);
    playPatrn(patrn);
}

function playPatrn(patrn){
    var x = "none";
    switch (patrn[patrn.length -1]) {
        case 1:
            x ="#red";
            break;
        case 2:
            x ="#blue";
            break;
        case 3:
            x ="#yellow";
            break;
        case 1:
            x ="#green";
            break;
        default:
            x = "none";
            break;
    }
    if (x != "none"){
        animation(x);
    }
}


function checkPlayerPatrn(){
    var audClick = new Audio('sounds/click.wav');
    audClick.play();
    
    if ((clickedBtn != 0) && (c != (level+1))){
        if (clickedBtn == patrn[c]){
            c++;
            if(c == level+1){
                level++;
                c = 0;
                setTimeout(function(){
                    generatePatrn(patrn);
                },300);
            }
        }
        else{
            gameOver(0);
        }
    }
}

function gameOver(q){
    if(q == 0){
        $("h1").html("Game Over!!");
        var aud = new Audio('sounds/buzz.wav');
        aud.play();
        $("body").css("backgroundColor", "red");
    }
    q = 1;
    clickedBtn = 0;
    level = 0;
    patrn = [];
    c = 0;
    count = 0;
    setTimeout(function(){
        $("h1").html("Press Any Key to start!!");
        $("body").css("backgroundColor", "rgb(2, 2, 95)");
    },1000);
}

function animation(x){
    $(x).addClass("pressed");
    setTimeout(function(){
        $(x).removeClass("pressed");
    }, 300);
}