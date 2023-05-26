import { FC } from 'react'
import Form from "./Form";

const SignUp:FC = () => {
    return (
        <section className="sign-up" style={{paddingBottom: '100px'}}>
            <div className="container">
                <h2 className="title">Working with POST request</h2>
                <Form />
            </div>
        </section>
    )
}

export default SignUp;