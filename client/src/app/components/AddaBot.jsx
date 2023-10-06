import { useState, useEffect } from 'react';
import { XCircleIcon, MicrophoneIcon, PaperAirplaneIcon, SpeakerWaveIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';
import './AddaBot.css'; // Replace with the actual path to your CSS file
// import {ReactComponent as AddaTextToSpeech} from '../../../public/AddaTextToSpeech';

function AddaBot() {

  const [addaBotOpen, setAddaBotOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [botResponse, setBotResponse] = useState('');
  const [botIsTyping, setBotIsTyping] = useState(false);
  const [enableBotTTS, setEnableBotTTS] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');

  // Initialize the speech recognition API
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  // Configure the recognition settings
  recognition.continuous = true;
  recognition.interimResults = false;

  // Event handler for recognized speech
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setRecognizedText((prevText) => prevText + transcript);
  };
  
  // Event handler for sending a message when Enter key is pressed
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default behavior (submitting a form)
      handleSendMessage();
    }
  };
  
  // Handle user input change
  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  // Start listening when the microphone button is clicked
  const handleMicrophoneClick = () => {
  if (!recognition) return;

  if (isListening) {
    recognition.stop();
  } else {
    recognition.start();
  }

  // Toggle the isListening state
  setIsListening(!isListening);
};

  //Text to speech
  const synth = window.speechSynthesis;

  const speak = (text) => {
    if (synth.speaking) {
      console.error('SpeechSynthesis is already speaking.');
      return;
    }
  
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  // Function to toggle TTS for bot responses
  const toggleBotTTS = () => {
    setEnableBotTTS(!enableBotTTS);
  };

  const toggleAddaBot = () => {
    setAddaBotOpen(!addaBotOpen);
  };

  const handleSendMessage = () => {
    if (userMessage.trim() === '') return;
  
    const requestBody = {
      message: userMessage,
      user_id: 1, // Replace with the actual user ID
    };
  
    // Create a new message object for the user's message
    const newUserMessage = { role: 'user', content: userMessage };
  
    // Update the chat with the user's message immediately
    setChatMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setUserMessage('');
  
    // Set the botIsTyping state to true to show the placeholder
    setBotIsTyping(true);
  
    fetch('http://localhost:5555/adda/chat/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then((data) => {
        console.log('Received data:', data);
  
        const botResponse = data.botResponse;
        console.log('Bot response:', botResponse);
  
        // Create a new message object for the bot's response
        const newBotMessage = { role: 'bot', content: botResponse };
  
        // Update the chat with the bot's response immediately
        setChatMessages((prevMessages) => [...prevMessages, newBotMessage]);
  
        // Set the botIsTyping state to false to remove the placeholder
        setBotIsTyping(false);
  
        // Speak the bot's response only if enableBotTTS is true
        if (enableBotTTS) {
          speak(botResponse);
        }
      })
      .catch((error) => {
        console.error('Error sending message:', error);
  
        // In case of an error, set botIsTyping state to false
        setBotIsTyping(false);
      });
  };
  

  const initialMessages = [
    { role: 'bot', content: "Hello! I'm Adda, your personal educational assistant! How can I assist you today?" },

  ];

  useEffect(() => {
    // Fetch initial chat history when the component mounts (if needed)
    // You can use a similar API call to retrieve the chat history

    // For demonstration purposes, you can set the initial messages
    setChatMessages(initialMessages);
  }, []);

  // When recognized text is updated, set it as the user message if it's empty
  useEffect(() => {
    if (recognizedText && !userMessage) {
      setUserMessage(recognizedText);
      setRecognizedText('');
    }
  }, [recognizedText, userMessage]);
    



  useEffect(() => {
    // Fetch initial chat history when the component mounts (if needed)
    // You can use a similar API call to retrieve the chat history

    // For demonstration purposes, you can set the initial messages
    setChatMessages(initialMessages);
  }, []);

  return (
    <div>
      {/* AddaBot button */}
      <button
      onClick={toggleAddaBot}
      className="fixed bottom-4 right-4 p-2 px-4 bg-indigo-600 rounded-md text-white"
    >
      {/* Use the ChatBubbleOvalLeftEllipsisIcon */}
      <ChatBubbleOvalLeftEllipsisIcon className="h-12 w-12" /> {/* Adjust the size as needed */}
    </button>

      {/* AddaBot overlay */}
      {addaBotOpen && (
        <div className="fixed bottom-4 right-4 z-50 p-4 bg-white rounded-lg shadow-xl border-2 border-indigo-900" style={{ height: '700px', width: '600px' }}>
          {/* Close button */}
          <button
            onClick={toggleAddaBot}
            className="p-3 bg-transparent rounded-md absolute top-2 right-2"
          >
            <XCircleIcon className="h-8 w-8 text-indigo-600" />
          </button>
          {/* Additional window */}
          <div className="h-full p-4 bg-gray-100 rounded-lg flex flex-col">
            {/* Chat area */}
            <div className="flex-grow overflow-y-auto border border-gray-300 rounded-lg p-4">
      {chatMessages.map((message, index) => (
        <div
          key={index}
          className={
            message.role === 'user'
              ? 'user-message'
              : 'ai-message'
          }
        >
          {message.content}
          
        </div>
        
              ))}

        {botIsTyping && (
            <div className="ai-message">
            <span className="typing-dot">.</span>
            <span className="typing-dot">.</span>
            <span className="typing-dot">.</span>
          </div>
          )}
            </div>
            {/* User input with microphone icon */}
            <div className="flex mt-4 items-end justify-end">
              {/* Text input with microphone icon as background */}
              <div className="relative flex-grow flex justify-center items-center">
              <input
                type="text"
                placeholder="Talk to Adda..."
                className="p-2 px-4 bg-gray-200 rounded-full outline-none focus:ring-2 focus:ring-indigo-600 pr-10"
                value={(recognizedText || userMessage)} // Combine recognized text and user input
                onChange={handleUserMessageChange}
                onKeyDown={handleKeyDown} 
              />
                <button
                  onClick={toggleBotTTS}
                  className={`p-2 px-3 rounded-full ml-2 ${
                    enableBotTTS ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-600'
                  }`}
                  title="Enable Text-to-Speech for Adda Replies"
                >
                  <SpeakerWaveIcon className="h-6 w-6" />
                </button>

                <button
                className={`p-2 px-3 bg-indigo-600 rounded-full ml-2 ${
                  isListening ? 'bg-red-500' : ''
                }`}
                onClick={handleMicrophoneClick}
              >
                {isListening ? (
                  <span>Listening...</span>
                ) : (
                  <MicrophoneIcon className="h-6 w-6 text-white" />
                )}
              </button>

              {/* Send message button */}
              <button
                className="p-2 px-3 bg-indigo-600 rounded-full ml-2"
                onClick={handleSendMessage}
              >
                <PaperAirplaneIcon className="h-6 w-6 text-white" />
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddaBot;
