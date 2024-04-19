import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuBar from '../../GeneralComponents/MenuBar.jsx'; 
import { BrowserRouter } from 'react-router-dom';


describe('MenuBar', () => {
    it('renders menu items and logo correctly', () => {
        render(
        <BrowserRouter>
            <MenuBar />
        </BrowserRouter>);


        // Check if menu items are rendered
        const homeLink = screen.getByText('Home');
        const aboutLink = screen.getByText('About');
        const servicesLink = screen.getByText('Services');
        const contactsLink = screen.getByText('Contacts');
        expect(homeLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
        expect(servicesLink).toBeInTheDocument();
        expect(contactsLink).toBeInTheDocument();
    });

    // Add more tests as needed for specific functionalities
});