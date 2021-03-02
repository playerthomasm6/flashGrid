import React from "react";
import "./styles.css";
import background1 from "../../images/weightlossadd.jpg";
import background2 from "../../images/suckatcode.jpg";
import background3 from "../../images/ThatVeganTeacherMeme.jpg";
import SignIn from "../Login/SignIn";
// import adImages from "../../images/images";

function Sidebar() {
  const photos = [{
    id: 0,
    url: background1,
  },
  {
    id: 1,
    url: background2,
  },
  {
    id: 2,
    url: background3,
  }

] 
  const indexOfImages = Math.floor(Math.random() * 3);
  console.log(indexOfImages);

  return (
    <div className="whole">
      <SignIn />
      <br></br>
      <br></br>
    <h6>Ads By Griff -</h6>
      <div style={{background: `url(${photos[indexOfImages].url})`}}
        id="adPic" height={photos[indexOfImages].height} width={photos[indexOfImages].width}>
        </div>
        <div className="row padding light-border">
        </div>
    </div>
  );
}
export default Sidebar;
