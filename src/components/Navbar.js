import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ExploreIcon from "@material-ui/icons/Explore";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  brand: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: "1.9em",
    cursor: "pointer",
  },
  even: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: "rgba(0,0,0)" }}>
        <div style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
          <Toolbar>
            <div className={classes.even}>
              <div
                className={classes.brand}
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                YEH!O
              </div>
              <div>
                <Tooltip title="List your Property">
                  <IconButton
                    color="inherit"
                    style={{ outline: "none" }}
                    onClick={() => {
                      window.location.href = "/list";
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Explore">
                  <IconButton
                    color="inherit"
                    style={{ outline: "none" }}
                    onClick={() => {
                      window.location.href = "/view";
                    }}
                  >
                    <ExploreIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}
