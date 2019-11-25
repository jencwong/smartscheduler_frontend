import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function Sidebar() {
  return (
    <div className="sidebar">
      <p className="menu-label">Welcome Molly Weasley</p>
      <List disablePadding dense>
        <ListItem button>
          <ListItemText>Dasbboard</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>UserProfile</ListItemText>
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
