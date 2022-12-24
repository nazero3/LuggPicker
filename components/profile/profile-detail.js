import classes from './profile-detail.module.css';

function ProfileDetail(props) {
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <h2>{props.weight}</h2>
      <p>{props.description}</p>
    </section>
  );
}

export default ProfileDetail;
