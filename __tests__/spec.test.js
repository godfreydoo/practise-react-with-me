/**
 * @jest-environment jsdom
 */
import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";

// Part 1
import { PassingSingleProp, PassingSinglePropDestructured, PassingSinglePropClass } from '../src/1_PassingProperties.jsx';
import { UpdatingState, UpdatingStateForForms } from '../src/2_UpdatingState.jsx';


describe('Passing properties', () => {

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

xdescribe('Storing and updating state', () => {


});