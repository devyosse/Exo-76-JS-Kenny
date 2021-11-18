let kenny = document.getElementById('kenny');
let dead = 0;

/*
document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);

    if (t === 0){
      kenny.style.top = '0px';
    }
    else{
        t = t - 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
});
*/


/*
document.getElementById('down').addEventListener('click',function() {

    let t = parseInt(document.getElementById('kenny').style.top);

    if(t === 470){
        kenny.style.right = '470px'
    }
    else{
        t = t + 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
});
*/

/*
document.getElementById('left').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);

    if(t === 70) {
        kenny.style.left = '0px';
        alert('Kenny est mort')
        kenny.style.top = '200px';
        kenny.style.left = '200px';
        dead++;
        document.getElementById('dead').innerText = dead.toString();
    }
    else {
        t = t - 10;
        document.getElementById('kenny').style.left = t + 'px';
    }
});
*/
/*
document.getElementById('right').addEventListener('click',function() {

    let t = parseInt(document.getElementById('kenny').style.left);

    if(t === 470){
        kenny.style.right = '470px';
    }
    else{
        t = t + 10;
        document.getElementById('kenny').style.left = t + 'px';
    }
});
*/


function up(){
    let t = parseInt(kenny.style.top);
    if (t === 0){
        kenny.style.top = '0';
    }
    else {
        t = t - 10;
        kenny.style.top = t + 'px';
    }
}

function down(){
    let t = parseInt(kenny.style.top);

    if(t === 470){
        kenny.style.right = '470px'
    }
    else{
        t = t + 10;
        kenny.style.top = t + 'px';
    }
}


function left(){
    let t = parseInt(kenny.style.left);

    if(t === 70) {
        kenny.style.left = '0px';
        alert('Kenny est mort')
        kenny.style.top = '200px';
        kenny.style.left = '200px';
        dead++;
        document.getElementById('dead').innerText = dead.toString();
    }
    else {
        t = t - 10;
        kenny.style.left = t + 'px';
    }

}

function right(){
    let t = parseInt(kenny.style.left);

    if(t === 470){
        kenny.style.right = '470px';
    }
    else{
        t = t + 10;
       kenny.style.left = t + 'px';
    }
}



window.addEventListener('keydown', function (e) {
    console.log("test");

    switch (e.key) {
        case 'ArrowLeft':
            left();
            break;

        case 'ArrowRight':
            right();
            break;

        case 'ArrowUp':
            up();
            break;

        case 'ArrowDown':
            down();
            break;
    }

});
