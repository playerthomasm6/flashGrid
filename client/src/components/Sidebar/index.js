import React from "react";
import "./styles.css";
import AccountBar from "../AccountBar";
import background1 from "../../images/weightlossadd.jpg";
import background2 from "../../images/suckatcode.jpg";
import background3 from "../../images/ThatVeganTeacherMeme.jpg";
import SignIn from "../SignIn/SignIn";
// import adImages from "../../images/images";
import index from "../AccountBar";

function Sidebar() {
  const photos = [{
    id: 0,
    url: background1,
    height: 550,
    width: 500,
  },
  {
    id: 1,
    url: background2,
    height: 600,
    width: 430,
  },
  {
    id: 2,
    url: background3,
    height: 520,
    width: 430,
  }

] 
  const indexOfImages = Math.floor(Math.random() * 3);
  console.log(indexOfImages);

  return (
    <div className="whole">
      <SignIn />
      {/* <AccountBar/> */}
      <br></br>
      <br></br>
    <h6>Ads By Griff -</h6>
      <div style={{background: `url(${photos[indexOfImages].url})`}}
        id="adPic" height={photos[indexOfImages].height} width={photos[indexOfImages].width}>
        </div>
        <div className="row padding light-border">
          <div className="col padding">
            <h6>This is a title of a thing</h6>
            <p>
              This is describing that thing in more detail. Think of all the
              helpfull information we could add here. Maybe some tips or other
              kinds of words and such. The skys the limits.
            </p>
          </div>
        </div>
    </div>
  );
}
export default Sidebar;
