import { EntryWireframeInterface } from '../wireframe/EntryWireframeInterface';
import { EntryInteractorIntput } from '../../logic/interactor/EntryinteractorOutput';
import { EntryPresenterInterface } from './EntryPresenterInterface';
import { EntryViewInterface } from '../view/EntryViewInterface';
import { EntryInteractorOutput } from '../../logic/interactor/EntryInteractorInput';
import { EntryModuleInterface } from '../../mi/EntryModuleInterface';
// import MediaPlayer from '../../../../core/AVFoundation/MediaPlayer';

export default class EntryPresenter
  implements
    EntryPresenterInterface,
    EntryInteractorOutput,
    EntryModuleInterface {
  isLoaded = false;

  // player = new MediaPlayer();

  performBackAction(): void {
    console.log('performBackAction');
    if (this.interactor?.getServerStatus()) {
      this.interactor?.stopServer();
    } else {
      this.interactor?.startServer();
    }
    this.updateServerStatus();

    // this.router?.dismissViewFromParent();
  }

  private updateServerStatus() {
    this.view!.updateServerStatus(
      this.interactor!.getServerStatus() ? 'Enable' : 'Disable'
    );
  }

  didPrepareDataSuccess(): void {
    this.isLoaded = true;
  }

  shouldRecoverViewState(): boolean {
    this.interactor?.fetchData();
    return false;
  }

  private interactor?: EntryInteractorIntput;

  private router?: EntryWireframeInterface;

  private view?: EntryViewInterface;

  configureInteractor(interactor: EntryInteractorIntput): void {
    this.interactor = interactor;
  }

  configureRouter(router: EntryWireframeInterface): void {
    this.router = router;
  }

  attachView(view: EntryViewInterface): void {
    this.view = view;
    this.view.present();
    // this.player.play()
    this.updateServerStatus();
  }

  detachView(): void {
    this.view?.dismiss();
  }
}
