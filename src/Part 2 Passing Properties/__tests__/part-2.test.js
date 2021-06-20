/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen } from '@testing-library/react';

 // Part 2
 import { PassingSingleProp, PassingSinglePropDestructured, PassingSinglePropClass } from '../PassingProperties.jsx';


 xdescribe('Passing properties', () => {

   it('Functional component correctly passes down properties', () => {
     render(<PassingSingleProp name="Morty" age="30"/>);
     expect(screen.getByRole('article').innerHTML).toMatch(/My name is Morty and I am 30 years old./i);
   })

   it('Functional component correctly passes down destructured properties', () => {
     render(<PassingSinglePropDestructured name="Morty" age="30"/>);
     expect(screen.getByRole('article').innerHTML).toMatch(/My name is Morty and I am 30 years old./i);
   })

   it('Class component correctly passes down properties', () => {
     render(<PassingSinglePropClass name="Morty" age="30"/>);
     expect(screen.getByRole('article').innerHTML).toMatch(/My name is Morty and I am 30 years old./i);
   })

 });