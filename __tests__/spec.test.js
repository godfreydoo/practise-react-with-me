/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

// Part 1
import PassingProps from '../src/Part 1/1_passing_props.jsx';


describe('Part 1', () => {

  it('Correctly passes down a single value prop', () => {
    render(<PassingProps name="Morty"/>)
    expect(screen.queryByText(/morty/i)).toBeDefined();
    expect(screen.queryByText(/ben/i)).toBeNull();
  })

});