import axios from 'axios';
import React, { useState } from 'react';
import mockDB from '../services/mockDB';
import mockTranslation from '../services/mockTranslation';

import '../styles/TranslateForm.css';

const TranslateForm = ({ onTranslationSubmit }) => {
  const [inputText, setInputText] = useState('');
  const [translation, setTranslation] = useState('');
  const [translations, setTranslations] = useState([]);

  const handleTranslate = async () => {
    try {
      // Call the mockTranslation function from the import  d module
      const mockTranslatedResult = await axios.post('http://localhost:8080/translations', {
        phrase: inputText,
      });
      // Set the translation based on the result
      setTranslation(mockTranslatedResult.translation);
      // Insert the translation into the mock database
      const insertedTranslation = mockDB.insertTranslation(inputText, mockTranslatedResult.translation);
      // Update the translations state with the new translation
      setTranslations([...translations, insertedTranslation]);
      onTranslationSubmit();
    } catch (error) {
      console.error('Error while translating:', error);
    }
  };

  return (
    <div className="translate-form">
      <div className="input-container">
        <textarea
          rows="4"
          placeholder="Enter Japanese text..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <button onClick={handleTranslate}>Translate</button>
      </div>
    </div>
  );
};

export default TranslateForm;
