import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 600,
  }
});

const PostCard = (props) => {
  const classes = useStyles();

  return (
    <Card
        className={classes.root}
        onClick={props.onClick}>
        <CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.postTitle}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" noWrap={true}>
                    {props.postContent}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  );
}

export default PostCard