import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

// Mock the current date to ensure deterministic snapshots
jest.spyOn(Date, 'now').mockReturnValue(new Date('2024-01-14').getTime());

describe('Dashboard', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Dashboard />);
    expect(asFragment()).toMatchSnapshot();
  });
});