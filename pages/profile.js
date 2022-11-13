import UserProfile from "../components/profile/user-profile";
import {getSession} from 'next-auth/client';
function ProfilePage(){
    return <UserProfile/>
}

//this extra function is just for not seeing the loading sign 
//get session can also work in server side props not only in client side

export async function getServerSideProps(context){
    const session = await getSession({req: context.req}); // it will be null if user is not authenticated
    if(!session){
        return{
            redirect: {
                destination: '/auth',
                permanent: false,
            },
        }
    }

    return{
        props: {session},
    }

}

export default ProfilePage;