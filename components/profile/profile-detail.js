import classes from './profile-detail.module.css';
import Image from 'next/image';
function ProfileDetail(props) {
  return (
    <section className={classes.detail}>
      <Image
        src={props.image}
        alt={props.title}
        width={300}
        height={300}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <h2>{props.weight}</h2>
      <p>{props.description}</p>
    </section>
  );
}

export default ProfileDetail;
