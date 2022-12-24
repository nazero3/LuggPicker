import { React, useState, useRef } from "react";

import Card from "../ui/Card";
import classes from "./profile-form.module.css";

function ProfileForm(props) {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };
  const titleInputRef = useRef();
  const imageInputRef = image;
  const addressInputRef = useRef();
  const passportInputRef = useRef();
  const weightInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    //const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPassport = passportInputRef.current.value;
    const enteredWeight = weightInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: imageInputRef,
      address: enteredAddress,
      passport: enteredPassport,
      weight: enteredWeight,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Name and Surname</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Luggage Image</label>
          <input type='file' onChange={handleFileChange}  />
          {/* {image && <img src={image} alt="Selected Image" />} */}
        </div>
        
        <div className={classes.control}>
          <label htmlFor="address">Airport Name</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="passport">Passport id</label>
          <input type="number" required id="passport" ref={passportInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="weight">Weight KG</label>
          <input type="number" required id="weight" ref={weightInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default ProfileForm;
