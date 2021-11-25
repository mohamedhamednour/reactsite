import { Route, Switch } from "react-router-dom";
import { Con } from "./contact";
import { Apps ,Apo} from "./home";
// import { ChatEngine } from 'react-chat-engine'
import './style.css'
// import {ChatFeed} from './chatfeed'






import {Navbar} from './nav'
export const App = () => {

  return (
    <>
     <Navbar/>
   
     {/* <ChatEngine
      height="600px"
      projectID='676ecd1c-0f26-4ac2-b0bd-001d82afac2f'
      // publicKey='b75e5bd5-cd84-404c-b820-06feff8c98c0'
      userName='mohamedhamed'
      userSecret='0129879597'
      // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    /> */}
      <Switch>
     
        <Route path="/home">
          <Apps />
        </Route>
        {/* <Route path="/contact">
          <UseReducerEx />
        </Route> */}
        <Route path="/contact">
          <Con />
        </Route>
        <Route path="/">
          <Apo />
        </Route>
       
        
     
      </Switch>

    </>
  );
};
