import { Fragment } from 'react';
//import Head from 'next/head';
import { useRouter } from 'next/router';

import ProfileForm from '../../components/profile/profile-form'

function NewLuggPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/user/new-luggage', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(enteredMeetupData);

    router.push('/profile');
  }

  return (
    <Fragment>
      {/* <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing networking opportunities.'
        />
      </Head> */}
      <ProfileForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewLuggPage;