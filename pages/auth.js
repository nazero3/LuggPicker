import AuthForm from "../components/auth/auth-form";
import {compare} from 'bcrypts';
function AuthPage(){
    return <AuthForm/>;
}

export default AuthPage;
export async function verifyPassword(somePass, password){
    const isValid = await compare(somePass, password);
    return isValid;
}