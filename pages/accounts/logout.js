import { signOut } from "../../lib/auth";

// No es necesario tener una página para cerra la sesión
// pero la ventaja es que de esta manera se integra mejor
// al componente de la cabecera.

function Logout() {
  return null
}

Logout.getInitialProps = async (ctx) => {
  signOut();
  return {};
}

export default Logout