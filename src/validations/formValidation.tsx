export const nameValidation = {
    required: true,
    validate: (value: string) => {
        if(value.length < 2) {
            return 'The name must be at least 2 characters'
        }
        if(value.length > 60) {
            return "The name must be at no more than 60 characters"
        }

        return true
    }
}

export const emailValidation = {
    required: true,
    validate: (value: string) => {
        const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if(!pattern.test(value)) {
            return 'The email must be a valid email address.'
        }

        return true
    }
}

export const phoneValidation = {
    required: true,
    validate: (value: string) => {
        if(value.startsWith("+380") && value.length === 13) {
            return true
        }
        return 'Incorect phone number'
        
    }
}

export const photoValidation = {
    required: true,
    validate: (value: File) => {
        if(value) {
            console.log(value.name);
            const photoSize = value.size;
            const maxSize = 5 * 1024 * 1024; // 5MB

            if(photoSize > maxSize) {
                return 'The photo may not be greater than 5 Mbytes.'
            }

            return true
        }
    }
}