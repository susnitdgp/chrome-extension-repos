function myAlert(){
    alert('Button Clicked');
}

document.addEventListener('DOMContentLoaded', function () {
    console.log("This is a popup!")
    document.getElementById('sbmt').addEventListener('click', myAlert);
});