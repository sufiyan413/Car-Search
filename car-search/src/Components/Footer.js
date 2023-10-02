import React from 'react';
import "../Styles/Footer.css"

function Footer({ totalPages, currentPage, onPageChange }) {
  const range = [];
  const maxButtons = 5;


  let startPage = Math.max(currentPage - Math.floor(maxButtons / 2), 1);
  let endPage = startPage + maxButtons - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - maxButtons + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    range.push(i);
  }

  return (

    <div className="footer">

      <button onClick={() => onPageChange(1)}>&lt;</button>

      {startPage > 1 && <span>...</span>}

      {range.map((pageNumber) => (

        <button key={pageNumber} onClick={() => onPageChange(pageNumber)}>

          {pageNumber}

        </button>
      ))}

      {endPage < totalPages && <span>...</span>}

      <button onClick={() => onPageChange(totalPages)}>&gt;</button>

      
    </div>
  );
}

export default Footer;

