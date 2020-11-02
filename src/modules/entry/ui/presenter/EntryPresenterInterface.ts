import { BasePresenter } from '../../../../core/base/BasePresenter';
import { EntryInteractorIntput } from '../../logic/interactor/EntryinteractorOutput';
import { EntryWireframeInterface } from '../wireframe/EntryWireframeInterface';
import { EntryViewInterface } from '../view/EntryViewInterface';

export interface EntryPresenterInterface
  extends BasePresenter<
    EntryViewInterface,
    EntryInteractorIntput,
    EntryWireframeInterface
  > {
  shouldRecoverViewState(): boolean;
}
