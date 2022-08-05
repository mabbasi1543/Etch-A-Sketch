


let color = "orange";
const colorPicker = document.getElementById("color");


document.getElementById("sizeText").innerText = `size : ${ document.getElementById("sliderSize").value} x ${ document.getElementById("sliderSize").value}`;
colorPicker.addEventListener("input", (event)=> color = event.target.value);


document.getElementById("reset").addEventListener("click", () =>render(document.getElementById("sliderSize").value));


let fade = true;
document.getElementById("fade").addEventListener("click", () => {
    fade = !fade
    document.getElementById("fade").textContent = fade;
});


document.getElementById("optionsButton").addEventListener("click", () => options());

let select = document.getElementById('options');
let action = select.options[select.selectedIndex].value;

function options (){
    action = select.options[select.selectedIndex].value;
    render(document.getElementById("sliderSize").value);
}


document.getElementById("sliderSize").addEventListener("change", () => {
    render(document.getElementById("sliderSize").value);
    document.getElementById("sizeText").innerText = `size : ${ document.getElementById("sliderSize").value} x ${ document.getElementById("sliderSize").value}`;
});


function render (size = 64){
    const div = document.getElementById("grid");
    div.innerHTML = "";
    for (let i = 0 ;i < size ; i++){
        const pixelCol = document.createElement("div");
        pixelCol.classList.add("pixel-column");

        for (let J = 0 ;J < size ; J++){
            const pixel = document.createElement("div");
            pixel.classList.add("pixel-row");
            pixelCol.appendChild(pixel);
        }
        div.appendChild(pixelCol);

    }
    pixel = document.querySelectorAll(".pixel-row")

    for (let i = 0; i < pixel.length; i++) {
        let item = pixel[i];

        item.addEventListener("mouseover", (e) => {
            console.log(action)
            if (e.buttons > 0 && action == "drag"){
            e.target.style.backgroundColor = color;
            if (fade == true){
            setTimeout(() => {
                e.target.style.backgroundColor = "";
                }, 500); 
            }
            }else if (e.buttons == 0 && action == "hover"){
                e.target.style.backgroundColor = color;
                if (fade == true){
                setTimeout(() => {
                    e.target.style.backgroundColor = "";
                    }, 500); 
                }
            }
        })
    }
}


render();

