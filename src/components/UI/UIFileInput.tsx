import { FC, useState, ChangeEvent } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import '../../styles/UI/ui-input-file.scss';

interface IFormType {
    name: string;
    email: string;
    phone: string;
    position: string;
    photo: File;
}

type FileInputProps = {
    field: ControllerRenderProps<IFormType, 'photo'>;
  };

const UIFileInput:FC<FileInputProps> = ({ field }) => {
    const [fileName, setFileName] = useState<string>('');
  
    const uploadPhotoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        field.onChange(file)
        if(file) {
            setFileName(file.name);
        } else{
            setFileName('');
        }
    }
    return (
        <>
            <label className='input-file' htmlFor='file'>
                <div className='input-file__button'>Upload</div>
                <div className='input-file__photo'>{fileName.length > 0 ? <span className='active'>{fileName}</span> : <span>Upload your photo</span>}</div>
            </label>
            <input 
                className='upload-photo' 
                type='file' 
                accept="image/jpg, image/jpeg" 
                id="file" 
                onChange={uploadPhotoHandler} 
            />
        </>
    )
}

export default UIFileInput;