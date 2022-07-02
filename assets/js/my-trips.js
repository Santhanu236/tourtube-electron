const tripFromLs = JSON.parse(localStorage.getItem('User-Bookings'));
function listTrip() {
    if (tripFromLs == null) {
        document.getElementById('trip-div').innerText = 'Your Trip list is Empty';
    } else{
        tripFromLs.forEach(listify);
    }
 }
listTrip();
function listify(item) {
    document.getElementById('trip-div').innerHTML += `<div>Touring Destination: <p>${item.destination}</p></div>
        <div>Date of Boarding: <p>${item.date_of_boarding}</p></div>
        <div>Date of Ending: <p> ${item.date_of_ending} </p> </div>
        <div> No. of Adults: <p>${item.no_of_adults}</p> </div> 
        <div> No. of Children: <p> ${item.no_of_children}</p> </div>
        <div> Applicant Details: <p> ${item.name} ${item.email} ${item.phone_number}</p> </div>
        <div> Payment Process: <p> Pending </p> <button class="btns-booking" >Confirm Payment</button> </div>
        `
}
