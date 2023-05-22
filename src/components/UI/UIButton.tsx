import { FC } from 'react';

import '../../styles/UI/ui-button.scss';

interface UIButtonProps {
    title: string;
    type: string;
    href: string;
    handleClick?: () => void;
}

const UIButton:FC<UIButtonProps> = ({ title, type, href, handleClick }) => {
    return (
        <>
            {
                type === 'link'
                    ? <a className='ui-button' href={href}>{title}</a>
                    : <button onClick={handleClick} className='ui-button'>{title}</button>
            }
        </>
    )
}

export default UIButton;