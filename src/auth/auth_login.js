

import {
  Auth
} from 'aws-amplify';
// Sweet Alert2
import Swal from 'sweetalert2'
// Sign In function
export const signIn = async ({
  username,
  password
}) => {
  try {
    const {
      user
    } = await Auth.signIn(username, password);
    Swal.fire({
      backdrop: `
            rgba(0, 0, 0, 0.3)
          `,
      position: 'top-end',
      icon: 'success',
      title: "Redirecting to the dashboard.",
      showConfirmButton: false,
      timer: 2000
    });
    const t = 2000; //1 second

    setTimeout(function() {
      window.location = '/dashboard.html';
    }, t);

  } catch (error) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: error.message,
      showConfirmButton: true,
      timer: 2000
    });
    window.location = '/login.html'
  }
}
