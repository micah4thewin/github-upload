const body = document.body;
const page = body.innerHTML;
import navigation from './html/navigation.html';
import footer from './html/footer.html';
// Amplify
import Amplify from "aws-amplify";
import { Auth } from 'aws-amplify';
import aws_exports from "./aws-exports.js";
// Auth
import { userAuthState } from './auth/auth_user';
import { checkAuthContent } from './auth/auth_content';
import { signUp, confirmSignUp, resendConfirmationCode } from './auth/auth_signup';
import { signIn } from './auth/auth_login';
import { forgotPass, confirmForgotPass } from './auth/auth_forgot_password';
import { signOut } from './auth/auth_logout';
// API
import { updateWebsite } from './api/website-update';
Amplify.configure(aws_exports);
// Animation
import AOS from 'aos';

AOS.init();
// Images
import logo from './images/logo.png';
// Get the path
const urlPath = window.location.pathname;
if (urlPath != "/editor.html") {
  // Set page content with nav and footer
  body.innerHTML = navigation + page + footer;
  const navLogo = document.getElementById('nav-logo');
  // Change the copyright
  const copyRight = document.getElementById('copyright'); // Auto Update Copyright
  const currentYear = new Date().getFullYear();
  copyRight.innerHTML = 'Copyright Code Casually ©' + currentYear;
  navLogo.src = logo;
  // Get buttons and images
  const loginButton = document.getElementById('nav-login');
  const logoutButton = document.getElementById('nav-logout');
  const signupButton = document.getElementById('nav-signup');
  userAuthState()
    .then(data => {
      loginButton.style.display = "none";
      signupButton.style.display = "none";
      // Event Listener for Sign Out button
      if (document.querySelector("#nav-logout")) {
        document.querySelector("#nav-logout").addEventListener("click", () => {
          signOut();
        })
      };
      if (urlPath != "/dashboard.html") {
        window.location.pathname = "/dashboard.html";
      } else {
        window.scrollTo(0, 0);
        // DOM
        const websiteList = document.getElementById('websiteRG');
        const createItemButton = document.getElementById('createwebsiteButton');
        const websiteTitleInput = document.getElementById('websiteName');
        const websiteDescriptionInput = document.getElementById('websiteDescription');
        const closewebsiteModal = document.getElementById('closewebsiteModal');
        const websiteTitleInputUpdate = document.getElementById('websiteNameUpdate');
        const websiteDescriptionInputUpdate = document.getElementById('updateWebsiteDescriptionUpdate');
        const udpateWebsiteButton = document.getElementById('updateWebsiteButton');
        const deleteMe = document.getElementById('deleteME');
        // Events
        showWebsites();
        createItemButton.addEventListener("click", function() {
          console.log("The create website button was clicked");
          const site = createwebsite(websiteTitleInput.value, websiteDescriptionInput.value, false);
          site.then(data => {
              console.log(data);
            })
            .catch(error => {
              console.error(error);
            });
          websiteTitleInput.value = "";
          websiteDescriptionInput.value = "";
        });
        closewebsiteModal.addEventListener("click", function() {
          websiteTitleInput.value = "";
          websiteDescriptionInput.value = "";
        });
        updateWebsiteButton.addEventListener("click", function() {
          updateWebsite(this.dataset.id, websiteTitleInputUpdate.value, websiteDescriptionInputUpdate.value, false);
          websiteTitleInputUpdate.value = "";
          websiteDescriptionInputUpdate.value = "";
        });
      };

    })
    .catch(error => {
      if (logoutButton) {
        logoutButton.style.display = "none";
      };
      if (signupButton) {
        signupButton.style.display = "none";
      };
      // Event Listeners if user is on Account confirmation page
      if (document.querySelector("#auth-signup-confirm")) {
        // Populate the email address value
        let username_value = location.hash.substring(1);
        document.querySelector("#formSignUpConfirmEmail").setAttribute("value", username_value);
        document.querySelector("#form-auth-signup-confirm").addEventListener("click", event => {
          event.preventDefault();
        });
        document.querySelector("#btnConfirm").addEventListener("click", () => {
          let username = document.querySelector("#formSignUpConfirmEmail").value
          const code = document.querySelector("#formSignUpConfirmCode").value
          console.log({
            username,
            code
          });
          confirmSignUp({
            username,
            code
          });
        });
        document.querySelector("#btnResend").addEventListener("click", () => {
          let username = document.querySelector("#formSignUpConfirmEmail").value
          resendConfirmationCode(username);
        });
      };
      // Event Listeners if user is on the Sign Up page
      if (document.querySelector("#auth-signup")) {
        document.querySelector("#form-auth-signup").addEventListener("submit", event => {
          event.preventDefault(); // Prevent the browser from reloading on submit event.
        });
        document.querySelector("#btnSignUp").addEventListener("click", () => {
          const email = document.querySelector("#formSignUpEmail").value
          const password = document.querySelector("#formSignUpPassword").value
          signUp({
            email,
            password
          });
        });
      };
      // Event Listeners if user is on Login page
      if (document.querySelector("#auth-login")) {

        document.querySelector("#form-auth-login").addEventListener("click", event => {
          event.preventDefault();
        });
        document.querySelector("#btnLogin").addEventListener("click", () => {
          console.log("The login button has fired.");
          const username = document.querySelector("#formLoginEmail").value
          const password = document.querySelector("#formLoginPassword").value

          signIn({
            username,
            password
          });
        });
      };
      // Event Listeners on the Confirm New Password page (after Forgot Password page)
      if (document.querySelector("#auth-forgot-password-confirm")) {
        // Populate the email address value
        let username_value = location.hash.substring(1);
        document.querySelector("#formForgotConfirmEmail").setAttribute("value", username_value);
        document.querySelector("#form-auth-forgot-password-confirm").addEventListener("click", event => {
          event.preventDefault();
        });
        document.querySelector("#btnConfirmForgot").addEventListener("click", () => {
          const username = document.querySelector("#formForgotConfirmEmail").value
          let code = document.querySelector("#formForgotConfirmCode").value
          let password = document.querySelector("#formForgotConfirmPassword").value
          confirmForgotPass(username, code, password);
        });
      };
      // Event Listeners if user is on Forgot Password page
      if (document.querySelector("#auth-forgot-password")) {
        document.querySelector("#form-auth-forgot-password").addEventListener("click", event => {
          event.preventDefault();
        });
        document.querySelector("#btnForgot").addEventListener("click", () => {
          const username = document.querySelector("#formForgotEmail").value
          forgotPass({
            username
          });
        });
      };
    });
};

// Dashboard Imports
// API
import {
  DataStore
} from '@aws-amplify/datastore';
// API
import {
  createwebsite
} from './api/website-create.js';
import {
  deleteItem
} from './api/website-delete.js';
import {
  showWebsites
} from './api/website-query.js';
import {
  updateWebsit
} from './api/website-update.js';

checkAuthContent();

AOS.init();
