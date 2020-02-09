import { Action, Selector, State, StateContext } from '@ngxs/store';

export class ChangeNavState {
  static readonly type = '[APP] Change Navigation State';
  constructor(
    public name: string
  ) {
  }
}

export class AppStateModel {
  UI: {
    activeNav: string
  };
}

@State<AppStateModel>({
  name: 'appNavState',
  defaults: {
    UI: {
      activeNav: 'home'
    }
  }
})
export class AppState {
  constructor() {}
  @Selector()
  static activeNav(state: AppStateModel): string {
    return state.UI.activeNav;
  }
  @Action(ChangeNavState)
  changeNavState(ctx: StateContext<AppStateModel>, payload: ChangeNavState) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      UI: {
        activeNav: payload.name
      }
    });
  }
}
