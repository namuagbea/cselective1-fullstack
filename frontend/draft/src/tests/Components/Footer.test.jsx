import Footer from '../../GeneralComponents/Footer.jsx';
import { describe, it } from "vitest";
import react from 'react';
import {BrowserRouter} from 'react-router-dom';
import { render, screen} from "@testing-library/react"; 
import '@testing-library/jest-dom';


describe('Footer', () => {
    it('renders the footer text', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        
        );

        expect(screen.getByText('©SmilePrime / All Rights Reserved')).toBeInTheDocument();
    });
});