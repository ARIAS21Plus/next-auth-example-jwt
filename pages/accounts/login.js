import redirect from "../../lib/redirect";
import { setCookie } from "../../lib/session";
import { HTTPService } from "../../utils/HTTPService";
import { redirectIfAuthenticated } from "../../lib/auth";

function LoginPage() {

  const handleLogin = async () => {  

    const email = 'email@email.com';
    const password = 'my-password';

    const response = await HTTPService.axios({
      url: `/auth/login`,
      method: 'post',
      body: {
        email:  email.toLowerCase(),
        password: password
      }
    });
  
    if(response.success == true) {

      setCookie("token", response.data.token);      
      redirect("/user");
  
    }else if(response.success == false) {
      console.error(response.message);
    }
  }

  return (
    <>
      <button onClick={handleLogin}>Iniciar sesion</button>
    </>
  )
}

LoginPage.getInitialProps = async (ctx) => {
  redirectIfAuthenticated(ctx);
  return {};
}

export default LoginPage