import { Provider as ReduxProvider } from "react-redux";

import { store } from "../state/store";

interface RtkProviderProps {
  children: React.ReactNode;
}

/**
 * @component RtkProvider
 * @argument0 {React.ReactNode} children
 * @description Wraps the children with the store context provider.
 */
const RtkProvider = ({
  children,
}: RtkProviderProps): JSX.Element => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default RtkProvider;
