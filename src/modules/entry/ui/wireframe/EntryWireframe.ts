import { EntryWireframeInterface } from './EntryWireframeInterface';
import { EntryPresenterInterface } from '../presenter/EntryPresenterInterface';
import EntryView from '../view/EntryView';
import { EntryModuleInterface } from '../../mi/EntryModuleInterface';
import { ViewTransitionDelegate } from '../../../../core/ui/ViewTransitionDelegate';
import PresentationTransition from '../../../../core/ui/PresentationTransition';
import DismissalTransition from '../../../../core/ui/DismissalTransition';
import UIView from 'uikit/UIView';

export default class EntryWireframe
  implements EntryWireframeInterface, ViewTransitionDelegate {
  isFocus = false;

  updateFocus(isFocus: boolean): void {
    this.isFocus = isFocus;
  }

  parentView!: UIView;

  view?: EntryView;

  presenter?: EntryPresenterInterface & EntryModuleInterface;

  configureParentView(parent: UIView): void {
    this.parentView = parent;
  }

  configurePresenter(
    presenter: EntryPresenterInterface & EntryModuleInterface
  ): void {
    this.presenter = presenter;
  }

  presentViewFromParent(): void {
    console.log(
      `presentViewFromParent: ${JSON.stringify(this.parentView!.frame)}`
    );
    this.view = new EntryView(this.parentView!.frame);
    this.view.eventHandler = this.presenter;
    this.view.transitionDelegate = this;
    this.parentView.addView(this.view);
    this.presenter?.attachView(this.view);
    if (this.presenter?.shouldRecoverViewState()) {
      // TODO
    }
    this.updateFocus(true);
  }

  dismissViewFromParent(): void {
    this.presenter?.detachView();
    this.updateFocus(false);
  }

  shouldAttachToSuperview(): void {
    if (this.view)
      PresentationTransition.animate(this.view.element, () => {
        console.log('Done');
      });
  }

  shouldRemoveFromSuperview(): void {
    if (this.view)
      DismissalTransition.animate(this.view.element, () => {
        console.log('Done');
        if (this.view) this.parentView?.removeSubView(this.view);
      });
  }
}
