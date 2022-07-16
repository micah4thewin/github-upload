

import { Auth } from 'aws-amplify';

// User Sign Up function
export const signUp = async ({ email, password }) => {
    console.log("signup triggered...");
    const username = email;    // As username is a required field, even if we use email as the username
    console.log("sending to Cognito...");

    try {
        const { user } = await Auth.signUp({
            username,
            email,
            password,
            attributes: {
                // other custom attributes
            }
        });
        console.log(user);
        window.location = '/signup_confirm.html#' + username;
    } catch (error) {
        console.log('error signing up:', error);
        // Redirect to login page if the user already exists
        if (error.name === "UsernameExistsException") {
            alert(error.message);
            window.location.replace("./login.html");
        }
    }
}



// Account confirmation function
export const confirmSignUp = async ({username, code}) => {
    try {
      const {result} = await Auth.confirmSignUp(username, code);
      console.log(result);
      alert("Account created successfully");
      window.location = '/login.html'

    } catch (error) {
        console.log('error confirming sign up', error);
        alert(error.message);
    }
};

// Resend confrimation code function
export const resendConfirmationCode = async (username) => {
    try {
        await Auth.resendSignUp(username);
        console.log('code resent successfully');
        alert('code resent successfully');
    } catch (error) {
        console.log('error resending code: ', error);
        alert(error.message);
    }
};
