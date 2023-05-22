import { FC } from 'react';
import { Tooltip } from 'react-tooltip';
import '../styles/components/user.scss';
import '../styles/components/tooltip.scss';

interface UserProps {
    id: number;
    name: string;
    email: string;
    phone: string;
    photo: string;
    position: string;
}

const User:FC<UserProps> = ({ id, name, email, phone, photo, position }) => {
    const truncateText = (text: string): string => {
        if(text.length > 29) {
            return text.substring(0, 29) + "..."
        }
        return text
    }

    const formatPhoneNumber = (phoneNumber: string): string => {
        const countryCode = phoneNumber.substring(1, 3);
        const areaCode = phoneNumber.substring(3, 6);
        const firstPart = phoneNumber.substring(6, 9);
        const secondPart = phoneNumber.substring(9, 11);
        const lastPart = phoneNumber.substring(11);
        
        const formattedNumber = `+${countryCode} (${areaCode}) ${firstPart} ${secondPart} ${lastPart}`;
        return formattedNumber;
    }

    return (
        <li className="user">
            <img className="user__img" src={photo} alt={name} />
            {name.length > 29 ? (
                <>
                    <h3 
                        className="user__name" 
                        data-tooltip-id="name-tooltip" 
                        data-tooltip-content={name}
                    >
                        {truncateText(name)}
                    </h3>
                    <Tooltip className='tooltip' place='bottom' id="name-tooltip" />
                </>
            ) : <h3 className="user__name" >{name}</h3>}
           
            {position.length > 29 ? (
                <>
                        <p 
                            className="user__position" 
                            data-tooltip-id="position-tooltip" 
                            data-tooltip-content={position}
                        >
                            {truncateText(position)}
                        </p>
                    <Tooltip className='tooltip' place='bottom' id="position-tooltip" />
                </>
            ): <p className='user__position'>{position}</p>}
            
            {email.length > 29 ? (
                <>
                    <a 
                        className="user__email" 
                        href={`mailto:${email}`} 
                        data-tooltip-id="email-tooltip" 
                        data-tooltip-content={email}
                    >
                        {truncateText(email)}
                    </a>
                    <Tooltip className='tooltip' place='bottom' id="email-tooltip" />
                </>
            ) : <a className='user__email' href={`mailto:${email}`}>{truncateText(email)}</a>}

            <a className="user__phone" href={`tel:${phone}`}>{formatPhoneNumber(phone)}</a>
        </li>
    )
}

export default User;