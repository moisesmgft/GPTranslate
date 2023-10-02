const mockTranslation = {
    translateJapaneseToPortuguese: async (inputText) => {
      // Simulate a delay to mimic network latency
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      // Mock translation data
      const mock = {
        inputText,
        translation: `Mock Portuguese Translation of: ${inputText}`,
      };
  
      return mock;
    },
  };
  
  export default mockTranslation;
  