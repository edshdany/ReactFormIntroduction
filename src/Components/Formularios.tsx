import { useForm } from '../hooks/useForm';

export const Formularios = () => {

    const { formulario, email, password, mionChange} =  useForm({
        email: 'test@test.com',
        password: '1234'
    });

    return (
        <>
        <h3>Formularios</h3>
        <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={( { target } ) => mionChange( target.value, 'email')}
        />

        <input
            type="text"
            className="form-control mt-2 mb-2"
            placeholder="Password"
            value={password}
            onChange={( { target } ) => mionChange( target.value, 'password')}

        />

        <code>
            <pre>{ JSON.stringify( formulario, null, 2 )}</pre>
        </code>
            
        </>
    )
}
