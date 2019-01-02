import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import AppRouter from '../imports/routes/router';

Meteor.startup(() => {
  render(<AppRouter />, document.getElementById('react-target'));
});
