import React from 'react';
import { render } from '@testing-library/react';
import MouseHover from 'components/MouseHover';

describe('MouseHover Component', () => {
    it('should render MouseHover Component', () => {
        render(<MouseHover />)
    })

    it('should render mouse out text by default', () => {
        const { getByText } = render(<MouseHover />)
        const beforeHoverText = getByText(/mouse out/i)
        expect(beforeHoverText).toBeInTheDocument()
    })

    it('should render default text color', () => {
        const {getByText} = render(<MouseHover />);
        const beforeHoverText = getByText(/mouse out/i);
        expect(beforeHoverText).toHaveStyle('color : #F93')
    })
})