function req(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(response => response.json())
        .then(json => {
            const idd = json.id;
            const title = json.title;
            const body = json.body;
            document.getElementById(`newsId${id}`).innerHTML = idd;
            document.getElementById(`newsTitle${id}`).innerHTML = title;
            document.getElementById(`newsContent${id}`).innerHTML = body;

        });
}
let play = document.getElementById("play");
let recordStop = document.getElementById("recordStop");
recordStop.addEventListener("click", Record);
function Record(){
    console.log("Started");
    recordStop.removeEventListener("click", Record);
    recordStop.addEventListener("click", Stop);
    recordStop.value = "Stop";
}
function Stop(){
    console.log("Stopped");
    recordStop.removeEventListener("click", Stop);
    recordStop.addEventListener("click", Record);
    recordStop.value = "Record";
}
recordStop = document.getElementById("recordStop");
recordStop.addEventListener("click", Start);
function Start(){
    this.style.backgroundColor ="red";
    recordStop.removeEventListener("click", Start);
    recordStop.addEventListener("click", Stop);
    recordStop.value = "Stop";
}
function Stop(){
    this.style.backgroundColor ="green";
    recordStop.removeEventListener("click", Stop);
    recordStop.addEventListener("click", Start);
    recordStop.value = "Record";
}
let arr = [];
let span;
container1.addEventListener("click", function (event){
    span = event.target;
    arr.push(1);
    return arr
})
container2.addEventListener("click", function (event){
    span = event.target;
    arr.push(2);
    return arr
})
container3.addEventListener("click", function (event){
    span = event.target;
    arr.push(3);
    return arr
})
container4.addEventListener("click", function (event){
    span = event.target;
    arr.push(4);
    return arr
})
container5.addEventListener("click", function (event){
    span = event.target;
    arr.push(5);
    return arr
})
container6.addEventListener("click", function (event){
    span = event.target;
    arr.push(6);
    return arr
})
container7.addEventListener("click", function (event){
    span = event.target;
    arr.push(7);
    return arr
})
container8.addEventListener("click", function (event){
    span = event.target;
    arr.push(8);
    return arr
})
container9.addEventListener("click", function (event){
    span = event.target;
    arr.push(9);
    console.log(arr);
    return arr
})

for (let j = 0; j < arr.length; j++) {
    if (j===1){
    recordStop.addEventListener("click", copy);
    function copy() {
                let TToriginal = document.getElementById("container1");
                let TTclone = TToriginal.cloneNode(true);
                play.addEventListener("click", paste);
                function paste(){
                    TToriginal.parentNode.appendChild(TTclone);
        }}
}}

            // else if(j ===2) {
            //     let TToriginal = document.getElementsByClassName("hide")[1];
            //     let TTclone = TToriginal.cloneNode(true);
            // }
            // else if(j ===3) {
            //     let TToriginal = document.getElementsByClassName("hide")[2];
            //     let TTclone = TToriginal.cloneNode(true);
            // }
            // else if(j ===4) {
            //     let TToriginal = document.getElementsByClassName("hide")[3];
            //     let TTclone = TToriginal.cloneNode(true);
            // }
            // else if(j ===5) {
            //     let TToriginal = document.getElementsByClassName("hide")[4];
            //     let TTclone = TToriginal.cloneNode(true);
            // }
            // else if(j ===6) {
            //     let TToriginal = document.getElementsByClassName("hide")[5];
            //     let TTclone = TToriginal.cloneNode(true);
            // }
            // else if(j ===7) {
            //     let TToriginal = document.getElementsByClassName("hide")[6];
            //     let TTclone = TToriginal.cloneNode(true);
            // }
            // else if(j ===8) {
            //     let TToriginal = document.getElementsByClassName("hide")[7];
            //     let TTclone = TToriginal.cloneNode(true);
            // }
            // else if(j ===9) {
            //     let TToriginal = document.getElementsByClassName("hide")[8];
            //     let TTclone = TToriginal.cloneNode(true);
            // }

    //     play.addEventListener("click", paste);
    //     function paste(){
    //         TToriginal.parentNode.appendChild(TTclone);
    // }}}
recordStop.addEventListener("click", clearBox);
function clearBox() {
    for (let i = 1; i < 10; i++) {
        let node = document.getElementById(`${i}`);
        while (node.hasChildNodes()) {
            node.removeChild(node.firstChild);
        }
    }}