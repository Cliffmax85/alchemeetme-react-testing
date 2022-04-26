import { render, screen } from '@testing-library/react';
import App from './App';


describe('Header', () => {
test('Should render the header', async () => {
    render(
          <App />
    )
    
    screen.getByAltText('Alchemy Logo');
    // console.log('||||||||ALT||||||||', altText);

    screen.debug();

    const profile = await screen.findByText(/vonta/i);
    // console.log('\\\\PROLFILE///////', profile);
})
})