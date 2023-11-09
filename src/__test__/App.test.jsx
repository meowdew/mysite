import App from '../App'
import { render, screen } from '@testing-library/react'

describe('test for App Shell', () => { 
    it('should render App Component',  () => {
        render(<App />);
        const title = screen.getByText(/Learn React/);
        expect(title).toBeInTheDocument();
    })

})