var feedbackList = [];

function loadFromLs() {
    const getFromLS_feedbackList = JSON.parse(localStorage.getItem('feedbackList'));
    if (getFromLS_feedbackList != null){
        feedbackList = getFromLS_feedbackList;
        feedbackList.forEach(displayFeedback);
    }
}
loadFromLs();

function submitFeedback(event) {
    event.preventDefault();
    //Step 1: 
    const feedback = document.getElementById('feedback-input').value;
    //Step 2: Validation
    let getFromLsCurrentEmail = JSON.parse(localStorage.getItem('loggedin_user'));
    const current = new Date();
    const month = current.getMonth() +1;
    const dateTime = current.getDate()+'/'+month+'/'+current.getFullYear()+' '+current.getHours()+':'+current.getMinutes(); 
    if (getFromLsCurrentEmail == null){
        getFromLsCurrentEmail = 'Anonymous';
    } else {
        getFromLsCurrentEmail = getFromLsCurrentEmail[1]
    }
    renderFunction(getFromLsCurrentEmail, feedback, dateTime);
}
function renderFunction(getFromLsCurrentEmail, feedback, dateTime) {
    const feedbackObj = {
        'username' : getFromLsCurrentEmail,
        'feedback': feedback,
        'dateTime': dateTime,
    }
    feedbackList.push(feedbackObj);
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
    window.location.reload();
}
function displayFeedback(item) {
    document.getElementById('feedback-area').innerHTML += 
    `<div id="fb-div">
        <div id="name">${item.username}</div>
         <br> <div id="time-div">${item.dateTime}</div>
    <div> ${item.feedback}</div> </div>`
}

