import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import ProfileModal from "./ProfileModal";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={process.env.PUBLIC_URL + "/mediCal.png"} className="userImg" />
      <h5 className="menu-label">
        Welcome
        {/* {this.props.users.firstName} */}
      </h5>
      <br></br>
      <List disablePadding dense>
        <ListItem>{/* <ProfileModal /> */}</ListItem>
        <ListItem></ListItem>
        <ListItem>
          <Button
            variant="contained"
            // color="primary"
            style={{ background: "#C6D166" }}
          >
            Payment
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            // color="primary"
            style={{ background: "#C6D166" }}
          >
            Contact
          </Button>
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
