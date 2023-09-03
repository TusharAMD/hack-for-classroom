import React from 'react';
import { Document, Page } from 'react-pdf';

const AnswerSheet = () => {
  return (
    <div>
        <div>
      <Document file="/public/markerpaper.pdf">
        <Page pageNumber={1} width={400} />
      </Document>
    </div>
      <iframe
        src="/public/markerpaper.pdf"
        width="100%"
        height="500px"
        title="Embedded PDF"
      ></iframe>

    </div>
  );
};

export default AnswerSheet;
