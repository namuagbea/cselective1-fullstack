import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MenuBarV2 from '../../GeneralComponents/MenubarV2.jsx'; // Adjust the import path as per your project structure
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe('MenuBar', () => {
    it('renders the menu items correctly', () => {
        render(
            <BrowserRouter>
                <MenuBarV2 />
            </BrowserRouter>

        );

        // Check if menu items are rendered
        const homeLink = screen.getByText('Home');
        const aboutLink = screen.getByText('About');
        const servicesLink = screen.getByText('Services');
        const contactsLink = screen.getByText('Contacts');
        const myAppointmentsLink = screen.getByText('My Appointments');
        expect(homeLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
        expect(servicesLink).toBeInTheDocument();
        expect(contactsLink).toBeInTheDocument();
        expect(myAppointmentsLink).toBeInTheDocument();
    });

 
    // You can add more tests to cover other interactions if needed
});