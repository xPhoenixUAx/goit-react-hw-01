import s from './Profile.modul.css';
import userData from './userData.json';
const Profile = ({ name, tag, location, avatar, stats }) => {
    return(
        <div className={s.wrapper}>
            <section className={s.card}>
                <div className={s.imgWrapper}>
                    <img src={userData.avatar}>
                    </div>
                    <h2>
                        {userData.name}
                    </h2>
    )

}
    
