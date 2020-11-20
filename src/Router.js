import { Route, withRouter } from "react-router-dom";

import HomeScreen from './screens/HomeScreen'
import PostScreen from './screens/PostScreen'

const Router = () => (
    <div>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/post/:postId" component={PostScreen} />
    </div>
)

export default withRouter(Router)