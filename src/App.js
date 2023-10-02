import React, { useState } from 'react';
import TranslateForm from './components/TranslateForm';
import TranslationList from './components/TranslationList';
import mockDB from './services/mockDB'; // Import mockDB
import './App.css'

const App = () => {
  const [translations, setTranslations] = useState([]);

  // Function to refresh the translation history
  const refreshTranslationHistory = () => {
    // Fetch the latest translations and update the 'translations' state
    const latestTranslations = mockDB.getAllTranslations();
    setTranslations(latestTranslations);
  };

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
