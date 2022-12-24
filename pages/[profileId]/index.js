import ProfileDetail from "../../components/profile/profile-detail";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../lib/db";
import { Fragment } from "react";

function Details(props) {
  return (
    <Fragment>
      <ProfileDetail
        image={props.profileData.image}
        title={props.profileData.title}
        address={props.profileData.address}
        description={props.profileData.description}
        weight={props.profileData.weight}
      />
    </Fragment>
  );
}
export async function getStaticPaths() {
    const client = await connectToDatabase();
    const db = client.db();
  
    const profileCollection = db.collection('meetups');
  
    const profiles = await profileCollection.find({}, { _id: 1 }).toArray();
  
    client.close();
  
    return {
      fallback: 'blocking',
      paths: profiles.map((meetup) => ({
        params: { meetupId: meetup._id.toString() },
      })),
    };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const profileId = context.params.profileId;

  const client = await connectToDatabase();
  const db = client.db();

  const profileCollection = db.collection("details");

  const selectedProfile = await profileCollection.findOne({
    _id: ObjectId(profileId),
  });

  client.close();

  return {
    props: {
      profileData: {
        id: selectedProfile._id.toString(),
        title: selectedProfile.title,
        address: selectedProfile.address,
        image: selectedProfile.image,
        description: selectedProfile.description,
      },
    },
  };
}

export default Details;
