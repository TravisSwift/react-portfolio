import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'

const portfolio = { name: "portfolio", description: "images of apps" };

afterEach(cleanup)

describe('Gallery is rendering', () => {

  it('renders', () => {
    render(<Gallery currentCategory={portfolio} />);
  });
})

it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={portfolio} />)
    expect(asFragment()).toMatchSnapshot()
  })