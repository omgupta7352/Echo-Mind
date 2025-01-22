import { useState } from 'react'
import './App.css'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'
import { fetchChatResponse } from './services/api';

import { useEffect } from 'react';

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      alert("Failed to get response")
    } finally {
      setLoading(false);
    }
  }

  
  // if (loading) {
  //   return (<h1>Loading...</h1>);
  // }

  return (
    <div className='App'>
      {useEffect(() => {
        document.body.style.backgroundColor = '#d7c49eff'; // Set body background color
        return () => {
          document.body.style.backgroundColor = ''; // Reset body color on unmount
        };
      }, [])}
      <header className='text-white text-center py-4' 
      style={{ backgroundColor: '#343148ff', boxShadow: '0 6px 8px 0 rgba(0, 0, 0, 0.32), 0 6px 16px 0 rgba(0, 0, 0, 0.24), 0 6px 24px 0 rgba(0, 0, 0, 0.20), 0 6px 32px 0 rgba(0, 0, 0, 0.14)' }}>
        <h1>Echo<span class="text-danger">M</span>ind</h1>
      </header>
      <ChatInput onSubmit={handleQuestionSubmit} />
      {loading && <h3>Loading...</h3>}
      <ChatResponse response={response} />
      {/* RESPONSE */}
    </div>
  )
}

export default App
