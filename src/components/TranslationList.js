import '../styles/TranslationList.css';
import React from 'react';

const TranslationList = ({ translations }) => {
  return (
    <div className="translation-list">
      {translations.map((item, index) => (
        <div key={index} className="translation-bubble">
          <div className="request-bubble">
            <p>{item.prompt}</p>
          </div>
          <div className="response-bubble">
            <p>{item.translation}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TranslationList;
