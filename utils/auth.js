import { getJwt } from '../lib/auth'
import redirect from '../lib/redirect';
import { HTTPService } from './HTTPService';

const getCurrentUser = async (ctx, token) => {
    const response = await HTTPService.axios({
      url: `/auth/currentUser`,
      method: 'get',
      token: token
    });

    if(response.success == true) {
      return response.data;
    }else if(response.success == false) {
      redirect("/accounts/login", ctx);
      console.error(response.message);
      throw response.message
    }
}

export const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    return <WrappedComponent {...props} />
  }

  Wrapper.getInitialProps = async (ctx) => {
    const token = getJwt(ctx); 
    const user = await getCurrentUser(ctx, token);

    const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps, user }
  }

  return Wrapper
}