import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import GoogleIcon from "@mui/icons-material/Google";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GroupsIcon from "@mui/icons-material/Groups";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Navbar from "../Navbar/Navbar";

function InviteFriend() {
  const IconCard = (color) => {
    return {
      backgroundColor: color,
      borderRadius: "40px",
      color: "white",
      padding: "10px 15px",
      margin: "20px",
    };
  };
  const CardI = (props) => {
    const createCard = {
      borderRadius: 5,
      color: props.Color,
      padding: props.padding || "20px",
      backgroundColor: props.backColor || "white",
      margin: props.margin || "20px",
      width: props.width || "inherit",
    };
    return <div style={createCard}>{props.children}</div>;
  };
  const data =
    "https://mui.com/material-ui/react-app-bar/#app-bar-with-search-field";
  return (
    <div
      style={{ backgroundColor: "#e7fbec", padding: "2%", textAlign: "center" }}
    >
          <Navbar/>

      <CardI backColor="#8181ff" Color="white" margin="0">
        <Card.Title style={{ fontSize: "40px", padding: "20px" }}>
          Refer Friends & Earn Credit
        </Card.Title>
        <Card.Text>Introduce a friend and you'll be credited</Card.Text>
      </CardI>
      <CardI margin="0" padding="50px">
        <Card.Title style={{ fontSize: "40px" }}>
          Share my referal link with friends
        </Card.Title>
        <div style={{ padding: "40px" }}>
          <input
            style={{ height: "35px", width: "80%" }}
            placeholder={data}
            disabled
          />
          <Button
            type="success"
            onClick={() => navigator.clipboard.writeText(data)}
          >
            Copy
          </Button>
          <br />
        </div>
        <span style={IconCard("grey")}>
          <GoogleIcon />
          <ContactPhoneIcon /> Import Contacts
        </span>
        <span style={IconCard("blue")}>
          <FacebookIcon /> Facebook
        </span>
        <span style={IconCard("blue")}>
          <LinkedInIcon />
          LinkedIn
        </span>
        <span style={IconCard("blue")}>
          <TwitterIcon />
          Twitter
        </span>
        <span style={IconCard("blue")}>
          <EmailIcon />
          Email
        </span>
      </CardI>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <CardI width="23%">
          <p>24</p>
          <p>
            <GroupsIcon />
          </p>
          <p>nhoujh</p>
        </CardI>
        <CardI width="23%">
          <p>24</p>
          <p>
            <HandshakeIcon />
          </p>
          <p>nhoujh</p>
        </CardI>
        <CardI width="23%">
          <p>24</p>
          <p>
            <CurrencyExchangeIcon />
          </p>
          <p>nhoujh</p>
        </CardI>
        <CardI width="23%">
          <p>24</p>
          <p>
            <CreditScoreIcon />
          </p>
          <p>nhoujh</p>
        </CardI>
      </div>

      <p>dummy text</p>
      <p>dummy text. </p>
    </div>
  );
}
export default InviteFriend;
