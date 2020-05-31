import Link from 'next/link';

export default () => {
  return (
    <>
      <h1>Hola mundo</h1>
      <Link href="/accounts/logout" passHref>
        <a>Cerrar sesion</a>
      </Link>
    </>
  )
}