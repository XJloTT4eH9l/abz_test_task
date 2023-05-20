import { FC } from 'react';

import '../../styles/UI/ui-button.scss';

interface UIButtonProps {
    title: string;
    type: string;
    href: string;
}

const UIButton:FC<UIButtonProps> = ({ title, type, href }) => {
    return (
        <>
            {
                type === 'link'
                    ? <a className='ui-button' href={href}>{title}</a>
                    : <button className='ui-button'>{title}</button>
            }
        </>
    )
}

export default UIButton;