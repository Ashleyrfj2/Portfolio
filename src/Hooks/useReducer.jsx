import { useReducer as useReducerHook } from 'react';
const placeholder = {
  "Hello, how can I assist you today?": "I'm here to help you with any questions or tasks you have. Please let me know what you need assistance with.",
  "What are the latest updates in the project?": "The latest updates in the project include the completion of the initial design phase, the implementation of key features, and the resolution of several bugs. The team is currently working on testing and refining the user interface.",
  "Can you provide a summary of the current tasks?": "The current tasks include finalizing the user interface design, implementing additional features based on user feedback, conducting thorough testing to ensure functionality, and preparing for the upcoming release. The team is focused on meeting deadlines and delivering a high-quality product."
}
const initialState = {
  prompt: '',
  project: null,
  enter_lab: null,
  messages: [],
  };


const chatReducer = (state, action) => {
  switch (action.type) {
    case 'prompt':
      return {
        ...state,
        prompt: action.payload.prompt,
      }
    case 'chat_send': {
      if (!state.prompt.trim()) return state;
      const reply = placeholder[state.prompt] || "Sorry, I don't have a response for that yet.";
      return {
        ...state,
        prompt: '',
        messages: [
          ...state.messages,
          { role: 'user', text: state.prompt },
          { role: 'bot', text: reply },
        ],
      }
    }
    case 'project':
      return{
        ...state,
        project: action.payload.project
      }
    case 'enter_lab':
      return{
        ...state,
        enter_lab: action.payload.enter_lab
      }
    default:
      return state;
  }
};

export const useChatReducer = () => {
  return useReducerHook(chatReducer, initialState);
};


