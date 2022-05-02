import React from 'react';
import { render, screen } from '@testing-library/react';
import SkeletonUI from '../skeletonUI';
import { MemoryRouter as Router } from 'react-router-dom';
test('it should display skeletonui', () => {
  
  render(  <Router><SkeletonUI />  </Router>);
});
