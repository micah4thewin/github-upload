

import { Auth } from 'aws-amplify';

// Forgot password function
export const forgotPass = async ({username}) => {
    try {
        const { user } = await Auth.forgotPassword(username);
        console.log(user)
        alert("Password reset request sent");
        window.location = '/forgot_confirm.html#' + username;
    } catch (error) {
        console.log('error signing in', error);
        alert(error.message);
        window.location = '/login.html'
    }
}

// Confirm New Password function
export const confirmForgotPass = async (username, code, new_password) => {
    try {
        await Auth.forgotPasswordSubmit(username, code, new_password);
        alert("New password confirmation sent");
        window.location = '/login.html'
    } catch (error) {
        console.log('error confirming new password', error);
        alert(error.message);
    }
}
