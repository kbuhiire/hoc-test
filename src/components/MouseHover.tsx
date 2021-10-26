import React, { FC } from 'react'
import withHover from 'components/withHover'

interface Props {
    textColor: string;
    textHover: boolean;
}
const MouseHover:FC<Props> = props => {
    const {textColor, textHover, ...otherProps} = props;
    return (
        <div>
            <h2 {...otherProps} style={{ color: textColor }}> Mouse {textHover ? 'Over' : 'Out'}</h2>
        </div>
    )
}

export default withHover(MouseHover);