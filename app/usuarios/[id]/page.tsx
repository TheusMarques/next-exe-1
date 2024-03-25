import usuarios from '@/src/usuarios';
import Link from 'next/link';

export default function PerfilUsuario ({ params }: { params: { id: string } }) {

    const usuario = usuarios.filter((usu, index, array)=>usuario.id ===parseInt(params.id))
    return(
        <>
            <h1>Perfil</h1>
            <p>Nome do usuário {params.id}</p>

            <p><Link href={'/usuarios'}>Voltar</Link></p>            
        </>
    );
}