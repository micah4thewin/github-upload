
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
Amplify.configure(aws_exports);
// Sweet Alert2
import Swal from 'sweetalert2'
