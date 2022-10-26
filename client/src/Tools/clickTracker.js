import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* export const useClickTracker = () => {
  const [element, setElement] = useState('');
  const [time, setTime] = useState('');
  const [widget, setWidget] = useState('');

  useEffect(() => {
    // setWidget(clickedWidget);
    // setElement(e.target.nodeName);
    // setTime(new Date());
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log('clicked', e.target, component);
    let interaction = {};
    interaction.element = element;
    interaction.widget = widget;
    interaction.time = time;
    axios.post('/interactions', interaction)
      .then(results => console.log('Successfully logged interaction'))
      .catch(err => console.log('Error logging interaction'));
  };
}; */

export const TrackerContext = React.createContext();
export const TrackerFunction = (element, widget) => {
  let interaction = {
    element: element.tagName,
    widget,
    time: (new Date()).toString()
  }
  console.log(interaction);
  axios.post('/interactions', interaction)
    .then(results => console.log('Successfully logged interaction'))
    .catch(err => console.error(err));
}