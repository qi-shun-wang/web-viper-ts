import { BasePresenter } from './BasePresenter';

export interface BaseModulePresenter<ModuleDelegate, View, Interactor, Router>
  extends BasePresenter<View, Interactor, Router> {
  configureModuleDelegate(moduleDelegate: ModuleDelegate): void;
}
