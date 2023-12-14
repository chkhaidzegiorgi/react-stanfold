// Core
type ICoreState = {
  token?: string;
  providers: string[];
};

interface RootState {
  core: ICoreState;
}
