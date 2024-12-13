export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Features: undefined;
  Pricing: undefined;
  Contact: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}