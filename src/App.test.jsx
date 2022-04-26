import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import App from './App';


describe('Header', () => {
test('Should render the header', async () => {
    render(
          <App />
    )
    
    const altText = screen.getByAltText('Alchemy Logo');
    // console.log('||||||||ALT||||||||', altText);

    expect(altText).toBeInTheDocument();

    screen.debug();

    const profile = await screen.findByText(/vonta/i);
    console.log('\\\\PROLFILE///////', profile);
})
})