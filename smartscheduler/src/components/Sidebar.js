import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function Sidebar() {
  return (
    <div className="sidebar">
        <img className="userImg" src="https://vignette.wikia.nocookie.net/harrypotter/images/1/15/MOLLY1.jpg/revision/latest/scale-to-width-down/350?cb=20150828155116"></img>
        <p className="menu-label">
          Welcome 
          {/* { this.props.users.firstName }  */}
        </p>
        <br></br>
        <List disablePadding dense>
        <ListItem button>
            <ListItemText>Dasbboard</ListItemText>
        </ListItem>
        <ListItem button>
            <ListItemText>User Profile</ListItemText>
        </ListItem>
        </List>
    </div>
  )
}

export default Sidebar



// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles(theme => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// export default function SimpleModal() {
//   const classes = useStyles();
//   // getModalStyle is not a pure function, we roll the style only on the first render
//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <button type="button" onClick={handleOpen}>
//         Open Modal
//       </button>
//       <Modal
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//         open={open}
//         onClose={handleClose}
//       >
//         <div style={modalStyle} className={classes.paper}>
//           <h2 id="simple-modal-title">Text in a modal</h2>
//           <p id="simple-modal-description">
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </p>
//           <SimpleModal />
//         </div>
//       </Modal>
//     </div>
//   );
// }