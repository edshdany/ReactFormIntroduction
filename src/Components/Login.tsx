import { useEffect, useReducer } from "react";

interface AuthState {
    Validando: boolean,
    token: string | null,
    userName: string,
    nombre: string,
}

const initialState = {
    Validando: true,
    token: null,
    userName: '',
    nombre: ''
}
type LoginPayload = {
    userName: string,
    nombre: string,
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload}

const authReducer = ( state: AuthState, action: AuthAction  ): AuthState  => {

    switch ( action.type ) {
        case 'logout':
            return{
                Validando: false,
                token: null,
                nombre: '',
                userName:''
            }

            case 'login':
                return{
                    Validando:false,
                    token: 'ABC1234',
                    nombre: action.payload.nombre,
                    userName: action.payload.userName,
                }
                
        default:
            return state;
    }

}

export const Login = () => {

    const [{ Validando, token, nombre}, dispatch] = useReducer(authReducer, initialState);

    
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500);
    }, []);

    const login = () => {
        dispatch({ type: 'login', payload: {nombre: 'Midori', userName: 'GH3'}})
    }

    const logout = () => {
        dispatch({ type: 'logout'})
    }

    if( Validando ){
        return(
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login </h3>
            {
                ( token )
                ? <div className="alert alert-success">Autenticado como: {nombre}</div>
                : <div className="alert alert-danger">No autenticado</div>
            }

            {
                ( token )
                ? (<button className="btn btn-danger" onClick={ logout }>LogOut</button>)
                : (<button className="btn btn-primary" onClick={ login }>Login</button>)
            }
        </>
    )
}
