import { FC } from 'react';

import '../../styles/UI/ui-button.scss';

interface UIButtonProps {
    title: string;
    type: string;
    href: string;
    handleClick?: () => void;
    classes?: string;
}

const UIButton:FC<UIButtonProps> = ({ title, type, href, handleClick, classes }) => {
    return (
        <>
            {
                type === 'link'
                    ? <a className={`ui-button ${classes}`} href={href}>{title}</a>
                    : <button onClick={handleClick} className={`ui-button ${classes}`}>{title}</button>
            }
        </>
    )
}

export default UIButton;