import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: "100%",
  },
  media: {
    height: 140,
  },
  button:{
    height: "40px",
    backgroundColor: "rgba(0,0,0,0.8)",
    color: "ivory",
    textTransform: "none",
    padding: "12px",
    outline: "none",
    '&:hover': {
        background: "rgba(0,0,0,0.8)",
        outline: "none"
    }
  }
});

export default function MediaCard({ pg, history }) {
  const classes = useStyles();

  let handleClick = (id)=>{
    history.push(`/view/${id}`);
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pg.imageURL}
          title={pg.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pg.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {pg.address}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.button} onClick={()=>{handleClick(pg.pgId)}}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
