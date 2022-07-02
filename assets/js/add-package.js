
let imgInp = document.getElementById('file');
imgInp.onchange = function () {
    let files = imgInp.files;
    if (file) {
        document.getElementById('img').src = URL.createObjectURL(files[0]);
    }
};
let imgFile = document.getElementById("img");
let imgAsDataURL;
imgFile.addEventListener("load", function () {
    let imgCanvas = document.createElement("canvas"),
        imgContext = imgCanvas.getContext("2d");
    imgCanvas.width = imgFile.width;
    imgCanvas.height = imgFile.height;
    imgContext.drawImage(imgFile, 0, 0, imgFile.width, imgFile.height);
    imgAsDataURL = imgCanvas.toDataURL("image/png");
    try {
        localStorage.setItem("image-in-ls", imgAsDataURL);
    }
    catch (e) {
        console.log("Storage failed: " + e);
    } return imgAsDataURL;
}, false);

function getFromLs(key) {
    const fromLs = JSON.parse(localStorage.getItem(key));
    let returnData = [];
    if (fromLs != null) {
        returnData = fromLs;
    }
    return returnData;
}
function setToLs(key, data) {
    localStorage.setItem(key, data);
}
function addPackage() {
    const placeName = document.getElementById('place-name').value;
    const content = document.getElementById('content').value;
    const packObj = {
        'place_name': placeName,
        'cover_image': imgAsDataURL,
        'content': content
    }
    let packList = getFromLs('addedPackages');
    packList.push(packObj);
    setToLs('addedPackages', JSON.stringify(packList));
    alert('Package added Successfully!!');
}