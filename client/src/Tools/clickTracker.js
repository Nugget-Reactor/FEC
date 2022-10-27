import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const TrackerContext = React.createContext();
export const TrackerFunction = (element, widget) => {
  let interaction = {
    element: element.tagName,
    widget,
    time: (new Date()).toString()
  };
  // console.log('Click Metadata', interaction);
  axios.post('/interactions', interaction)
    .then(results => console.log('Successfully logged interaction'))
    .catch(err => console.error(err));
};