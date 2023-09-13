import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Renders Home Component', () => {
  test('render', () => {
    const { home } = render(<Home />);
    expect(home).toMatchSnapshot();
  });
});
