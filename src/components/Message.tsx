import { FC } from 'react';
import successImage from '../assets/img/success-image.svg';
import '../styles/components/message.scss';

interface MessageProps {
    title: string;
}

const Message:FC<MessageProps> = ({ title }) => {
    return (
        <section className="message">
            <div className="message__container container">
                <h3 className="message__title title">{title}</h3>
                <img className='message__img' src={successImage} alt='user registered'/>
            </div>
        </section>
    )
}

export default Message;