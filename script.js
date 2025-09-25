const score = document.getElementById("scorevalue");
const molebox = document.querySelector(".molebox");
const moles = document.querySelectorAll(".mole");
const restart = document.getElementById("bun");

const max =3;
const min = 1;

function acmole(){
    moles.forEach(mole =>{
        mole.classList.remove("active");

    }
    )
    let randmole = Math.floor(Math.random()* (max-min +1))+ min;
    const mole = document.querySelector(`#mole${randmole}`);
    if (mole) mole.classList.add('active');


}
setInterval(acmole, 500);
let valscore = 0;
moles.forEach(mole =>{
    mole.addEventListener("click", () => {
        if (mole.classList.contains("active")){
            valscore++;
            score.textContent = valscore;

        }
    })
}

)

function raina(){
    if(valscore == 5){
        clearInterval(acmole);
        document.getElementById("milo").style.display= 'block';

    }
}

function restartg (){
    valscore = 0;
    score.textContent = valscore;
    document.getElementById("milo").style.display = "none";
    acmole();

}
restart.addEventListener("click", restartg);
setInterval(raina, 100);
const res = document.getElementById("re");
res.addEventListener('click', restartg);