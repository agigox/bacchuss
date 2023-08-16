import React from 'react';

const ChartLabel = ({color}) => {
  return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="14" viewBox="0 0 36 14" fill="none">
            <path d="M6.76367 7H28.7637" stroke={color} strokeWidth="13" strokeLinecap="round"/>
        </svg>
    </>
  );
};

export default ChartLabel;
