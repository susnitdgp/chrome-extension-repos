function myAlert(){
    alert('Button Clicked');
    chrome.runtime.sendMessage({greeting: "hello"});
}

function basicNotification(){
    console.log("Goswami Extensions: "+" basicNotification clicked ");
    let options = {
        type: 'basic',
        title: 'Basic Notification',
        message: 'This is a Basic Notification',
        iconUrl: 'images/get_started16.png'
      };
      chrome.notifications.create(options);
}

document.addEventListener('DOMContentLoaded', function () {
    console.log("Goswami Extensions: "+" DOMContentLoaded ");

    //submit button click event listener
    const sbmt = document.getElementById('sbmt');
    sbmt.addEventListener('click', myAlert);

    
    const basic = document.getElementById('basic');
    const progressNotif = document.getElementById('progress');
    const list = document.getElementById('list');

    basic.addEventListener('click',basicNotification);


});