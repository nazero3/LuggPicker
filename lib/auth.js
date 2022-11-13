import {compare} from 'bcryptjs';

export async function verifyPassword(somePass, password){
    isValid = false;
    if(somePass === password)
         isValid = ture;
    return isValid;
}