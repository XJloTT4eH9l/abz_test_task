import { FC } from 'react'
import Form from "./Form";

const SignUp:FC = () => {
    return (
        <section className="sign-up" id="signUp" style={{paddingBottom: '100px'}}>
            <div className="container">
                <Form />
            </div>
        </section>
    )
}

export default SignUp;