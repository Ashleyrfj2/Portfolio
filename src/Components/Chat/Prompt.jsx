
import {useChatReducer } from "../../Hooks/useReducer";
import './Prompt.css'
import { useNavigate } from 'react-router';

const Prompt = () => {
  const [state, dispatch] = useChatReducer();
  const navigate = useNavigate();
  
  
  return (
    <section className="chat-landing">
      <div className="chat-container">
        <div className="chat-intro"></div>

        <div className= "chat-panel">
          <header className="chat-header"></header>
          <div className="chat-messages" >
            {state.messages.map((message, index) => (
              <div key={index} className={`chat-message chat-message--${message.role}`}>
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <div className="preset-prompts">
            {[
              'Hello, how can I assist you today?',
              'What are the latest updates in the project?',
              'Can you provide a summary of the current tasks?'
            ].map((prompt, index) => (
              <button
                key={index}
                className="preset-button"
                onClick={() => dispatch({ type: 'prompt', payload: { prompt } })}
              >
                {prompt}
              </button>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={state.prompt}
              onChange={(e) => dispatch({ type: 'prompt', payload: { prompt: e.target.value } })}
            />
          </div>
          <div className="chat-actions">
            <button className="send-button" onClick={() => dispatch({ type: 'chat_send', payload: { chat_send: true } })}>
              Send
            </button>
          </div>
          
          </div>
          <form className="chat-form"></form>
        </div>

        <button className="lab-button" onClick={() => navigate('/lab')}>Enter the 3D Agent Lab</button>
      
    </section>
  );
}

export default Prompt;
