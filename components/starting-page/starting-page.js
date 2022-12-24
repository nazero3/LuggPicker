import classes from "./starting-page.module.css";
//import React, { useState } from "react";

function StartingPageContent() {
  
  return (
    <div>
      <section className={classes.starting}>
        <h1>Welcome on board</h1>
      </section>
      
    </div>
  );
}

// export default StartingPageContent;
// import { Fragment } from 'react';
// import Head from 'next/head';
// //import { MongoClient } from 'mongodb';

// import LuggageList from '../profile/luggage-list';

// function StartingPageContent(props) {
//   return (
//     <Fragment>
//       <Head>
//         <title>React Meetups</title>
//         <meta
//           name='description'
//           content='Browse a huge list of highly active React meetups!'
//         />
//       </Head>
//       <LuggageList profiles={props.profiles} />;
//     </Fragment>
//   );
// }

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export default StartingPageContent;
