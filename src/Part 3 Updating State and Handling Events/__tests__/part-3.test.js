/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen, waitFor, fireEvent } from '@testing-library/react';
 import userEvent from '@testing-library/user-event';

 // Part 3
 import UpdateState from '../UpdatingState.jsx';
 import UpdatingStateForForms from '../UpdatingStateForForms.jsx';


describe('Updating state and handling events', () => {

  it('UpdateState --> should update "counter" state upon clicking', async () => {
    render(<UpdateState />);

    const increment = screen.getByRole('button', {name: 'increment counter'});
    const decrement = screen.getByRole('button', {name: 'decrement counter'});
    const quantity = screen.getByRole('spinbutton', {name: /quantity/i});

    await userEvent.click(increment);
    await userEvent.click(increment);
    await userEvent.click(decrement);
    await userEvent.click(quantity);

    expect(quantity.value).toBe('1');
  });

 });

 describe('Form handling of state and events', () => {

  it('UpdateStateForForms --> should update states upon user interaction', async () => {
    const doSomethingWithFormData = jest.fn();
    render(<UpdatingStateForForms doSomethingWithFormData={doSomethingWithFormData}/>);
    fireEvent.input(screen.getByLabelText(/name/i), {target: {value: 'Godfrey'}});
    fireEvent.input(screen.getByLabelText(/age/i), {target: {value: 100}});
    userEvent.selectOptions(screen.getByLabelText(/Favorite Movie Genre/i), 'Romance');
    userEvent.click(screen.getByRole('radio', {name: /javascript/i}));

    fireEvent.submit(screen.getByRole("button", { name: /submit form/i }));

    await waitFor (() => expect(doSomethingWithFormData).toHaveBeenCalledWith({
      name: 'Godfrey',
      age: 100,
      movie: 'Romance',
      language: 'JavaScript'
    }));
    expect(doSomethingWithFormData).toHaveBeenCalledTimes(1);
  });

 });