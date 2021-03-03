import React, {useState} from "react";
import "./styles.css";
import background1 from "../../images/weightlossadd.jpg";
import background2 from "../../images/suckatcode.jpg";
import background3 from "../../images/ThatVeganTeacherMeme.jpg";
import SignIn from "../Login/SignIn";
import { Container } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Sidebar() {
    const [imageIndex, setImageIndex] = useState(0)
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
//   let indexOfImages = Math.floor(Math.random() * 3);
//   console.log(indexOfImages);

const imageReload = () => {
    let indexOfImages = Math.floor(Math.random() * 3);
  console.log(indexOfImages);
  setImageIndex(indexOfImages)
}

  return (
    <div className="whole">
      <SignIn />
      <br></br>
      <br></br>
    <h6>Ads By Griff -</h6>
      {/* <div style={{background: `url(${photos[indexOfImages].url})`}}
        id="adPic" height={photos[indexOfImages].height} width={photos[indexOfImages].width}>
        </div> */}
        <Container fluid>
        <img src={photos[imageIndex].url} id="adPic" alt='ad'></img>
         <AiOutlineCloseCircle id='close' onClick={imageReload}/>
       </Container>
        <div className="row padding light-border">
        </div>
    </div>
  );
}
export default Sidebar;
