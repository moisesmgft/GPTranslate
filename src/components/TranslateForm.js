import React, { useState } from 'react';
import mockDB from '../services/mockDB';
import mockTranslation from '../services/mockTranslation';

const TranslateForm = ({ onTranslationSubmit }) => {
  const [inputText, setInputText] = useState('');
  const [translation, setTranslation] = useState('');
  const [translations, setTranslations] = useState([]);

  const handleTranslate = async () => {
    try {
      // Call the mockTranslation function from the imported module
      const mockTranslatedResult = await mockTranslation.translateJapaneseToPortuguese(inputText);
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
      <textarea
        rows="4"
        placeholder="Enter Japanese text..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>
      <button onClick={handleTranslate}>Translate</button>
    </div>
  );
};

export default TranslateForm;
