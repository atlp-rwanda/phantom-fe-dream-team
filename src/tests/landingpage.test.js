import { render, screen } from '@testing-library/react';
import React from 'react';

import Landingpage from '../components/Landingpage/Landingpage';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import Services from '../components/Services'


test(' it should render about phantom  details', () => {
  render(< br />);
  
});

test(' it should render about button', () => {
  render(<Landingpage />);
  const linkElement = screen.getByText("Read More");
  expect(linkElement).toBeInTheDocument;
});

test('renders Get in touch with us', () => {
  render(<Contact />);
  const linkElement = screen.getByText("Get in touch with us");
  expect(linkElement).toBeInTheDocument;
});

test('renders Contact us', () => {
  render(<Contact />);
  const linkElement = screen.getByText("Contact us");
  expect(linkElement).toBeInTheDocument;
});

test('renders kigali,Rwanda', () => {
  render(<Contact />);
  const linkElement = screen.getByText("kigali,Rwanda");
  expect(linkElement).toBeInTheDocument;
});

test('renders contact@phathom.com', () => {
  render(<Contact />);
  const linkElement = screen.getByText("contact@phathom.com");
});
 
test('renders FullNames', () => {
  render(<Contact />);
  const linkElement = screen.getByText("FullNames");
});

test('renders Email', () => {
  render(<Contact />);
  const linkElement = screen.getByText("Email");
});

test('renders Leave us a message...', () => {
  render(<Contact />);
  const linkElement = screen.getByText("Leave us a message...");
});

test('renders Type Your Message Here...', () => {
  render(<Contact />);
  const linkElement = screen.getByPlaceholderText("Type Your Message Here...");
});

test('renders Send', () => {
  render(<Contact />);
  const linkElement = screen.getByText("Send");
});


test('renders Let’s connect!', () => {
  render(<Footer />);
  const linkElement = screen.getByText("Let’s connect!");
});

test('renders Follow Us to Get Updates !', () => {
  render(<Footer />);
  const linkElement = screen.getByText("Follow Us to Get Updates !");
});
test('renders Privacy Policy', () => {
  render(<Footer />);
  const linkElement = screen.getByText("Privacy Policy");
});

test('renders Terms of Services', () => {
  render(<Footer />);
  const linkElement = screen.getByText("Terms of Services");
});
test('renders Contact', () => {
  render(<Footer />);
  const linkElement = screen.getByText("Contact");
});

test('renders Contact', () => {
  render(<Footer />);
  const linkElement = screen.getByText("Contact");
});


test('renders All Rights Reserved By Phantmom 2022', () => {
  render(<Footer />);
  const linkElement = screen.getByText("All Rights Reserved By Phantmom 2022");
});






test(' it should render paragraph', () => {
  render(<Landingpage />);
  const linkElement = screen.getByText("Choose Your Route Track your bus live .");
  expect(linkElement).toBeInTheDocument;
});
test(' it should render about button', () => {
  render(<Landingpage />);
  const linkElement = screen.getByText("Read More");
  expect(linkElement).toBeInTheDocument;
}); 

test(' it should render how phantom works', () => {
  render(<Services />);
  const linkElement = screen.getByText("HOw It works");
  expect(linkElement).toBeInTheDocument;
});



test(' it should  render phantom first step', () => {
  render(<Services />);
  const linkElement = screen.getByText("step1");
  expect(linkElement).toBeInTheDocument;
});




test(' it should render  phantom step2 ', () => {
  render(<Services/>);
   const linkElement =screen.getByText("step2");
   expect(linkElement).toBeInTheDocument;
  
});

test(' it should render  phantom step2 detail ', () => {
  render(<Services/>);
   const linkElement =screen.getByText("Enter Location & destination");
   expect(linkElement).toBeInTheDocument;
  
});

test(' it should render  phantom step3 ', () => {
  render(<Services/>);
   const linkElement =screen.getByText("step3");
   expect(linkElement).toBeInTheDocument;
  
});

test(' it should render  phantom step3 detail ', () => {
  render(<Services/>);
   const linkElement =screen.getByText("Find the nearest bus");
   expect(linkElement).toBeInTheDocument;
  
});

