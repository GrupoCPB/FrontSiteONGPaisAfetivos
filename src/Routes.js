import { Route, Switch } from "react-router";

import { Home } from "./pages/Home";
import { Partners } from "./pages/Partners";
import { Donate } from "./components/Donate";

export default () =>{
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/parceiros">
                <Partners/>
                <Donate/>
            </Route>
        </Switch>
    );
}