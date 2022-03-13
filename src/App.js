import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';


const App = () =>{
    return(
        <ChatEngine
            height = "100vh"
            projectID = "3a3e9721-6b76-4798-9f4e-08c35010fae9"
            userName = "MedicalBooking"
            userSecret = "123456"
            renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps}/>}
        />
    )
}

export default App;