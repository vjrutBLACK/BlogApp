import * as React from 'react';
import {User} from '../models/User';

export interface AppContextInterface {
  user: User | undefined;
  updateUser: (userStatus: User | undefined) => void;
}

const AppContext = React.createContext<AppContextInterface>({
  user: undefined,
  updateUser: () => {},
});

export const AppContextProvider = AppContext.Provider;

export const AppContextConsumer = AppContext.Consumer;

export default AppContext;

// home
export interface HomeContextInterface {
  // permissionModalDisplay: boolean;
  showRequestPermissionModal: () => void;
  closeRequestPermissionModal: () => void;
}
export const HomeContext = React.createContext<HomeContextInterface>({
  // permissionModalDisplay: false,
  showRequestPermissionModal: () => {},
  closeRequestPermissionModal: () => {},
});
export const HomeContextProvider = HomeContext.Provider;

export const HomeContextConsumer = HomeContext.Consumer;
