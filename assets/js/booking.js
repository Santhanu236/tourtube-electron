var imgInp = document.getElementById('file');
imgInp.onchange = function () {
  let files = imgInp.files;
  if (file) {
    document.getElementById('avatar').src = URL.createObjectURL(files[0]);
    console.log(URL.createObjectURL(files[0]));
  }
};
function dateLimitations() {
  const data = new Date();
  let month = JSON.stringify(data.getMonth() + 1);
  let date = JSON.stringify(data.getDate());
  if (date.length == 1) {
    date = '0' + date;
  }
  if (month.length == 1) {
    month = "0" + month;
  }
  const today = `${data.getFullYear()}-${month}-${date}`
  document.getElementById('board-date').min = `${today}`;
  document.getElementById('end-date').min = `${today}`;
}
dateLimitations();
let userBookings = [];
function onPageLoad() {
  let getFromLs = JSON.parse(localStorage.getItem("User-Bookings"));
  if (getFromLs != null) {
    userBookings = getFromLs;
  }
  const loggedInUser = localStorage.getItem('loggedin_user');
  if (loggedInUser == null) {
    alert('Please Login, before Booking!');
    window.location.href = "../../pages/tourlogin.html";
  }
}
onPageLoad();
function bookTrip() {
  const name = document.getElementById('name_box').value;
  const email = document.getElementById('email_box').value;
  const ccode = document.getElementById('ccode_box').value;
  const phno = document.getElementById('phno_box').value;
  const nAdults = document.getElementById('nAdults').value;
  const nChildren = document.getElementById('nChildren').value;
  const boardDate = document.getElementById('board-date').value;
  const endDate = document.getElementById('end-date').value;
  const place = JSON.parse(localStorage.getItem('tour-place'));
  const payMethod = document.getElementById('pay-select').value;
  const tripObj = {
    "name": name,
    "email": email,
    "phone_number": ccode + phno,
    "no_of_adults": nAdults,
    "no_of_children": nChildren,
    "date_of_boarding": boardDate,
    "date_of_ending": endDate,
    "payment_method": payMethod,
    "destination": place
  }
  userBookings.unshift(tripObj);
  localStorage.setItem('User-Bookings', JSON.stringify(userBookings));
  alert('Your Booking is Successfull!');
  window.location.href = "./../../index.html";
}

function paySelection() {
  const payMethod = document.getElementById('pay-select').value;
  console.log()
  if (payMethod == 'card') {
    document.getElementById('payment-div').innerHTML = `<img src="../assets/img/visa.svg" style="height:50px;">
    <img src="../assets/img/mastercard.svg" style="height:50px;"> <br>
    <img src='../assets/img/payment-card.png' class='payimg'> 
    <input type="number" placeholder="Card Number" minlength="16" maxlength="16" required>
    <input type='number' placeholder="MM" style="width:100px;" minlength="2" maxlength="2" required> / 
    <input type="number" placeholder="YY"  style="width:100px;" minlength="2" maxlength="2" required> <br>
    <input type="number" placeholder="CVV Number" minlength="3" maxlength="3" required> <br>
    <input type="text" placeholder="Card Holder Name" required> <br>
    `
  } else if (payMethod == 'upi') {
    document.getElementById('payment-div').innerHTML = `<img src='../assets/img/payment-upi.png' class='payimg'>
    <input type="email" placeholder="UPI ID" required>
    <input type="text" placeholder="Billing Address" required>
    `
  } else {
    document.getElementById('payment-div').innerHTML = `<img src='../assets/img/payment-net-banking.png' class='payimg'>
    <input type="text" placeholder="Bank Name" required> <br>
    <input type="text" placeholder="Account Holder Name" required> <br>
    <input type="number" minlength="4" maxlength="4" placeholder="Net Banking Pin" required> <br>
    `
  }
}
paySelection();
