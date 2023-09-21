console.log("This is a popup!")

function myAlert(){
    alert('Button Clicked');
}

document.addEventListener('DOMContentLoaded', function () {
   document.getElementById('sbmt').addEventListener('click', myAlert);
});