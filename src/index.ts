import { ProvideAuth, useAuth, authorize, DefaultRole, LoginProvider } from './auth/auth';
import AuthBrowserRouter from './components/router/routers/AuthBrowserRouter';
import AuthHashRouter from './components/router/routers/AuthHashRouter';
import AuthMemoryRouter from './components/router/routers/AuthMemoryRouter';
import AuthStaticRouter from './components/router/routers/AuthStaticRouter';
import { useAuthRoutes } from './components/router/routers/AuthRouter';
import HiddenRoute from './components/router/routes/HiddenRoute';
import HiddenComponent from './components/private_components/HiddenComponent';
import ProtectedComponent from './components/private_components/ProtectedComponent';

export type { AuthorizationContext, Roles, User, ProvideAuthProps } from './auth/auth';
export type { HiddenComponentProps } from './components/private_components/HiddenComponent';
export type { ProtectedComponentProps as UnauthorizedComponentProps } from './components/private_components/ProtectedComponent';

export {
  DefaultRole,
  LoginProvider,
  ProvideAuth,
  useAuth,
  authorize,
  HiddenComponent,
  ProtectedComponent as UnauthorizedComponent,
  useAuthRoutes,
  AuthBrowserRouter,
  AuthHashRouter,
  AuthMemoryRouter,
  AuthStaticRouter,
  HiddenRoute,
};
