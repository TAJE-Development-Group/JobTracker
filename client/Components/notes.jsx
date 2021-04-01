import React from 'react';

export default function Notes ({props}) {
    const {notes} = props;
      return (
          <div>
              Notes: {notes}
          </div>
      );
  };