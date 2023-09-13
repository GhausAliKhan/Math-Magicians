import { render } from '@testing-library/react';
import Quotes from '../components/Quotes';

describe('Renders a random computer quote', () => {
  test('render', () => {
    const { quote } = render(<Quotes />);
    expect(quote).toMatchSnapshot();
  });
});
