/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen } from '@testing-library/react';

 // Part 2
 import PassingProp from '../PassingProp.jsx';
 import PassingPropDestructured from '../PassingPropDestructured.jsx';
 import PassingPropWithFunction from '../PassingPropWithFunction.jsx';


 xdescribe('Passing properties', () => {

   it('Functional component correctly shows properties', () => {
     render(<PassingProp name="Morty" age="30"/>);
     expect(screen.getByRole('article').innerHTML).toMatch(/My name is Morty and I am 30 years old./i);
   })

   it('Functional component correctly shows destructured properties', () => {
     render(<PassingPropDestructured name="Morty" age="30"/>);
     expect(screen.getByRole('article').innerHTML).toMatch(/My name is Morty and I am 30 years old./i);
   })

   it('Component invokes passed down function', () => {
     const returnNumber = jest.fn(() => Math.floor(Math.random() * 100));

     render(<PassingPropWithFunction randomAge={returnNumber}/>);
     expect(returnNumber).toBeCalled();
     expect(typeof returnNumber()).toBe('number');
   })

 });