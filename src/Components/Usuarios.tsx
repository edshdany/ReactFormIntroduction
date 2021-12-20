import { useUsuarios } from '../hooks/useUsuarios';
import { User } from '../interfaces/reqRes';

export const Usuarios = () => {

    const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

    const renderItem = ( {id, first_name, last_name, email, avatar }: User ) => {

        return (
            <tr key={ id.toString() } >
                <th>
                    <img 
                        src={ avatar }
                        alt={ first_name }
                        style={{
                            width: 40,
                            borderRadius: 100
                        }}
                    ></img>
                </th>
                <th>{ first_name }</th>
                <th>{ last_name }</th>
            </tr>
        )
    }
    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( renderItem )
                    }

                </tbody>
            </table>

            <button
                className="btn btn-primary"
                onClick={ paginaAnterior }
                
            >
                Anteriores
            </button>


            <button
                className="btn btn-primary"
                onClick={ paginaSiguiente }
                
            >
                Siguiente
            </button>
        </>
    )
}
