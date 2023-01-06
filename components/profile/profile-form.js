import { React, useState, useRef } from "react";
//import { Button, Grid } from "@nextui-org/react";
import Card from "../ui/Card";
import classes from "./profile-form.module.css";

function ProfileForm(props) {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  const handleFileChange = (changeEvent) => {
    // const file = event.target.files[0];
    // setImage(URL.createObjectURL(file));
    const reader = new FileReader();

    reader.onload = function(event) {
      setImageSrc(event.target.result);
      setUploadData(undefined);
    }

    reader.readAsDataURL(changeEvent.target.files[0]);
    
  };
 
  const titleInputRef = useRef();
  const imageInputRef = imageSrc;
  const addressInputRef = useRef();
  const passportInputRef = useRef();
  const weightInputRef = useRef();
  const descriptionInputRef = useRef();

  
  async function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef;
    const enteredAddress = addressInputRef.current.value;
    const enteredPassport = passportInputRef.current.value;
    const enteredWeight = weightInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      passport: enteredPassport,
      weight: enteredWeight,
      description: enteredDescription,
    };

    props.onAddProfile(meetupData);
    
      //event.preventDefault();
  
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');

    const formData = new FormData();

    for ( const file of fileInput.files ) {
      formData.append('file', file);
    }

    formData.append('upload_preset', 'my-upload');

    const data = await fetch('https://api.cloudinary.com/v1_1/duill6sid/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());
    console.log(data);
    setImageSrc(data.secure_url);
    setUploadData(data);
    console.log(data.secure_url);
    
  }
  

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Name and Surname</label>
          <input type="text" required id="title" ref={titleInputRef} />
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
        
          <label htmlFor="image">Luggage Image </label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
          />
        
          <button>Add new luggage</button>
        </div>
        
      </form>
      
      
    </Card>
  );
}

export default ProfileForm;
