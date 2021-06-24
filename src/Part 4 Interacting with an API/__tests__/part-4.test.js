/**
* @jest-environment jsdom
*/
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// Part 4
import RetrievingAndStoringData from '../RetrievingAndStoringData.jsx';


describe('Retrieving and storing data', () => {
  it('Fetch method - User can see the "todo" section populate with text upon clicking Shuffle', async () => {
    const data = {
      completed: false,
      id: 999,
      title: "Mock data",
      userId: 999,
    }
    const mockFetch = Promise.resolve({ json: () => Promise.resolve(data) });
    global.fetch = jest.fn().mockImplementation(() => mockFetch);

    render(<RetrievingAndStoringData />);

    const button = screen.getByRole('button', {name: 'Shuffle'});
    userEvent.click(button);

    await waitFor(() =>
      expect(screen.getByRole('article').innerHTML).toBe('Mock data')
    );

    expect(fetch).toHaveBeenCalled();
  });



 });