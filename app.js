const levelCons = document.querySelectorAll("#my-level section");
console.log(levelCons);

if(levelCons.length > 0){
    for(const levelCon of levelCons){
        levelView(levelCon);
    }
}

function levelView(levelCon){

    const inputs = levelCon.querySelectorAll("input");

    console.dir(inputs.keys());

    const represent = document.createElement("div");
    represent.className = "represent";

    const steps = document.createElement("div");
    steps.className = "steps";

    let title = document.createElement("h3");

    title.innerText = "";

    for(let i=0 ; i<5 ; i++){
        const div = document.createElement("div");
        div.innerText = i+1;
        steps.appendChild(div);
    }

    levelCon.appendChild(represent);
    levelCon.appendChild(steps);

}