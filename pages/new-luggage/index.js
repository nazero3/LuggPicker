import { Fragment } from 'react';
//import Head from 'next/head';
import { useRouter } from 'next/router';

import ProfileForm from '../../components/profile/profile-form'

function NewLuggPage() {
  const router = useRouter();

  async function addLuggHandler(enteredProfileData) {
    const response = await fetch('/api/user/new-luggage', {
      method: 'POST',
      body: JSON.stringify(enteredProfileData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(enteredProfileData);

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
      <ProfileForm onAddProfile={addLuggHandler} />
    </Fragment>
  );
}

export default NewLuggPage;