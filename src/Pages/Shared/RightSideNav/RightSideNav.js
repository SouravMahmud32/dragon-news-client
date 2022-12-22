import React, { useContext } from "react";
import { FaGoogle, FaFacebook, FaWhatsapp, FaTwitter, FaDiscord, FaTwitch } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousal from "../BrandCaousal/BrandCarousal";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignin = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    } 
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignin} className="mb-2" variant="outline-primary">
          <FaGoogle></FaGoogle> Log In with Google
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find Us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2"><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaDiscord></FaDiscord> Discord</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousal></BrandCarousal>
      </div>
    </div>
  );
};

export default RightSideNav;
