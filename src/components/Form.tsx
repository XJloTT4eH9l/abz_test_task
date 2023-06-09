import { FC, useState, useEffect, useContext } from 'react';
import { useForm, useFormState, SubmitHandler, Controller } from "react-hook-form";
import { nameValidation, emailValidation, phoneValidation, photoValidation } from '../validations/formValidation';
import { API_POSITIONS, API_USERS } from '../API/api';
import { UsersContext } from '../context/usersContext';
import { IUsersContext } from '../types/IUser';
import UIFileInput from './UI/UIFileInput';
import axios from 'axios';
import Message from './Message';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Preloader from './Preloader';
import '../styles/components/form.scss';

interface IFormType {
    name: string;
    email: string;
    phone: string;
    position_id: string;
    photo: File;
}

interface IPosition {
    id: number;
    name: string;
}

const Form: FC = () => {
    const { getUsers, token, getToken } = useContext(UsersContext) as IUsersContext;
    const [loading, setLoading] = useState<boolean>(false);
    const [userPosted, setUserPosted] = useState<boolean>(false);
    const [positions, setPositions] = useState<IPosition[]>([]);
    const [postError, setPostError] = useState<string>('');

    const { handleSubmit, control, reset } = useForm<IFormType>({ mode: 'onChange' });
    const { errors, isValid } = useFormState({
        control
    })

    const onSubmit: SubmitHandler<IFormType> = async (data) => {
        setLoading(true);
        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('photo', data.photo);
        formData.append('position_id', data.position_id);
        console.log(data);

        try {
            const responce = await axios.post(API_USERS, formData, {
                headers: {
                    'Token': token
                }
            })
            if(responce.data.success) {
                getUsers(1, true);
                setUserPosted(true);
                reset();
            } else {
                console.log(responce)
            }

        } catch (error) {
            setPostError('User with this phone or email already exist');
        }
        setLoading(false);
    }

    const getPositions = async () => {
        try {
            const responce = await axios.get(API_POSITIONS);
            setPositions(responce.data.positions);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPositions();
        getToken();
    }, [])

    return (
        <>
            {userPosted ? (<Message title='User successfully registered' />) : (
                <>
                    <h2 className="title">Working with POST request</h2>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form__container">
                            <Controller
                                control={control}
                                name="name"
                                defaultValue=''
                                rules={nameValidation}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        label="Your name"
                                        fullWidth={true}
                                        className='form__input'
                                        value={value}
                                        onChange={onChange}
                                        error={!!errors.name?.message}
                                        helperText={errors.name?.message}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#00BDD3',
                                                },
                                            },
                                            '&:focus-within .MuiInputLabel-root': {
                                                color: '#00BDD3',
                                            },
                                        }}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="email"
                                defaultValue=''
                                rules={emailValidation}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        label="Email"
                                        fullWidth={true}
                                        className='form__input'
                                        value={value}
                                        onChange={onChange}
                                        error={!!errors.email?.message}
                                        helperText={errors.email?.message}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#00BDD3',
                                                },
                                            },
                                            '&:focus-within .MuiInputLabel-root': {
                                                color: '#00BDD3',
                                            },
                                        }}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="phone"
                                defaultValue=''
                                rules={phoneValidation}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        label="Phone"
                                        fullWidth={true}
                                        className='form__input'
                                        value={value}
                                        onChange={onChange}
                                        error={!!errors.phone?.message}
                                        helperText={errors.phone?.message}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#00BDD3',
                                                },
                                            },
                                            '&:focus-within .MuiInputLabel-root': {
                                                color: '#00BDD3',
                                            },
                                        }}
                                    />
                                )}
                            />

                            {positions.length > 0 ? (
                                <Controller
                                    name="position_id"
                                    control={control}
                                    rules={{ required: 'This field is required' }}
                                    render={({ field: { onChange, value }, }) => (
                                        <RadioGroup value={value} onChange={onChange} className='form__radio-group'>
                                            <h3 className='form__position'>Select your position</h3>
                                            {positions.map(position => (
                                                <FormControlLabel
                                                    key={position.id}
                                                    value={position.id}
                                                    className='form__radio-item'
                                                    control={<Radio sx={{
                                                        width: '35px',
                                                        height: '35px',
                                                        marginRight: '12px',
                                                        '& .MuiSvgIcon-root': {
                                                            width: '25px',
                                                            height: '25px',
                                                        },
                                                        '&:not(:checked)': {
                                                            color: '#D0CFCF',
                                                        },
                                                        '&.Mui-checked': {
                                                            color: '#00BDD3',
                                                        },

                                                    }} />}
                                                    label={<span className='form__label'>{position.name}</span>}
                                                />
                                            ))}
                                        </RadioGroup>
                                    )}
                                />

                            ) : (<Preloader />)}

                            <Controller
                                control={control}
                                name="photo"
                                rules={photoValidation}
                                render={({ field }) => (
                                    <div className='form__container'>
                                        <UIFileInput field={field} />
                                        {errors.photo && <span className='form__error'>{errors.photo.message}</span>}
                                    </div>
                                )}
                            />
                            {loading && <Preloader />}
                            {postError.length > 0 && <p className='form__fail'>{postError}</p>}
                            <button disabled={!isValid} className='form__submit' type="submit">Sign up</button>
                        </div>
                    </form>
                </>
            )}
        </>
    )
}

export default Form;