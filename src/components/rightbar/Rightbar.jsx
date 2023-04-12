import './rightbar.css';
import {Users} from "../../dummyData";
import Online from '../online/Online';

export default function Rightbar({profile}) {

  const HomeRightbar = () =>{
    return(
      <>
        <div className="birthdayContainer">
            <img className='birthdayImg' src="/assets/gift.png" />
            <span className="birthdayText">
              <b>Manish</b> and <b>three other friends</b> have a birthday today. 
            </span>
          </div>
          <img src="/assets/ad.png" className="rightbarAdd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((u)=>(
              <Online key={u.id} user={u} />
            ))}
          </ul>
      </>
    )
  }

  const ProfileRightbar = () =>{
    return(
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City :</span>
            <span className="rightbarInfoValue">Noida</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From :</span>
            <span className="rightbarInfoValue">Gorakhpur</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship :</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
          <h4 className='rightbarTitle'>User Friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Manish</span>
            </div>
            <div className="rightbarFollowing">
              <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Harish</span>
            </div>
            <div className="rightbarFollowing">
              <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Yash</span>
            </div>
            <div className="rightbarFollowing">
              <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Rishikesh</span>
            </div>
            <div className="rightbarFollowing">
              <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Asar</span>
            </div>
            <div className="rightbarFollowing">
              <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Abu</span>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
          {profile ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
    </div>
  )
}
