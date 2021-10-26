import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MouseHover from 'components/MouseHover';
import withHover from 'components/withHover'

describe('withHover High Order Component', () => {
    const MockComponent = withHover(() => <MouseHover />);
    it('should render withHover HOC', () => {
        render(<MockComponent/>)
    })

    it('should render default mouse out text', () => {
        const {getByText} = render(<MockComponent />);
        const text = getByText(/mouse out/i);
        expect(text).toBeInTheDocument()
    })

    it('should render mouse over text on Mouse Hover', () => {
        const {getByText} = render(<MockComponent />);
        const beforeHoverText = getByText(/mouse out/i);
        fireEvent.mouseOver(beforeHoverText);
        expect(getByText(/mouse over/i)).toBeInTheDocument();
    })

    it('should render default text color', () => {
        const {getByText} = render(<MockComponent />);
        const beforeHoverText = getByText(/mouse out/i);
        expect(beforeHoverText).toHaveStyle('color : #F93')
    })

    it('should change text color on click', () => {
        const { getByText} = render(<MockComponent />);
        const beforeHoverText = getByText(/mouse out/i);
        fireEvent.click(beforeHoverText);
        expect(getByText(/mouse out/i)).toHaveStyle('color : #BEF')
    })
})