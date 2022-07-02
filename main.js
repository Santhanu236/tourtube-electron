const { app, BrowserWindow } = require("electron");
const url = require("url");

function newApp() {
  let win = new BrowserWindow();
  win.loadURL(
    url.format({
      pathname: "index.html",
      slashes: true
    })
  );
  win.setMenuBarVisibility(false);

}

app.on("ready", newApp);
let loggedInUser = getFromLs('loggedin_user');
if (loggedInUser != null) {
  if (loggedInUser[1] == "Admin") {
    document.getElementById(
      "btn-area"
    ).innerHTML = `<button class="btns" style="background-color:green;" onclick="logOut()">Log Out</button>
        <a href="./pages/add-packages.html"><button class="btns">Add</button></a><div id="username-box"><img src="./assets/img/avatar.png" style="height:17px;">Admin</div>`;
  } else {
    document.getElementById("btn-area").innerHTML =
      '<button class="btns" style="background-color:green;" onclick="logOut()">Log Out</button>' +
      `<span id="username-box"><img src="./assets/img/avatar.png" style="height:17px;"> ${loggedInUser[1]}</span>`;
  }
}
function getFromLs(key) {
    return JSON.parse(localStorage.getItem(key));
}
function loginRecommendation() {
  if (loggedInUser === null) {
    if (confirm("Please Login to get more Touring details!")) {
      window.location.href = "./pages/tourlogin.html";
    }
  }
}
setTimeout(loginRecommendation, 5000);
function bookPlace(place) {
  const tourDestin = JSON.stringify(place);
  localStorage.setItem("tour-place", tourDestin);
  window.location.href = "./pages/booking.html";
}
function logOut() {
  localStorage.removeItem("loggedin_user");
  window.location.reload();
}

function listNewPackages() {
  const packFromLs = JSON.parse(localStorage.getItem("addedPackages"));
  if (packFromLs != null) {
    packFromLs.forEach(alignPackage);
  }
}
listNewPackages();

function alignPackage(item) {
  document.getElementById("tour-content").innerHTML += `<div>
    <div><a href=""><h1 class='tph'>${item.place_name}</h1><img src="${item.cover_image}" class='tpi' alt=""></a></div>
      <br>
    <div>${item.content}</div> <br>
    <button type="button" class="btns-booking" onclick="bookPlace('${item.place_name}')">Book now</button>
    </div>`;
}

function searchPackages() {
    const bar = document.getElementById('search-bar');
    bar.onchange = filterFunc();
};
//searchPackages();
function filterFunc(event) {
    event.preventDefault();
    let searchInput = document.getElementById('search-bar').value;
    const packFromLs = getFromLs('addedPackages');
    let i;
    for(i = 0; i < packFromLs.length; i++){
        let package = packFromLs[i];
        let packName = package.place_name.toLowerCase();
        // console.log(packName)
        let include_bool = packName.includes(searchInput);
        console.log(include_bool);
        if (include_bool){
            document.getElementById('tour-content-heading').style.display = 'none';
            document.getElementById('trip-ideas').style.display = 'none';
            document.getElementById('trip-ideas-heading').style.display = 'none';
            document.getElementById('tour-content').innerHTML='';
            alignPackage(package)
        }
        else{
            pagePopUp('Search not found!');
        }
    }
}


function pagePopUp(msg) {
    document.getElementById('pop-section').innerHTML = `<div id="pop-up"><p>${msg}</p><button onclick="removePopUp()" class="btns">Ok</button></div>`;
}
function removePopUp() {
    document.getElementById('pop-section').style.display = 'none';
}
