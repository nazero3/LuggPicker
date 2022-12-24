import UserProfile from "../components/profile/user-profile";
import LuggageList from "../components/profile/luggage-list";
import ProfileForm from "../components/profile/profile-form";
import { connectToDatabase } from "../lib/db";
import { getSession } from "next-auth/client";

function ProfilePage(props) {
  return (
  <LuggageList profiles={props.profiles}/>
  );
}

//this extra function is just for not seeing the loading sign
//get session can also work in server side props not only in client side

// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req }); // it will be null if user is not authenticated
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/auth",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }
export async function getStaticProps() {
  // fetch data from an API
  const client = await connectToDatabase();
  const db = client.db();

  const profilesCollection = db.collection('details');

  const profiles = await profilesCollection.find().toArray();
  // console.log(profiles[1]);

  client.close();

  return {
    props: {
      profiles: profiles.map((profile) => ({
        title: profile.title,
        image: profile.image,
        address: profile.address,
        passport: profile.passport,
        weight: profile.weight,
        id: profile._id.toString(),
      })),
    },
    revalidate: 1,
  };
}


export default ProfilePage;
