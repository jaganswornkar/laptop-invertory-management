import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  MenuItem,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Drawer,
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
  const [drawer, setDrawer] = React.useState(false);

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ position: "fixed", marginTop: "-50px" }}
      >
        <Toolbar variant="dense">
          <IconButton
            onClick={() => setDrawer(true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={drawer} onClose={() => setDrawer(false)}>
            <MenuItem>
              <div style={{ height: "40px" }}>
                <img
                  src="https://navgurukul.org/assets/img/logo.png"
                  alt="Navgurukul"
                  height="100%"
                />
              </div>
            </MenuItem>
            <Divider />
            <Link to="/home" style={{ textDecoration: "none" }}>
              <MenuItem>
                <div style={{ marginTop: "10px" }}>
                  <b>Home</b>
                </div>
              </MenuItem>
            </Link>
            <Divider />
            <MenuItem
              style={{ marginTop: "20px" }}
              onClick={() => {
                setDrawer(false);
                props.filterClick("");
              }}
            >
              All Laptops
            </MenuItem>
            <MenuItem
              onClick={() => {
                setDrawer(false);
                props.filterClick("1");
              }}
            >
              All Active Laptops
            </MenuItem>
            <MenuItem
              onClick={() => {
                setDrawer(false);
                props.filterClick("0");
              }}
            >
              All Damaged Laptops
            </MenuItem>
            <Divider />
            <MenuItem>
              <div style={{ height: "10px" }}></div>
            </MenuItem>
            <Link to="/Admin" style={{ textDecoration: "none" }}>
              <MenuItem>
                <b>Admin Page</b>
              </MenuItem>
            </Link>
            <div
              style={{
                position: "absolute",
                width: "100%",
                bottom: 0,
                height: "50px"
              }}
            >
              <Divider />
              <Link to="/About" style={{ textDecoration: "none" }}>
                <MenuItem>About</MenuItem>
              </Link>
            </div>
          </Drawer>
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
