import React from 'react'

import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ReactMarkdown from "react-markdown"
import { getPostByID } from '../static/text/Posts'

const useStyles = makeStyles((theme) => ({
    textContent: {
        width: '100%',
        maxWidth: 600,
        justifyContent: 'flex-start',
        textAlign: 'justify'
    }
}));

const PostScreen = (props) => {
    
    const classes = useStyles()
    const post = getPostByID(props.match.params.postId)

    return(
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
                <Typography
                    variant="h2"
                    gutterBottom
                    className={classes.textContent}>
                    {post.postTitle}
                </Typography>
                <ReactMarkdown
                    className={classes.textContent}
                    source={post.postContent}/>
        </Grid>
    )
}

export default withRouter(PostScreen)