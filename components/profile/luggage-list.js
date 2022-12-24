import ProfileItem from './profile-item';
import classes from './luggage-list.module.css';

function LuggageList(props) {
  return (
    <ul className={classes.list}>
      {props.profiles.map((profile) => (
        <ProfileItem
          key={profile.id}
          id={profile.id}
          title={profile.title}
          image={profile.image}
          address={profile.address}
          
          weight={profile.weight}
        />
      ))}
    </ul>
  );
}

export default LuggageList;