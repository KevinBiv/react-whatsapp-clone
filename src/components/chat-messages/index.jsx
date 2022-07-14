import { Component } from "react";
import "./styles.css";

export class ChatMessage extends Component{

    render(){
        const messageData = this.props.messageData;
        const messagePosition = messageData.type === 0 ? "right" : "left"
        return <div className={`chat-message ${messagePosition}`}>
            <div className="message-content">
                {
                    messageData.isPicture ? <img alt="" src={messageData.message} />
                    :  messageData.message
                }

            </div>
        </div>
    }
}
