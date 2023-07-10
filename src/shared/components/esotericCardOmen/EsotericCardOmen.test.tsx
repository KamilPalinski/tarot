import React from 'react';

import { EsotericCardOmen } from './EsotericCardOmen';
import { screen, render } from 'test';

describe('EsotericCardOmen test', () => {
  it('renders component correctly ', () => {
    render(<EsotericCardOmen />);
    expect(screen.getByDisplayValue('Wrózba Tarot')).toBeTruthy();
  });
});
