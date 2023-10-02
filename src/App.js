import React, { useState, useEffect } from 'react';
import TranslateForm from './components/TranslateForm';
import TranslationList from './components/TranslationList';
import axios from 'axios';
import './App.css';

const App = () => {
  const [translations, setTranslations] = useState([]);

  // Function to refresh the translation history
  const refreshTranslationHistory = async () => {
    try {
      // Fetch the latest translations and update the 'translations' state
      const { data: latestTranslations } = await axios.get("http://localhost:8080/translations");
      setTranslations(latestTranslations);
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  };

  // Call refreshTranslationHistory once when the component mounts
  useEffect(() => {
    refreshTranslationHistory();
  }, []);

  return (
    <div className="app">
      <header>
        <h1>GPTranslate</h1>
      </header>
      <main>
        <TranslationList translations={translations} />
      </main>
      <footer>
        <TranslateForm onTranslationSubmit={refreshTranslationHistory} />
      </footer>
    </div>
  );
};

export default App;
