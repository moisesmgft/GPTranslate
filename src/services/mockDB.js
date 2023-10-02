const translationsTable = [];

// Simulated database functions
const mockDB = {
  // Function to insert a new translation record
  insertTranslation: (inputText, translation) => {
    const newTranslation = {
      id: translationsTable.length + 1, // Auto-incremented ID
      inputText,
      translation,
      createdAt: new Date().toISOString(), // Current timestamp
    };
    translationsTable.push(newTranslation);
    return newTranslation;
  },

  // Function to retrieve all translation records
  getAllTranslations: () => {
    return [...translationsTable];
  },
};

module.exports = mockDB;
