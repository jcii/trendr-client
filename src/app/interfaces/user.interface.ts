export interface User { 
    username: string; // required, must be 5-8 characters
    password: string; // required, value must be equal to confirm password.
    passconf: string; // required, value must be equal to password.
}