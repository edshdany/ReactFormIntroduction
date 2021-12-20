import { useEffect, useRef, useState } from "react";
import { User, ReqResAPIUsers } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<User[]>([])

    const paginaRef = useRef(1);

    useEffect(() => {

        CargarUsuarios();
       
    }, [])


    const CargarUsuarios = async () => {

        const resp = await reqResApi.get<ReqResAPIUsers>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if( resp.data.data.length > 0){
            setUsuarios( resp.data.data );
        } else {
            paginaRef.current --;
            alert('Ya no hay mas usuarios');
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current ++;
        CargarUsuarios();
        console.log( paginaRef.current );

    }

    const paginaAnterior = () => {
        if ( paginaRef.current > 1 ){
            paginaRef.current --;
            CargarUsuarios();
            console.log( paginaRef.current );
        }

    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
        
    }

}
