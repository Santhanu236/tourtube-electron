### html-project-template
# Netlify Link : https://tourtubeapp-ui-santhanu.netlify.app/
# SonarCloud Link: https://sonarcloud.io/project/overview?id=fwsa-batch-02_tourtubeapp-ui
# Main Link : https://tourtube.fwsa.in/

### Features
1. Login Page (Completed)
2. Registration page (Completed)
3. Forgot password (completed)
4. Tour booking (completed)
5. My trips (completed)
6. Adding Tour-Packages by Admin (completed) 
7. Tour Packages (completed)
8. user query to admin(on progress)
### Register Page

* All inputs fields are mandatory
* Username can't be empty and username should contain atleast 3 characters , username should not contain any number.
* Email Id should contain atleast two characters before "@" and should have "."
* Password should have minimum 8 characters and it should have atleast one uppercase and special chracter

### Login Page

* All the input fields are manadatory to login in the account.
* Email and Password should be registered already in the localstorage if it doesn't match the user is asked to create a account
* Both the fields should match to the details already stored even anyone of the field doesn't match it will show an alert
* If all the fields are matched correctly the user will be redirected to the main page

### Forgot password Page
* A 6 digit random code is sent to the users registered email.
* Un-registered email is not accepted.
* New password and confirm password input boxes unlocks, after entering the correct 6 digit code.
* The new password is update to the local storage, and redirects to the login page.

### Tour Booking Feature:
* Trip is booked and stored in Local storage.
* All input fields are mandatory, except the photo file input (optional).
* Name should contain atleast 3 characters, name should not contain any numbers in it.

### My trips:
* If the stored list is empty , "your trip list is empty" is printed.
* If the trip exists, trips are listed, in ordered manner.

### Adding tour-packages (Admin):
* The details about the tour Package is collected and stored in Local storage.
* Input fields are mandatory
* Place Name must contain atleast 3 characters.


### Tour-Packages:
* The stored tour packages are listed in both Tour packages page and in main(home) page in ordered manner.