import { withAuthSync } from "../utils/auth"
import Link from 'next/link';
import { signOut } from "../lib/auth";


const Index = ({ user }) => {

  const finalizar = () => {
    signOut()
  }

  return (
    <>
      {JSON.stringify(user)}
      <h1>User</h1>
      <Link href="/accounts/logout" passHref>
        <a>Cerrar sesion</a>
      </Link>
    </>
  )
}
export default withAuthSync(Index)