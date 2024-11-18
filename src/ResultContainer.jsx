import React from 'react';
import ReactMarkdown from 'react-markdown';

const ResultContainer = ({ result, loading }) => {
  return (
    <div className="result-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="markdown-output">
          <ReactMarkdown>{result}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default ResultContainer;
