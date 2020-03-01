import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import {
  Button,
  Menu,
  MenuItem,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{position:'fixed', marginTop:'-50px'}}>
        <Toolbar variant="dense">
          <IconButton
            onClick={handleClick}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={()=>{handleClose(); props.filterClick('')}}>All Laptops</MenuItem>
            <MenuItem onClick={()=>{handleClose(); props.filterClick('1')}}>All Active Laptops</MenuItem>
            <MenuItem onClick={()=>{handleClose(); props.filterClick('0')}}>All Damaged Laptops</MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title} align="left">
            {props.headerText}
          </Typography>
          <Link to={props.link} style={{ textDecoration: "none" }}>
            <Button style={{ background: "white", color: "blue" }}>
              <b>{props.text2}</b>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
