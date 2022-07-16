import {
  userAuthState
} from './auth_user';
// Sweet Alert2
import Swal from 'sweetalert2'

export function checkAuthContent() {
  // If not authenticated, pages with containing the id of 'authenticated-content' will redirect to login.html.
  if (document.querySelector("#authenticated-content")) {
    userAuthState()
      .catch(error => {
        Swal.fire({
          backdrop: `
            rgba(0, 0, 0, 0.3)
          `,
        //  position: 'top-end',
          icon: 'error',
          title: "You are not authenticated and will be redirected",
          showConfirmButton: false,
          timer: 2000
        });
        // Since this is the secret page and the user is not authenticated, redirect to the login page.
        const t = 2000; //1 second
        setTimeout(function() {
          window.location = '/login.html';
        }, t);
      });
  } else {
    // Merely putting this here so that the authentication state of other pages can be seen in Developer Tools
    userAuthState()
      .then(data => {
        console.log('user is authenticated: ', data);
      })
      .catch(error => {
        console.log('user is not authenticated: ', error);
      });
  }
}
