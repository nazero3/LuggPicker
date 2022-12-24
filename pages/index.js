//import HomePage from "../components/starting-page/starting-page";

// import { Fragment } from 'react';
// //import Head from 'next/head';
// //import { MongoClient } from 'mongodb';
// //import { connectToDatabase } from "../lib/db";

// import LuggageList from '../components/profile/luggage-list';

// const dummy =[ {
//   id: 'm1',
//   title: 'first luggage',
//   image: 'asd',
//   address: '123',
//   description: 'first'
// },{
//   id: 'm2',
//   title: 'first luggage',
//   image: 'asd',
//   address: '123',
//   description: 'first'
// }]
// ;


// function HomePage(props) {
//   return (
//       <LuggageList profiles={dummy} />
    
//   );
// }

// export async function getStaticProps() {
//   // fetch data from an API
//   const client = await connectToDatabase(); 
//   const db = client.db();

//   const meetupsCollection = db.collection('users');

//   const profiles = await meetupsCollection.find().toArray();

//   client.close();

//   return {
//     props: {
//       profiles: profiles.map((profile) => ({
//         title: profile.title,
//         address: profile.address,
//         image: profile.image,
//         id: profile._id.toString(),
//       })),
//     },
//     revalidate: 1,
//   };
//}

//export default HomePage;

import StartingPageContent from "../components/starting-page/starting-page";

function HomePage(){
  return <StartingPageContent/>
}

export default HomePage;
