let op=document.getElementsByClassName("op");
let click=false;
let seq=[];
let compChoice=Math.floor(Math.random()*3);
let congrats=document.getElementById("congrats");
let compScore=document.getElementById("compScore");
let perScore=document.getElementById("perScore");
let computerScore=0;
let personScore=0;

const params=new URLSearchParams(window.location.search);
let name=params.get('name');
console.log(name);
perScore.innerHTML=`${name}`+": 0";;

for(let i=3;i<op.length;i++){

    op[i].addEventListener("mouseover",()=>{
        if(click==false){
        op[i].style.border="10px solid rgb(0, 255, 217)";}
    })

    op[i].addEventListener("mouseout",()=>{
        if(click==false){
            if(mode=="dark"){
            op[i].style.border="10px solid white";}
            if(mode=="light"){
            op[i].style.border="10px solid rgb(0, 0, 0)";}
        }
    })

    op[i].addEventListener("click",(event)=>{
        click=true;
            op[i].style.border="10px solid rgb(23, 255, 2)";
            op[i].style.pointerEvents="none";
            for(let j=3;j<op.length;j++){
            if(j!==i){
                op[j].style.pointerEvents="none";}
            }
            op[compChoice].style.border="10px rgb(0, 255, 217) solid";


            for(let k=0;k<3;k++){
                if(compChoice==win[k][0] && i==win[k][1]){
                    congrats.innerHTML="🎉 Congratulations, You Won!";
                    personScore++;
                    perScore.innerHTML=`${name}`+":"+personScore;

                }
                else if(compChoice==lose[k][0] && i==lose[k][1]){
                    congrats.innerHTML="😢 Oops, You Lost!";
                    computerScore++;
                    compScore.innerHTML="Computer:"+ computerScore;
                }
                else if(compChoice==draw[k][0] && i==draw[k][1]){
                    congrats.innerHTML="😐 It's a Draw!";
                }
            }
    })
}

/* Reset button */
let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
    click=false;
    for(let i=3;i<op.length;i++){
        op[i].style.pointerEvents="auto";
        if(mode=="dark"){
            op[i].style.border="10px solid white";
        }
        else if(mode=="light"){
            op[i].style.border="10px solid black";
        }
        op[compChoice].style.border="10px solid black";
        compChoice=Math.floor(Math.random()*3);
    }
    congrats.innerHTML="";
})

/* Dark Mode/ Light Mode */
let header=document.getElementById("header");
let DarkMode=document.getElementById("DarkMode");
let mode="light";
DarkMode.addEventListener("click",()=>{
    if(mode=="light"){
        DarkMode.innerHTML="Light Mode";
        mode="dark";
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        DarkMode.style.border="2px solid black";
        for(let i=0;i<op.length;i++){
            op[i].style.border="10px solid white";
        }
        DarkMode.style.backgroundImage="url(images/light-mode.png)";
        header.style.backgroundColor="white";
        header.style.color="black";
        /* here the starting border is white */
    }
    else if(mode=="dark"){
        DarkMode.innerHTML="Dark Mode";
        mode="light";
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        DarkMode.style.border="2px solid white";
        for(let i=0;i<op.length;i++){
            op[i].style.border="10px solid black";
        }
        DarkMode.style.backgroundImage="url(images/dark-mode.png)";
        header.style.backgroundColor="black";
        header.style.color="white";
         /* here the starting border is black */
    }
})
DarkMode.addEventListener("mouseover",()=>{
    if(mode=="dark"){
        DarkMode.style.backgroundImage="url(images/light-mode.png)";
        DarkMode.style.backgroundPosition="center";
        DarkMode.style.backgroundSize="100%";
        DarkMode.style.color="transparent";
        DarkMode.style.border="2px solid black";
        
    }
    else if(mode=="light"){
        DarkMode.style.backgroundImage="url(images/dark-mode.png)";
        DarkMode.style.backgroundPosition="center";
        DarkMode.style.backgroundSize="100%";
        DarkMode.style.color="transparent";
        DarkMode.style.border="2px solid white";
        
    }
})
DarkMode.addEventListener("mouseout",()=>{
    DarkMode.style.backgroundImage="none";
    DarkMode.style.color="white";
    DarkMode.style.border="none";
})

const win =[
    [0,4],
    [1,5],
    [2,3],
]
const draw=[
    [0,3],
    [1,4],
    [2,5],
]
const lose=[
    [0,5],
    [1,3],
    [2,4],]


if(performance.navigation.type==1){
            window.location.href = '/start.html';
        }

