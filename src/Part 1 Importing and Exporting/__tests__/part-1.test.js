/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen } from '@testing-library/react';

 // Part 1
 import ShowPictureAndDesc from '../ShowPictureAndDesc.jsx';
 import { applePieDesc, blackCoffeeDesc, utils } from '../randomStuff';

 xdescribe('Import and exporting', () => {

  beforeEach(() => {
    render(<ShowPictureAndDesc />);
  });

  it('getCurrentDate function is imported and the current date is shown', () => {
    const spy = jest.spyOn(utils, 'getDate')
    const currentDate = utils.getDate();

    expect(spy).toHaveBeenCalled();
    expect(typeof currentDate).toBe('string');
    expect(document.getElementById('date').innerHTML).not.toEqual("");

    spy.mockRestore();
  })

  it('getSomethingElse function is imported and text is shown', () => {
    const spy = jest.spyOn(utils, 'getRandomText')
    const text = utils.getSomethingElse();

    expect(spy).toHaveBeenCalled();
    expect(document.getElementById('random').innerHTML).toEqual("As an example");

    spy.mockRestore();
  })

   it('Images are imported and appears on the screen', () => {
     expect(screen.getByRole('img', {name: /Baked appple pie in a baking pan/i})).toBeDefined();
     expect(screen.getByRole('img', {name: /Black cup of coffee and its shadow on a table/i})).toBeDefined();
   })

 });