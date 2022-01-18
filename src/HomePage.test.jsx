import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders home page', () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('Home');
  });
});
