import redirect from "./redirect";
import { setCookie, getCookie, removeCookie } from "./session";


// Finalizar sesión
export const signOut = (ctx = {}) => {
  if (process.browser) {
    removeCookie("token");
    redirect("/accounts/login", ctx);
  }
};

// Acceder a el JWT token
export const getJwt = ctx => {
  return getCookie("token", ctx.req);
};

// Verificamos si estamos autenticados
export const isAuthenticated = ctx => !!getJwt(ctx);

// Redireccionar si ya estamos autenticados
export const redirectIfAuthenticated = ctx => {
  if (isAuthenticated(ctx)) {
    redirect("/user", ctx);
    return true;
  }
  return false;
};

// Verificamos si aún no estamos autenticados
export const redirectIfNotAuthenticated = ctx => {
  if (!isAuthenticated(ctx)) {
    redirect("/accounts/login", ctx);
    return true;
  }
  return false;
};