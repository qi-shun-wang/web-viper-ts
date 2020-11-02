// import ServerManager from './core/service/music_server/ServerManager';
import EntryInteractor from './modules/entry/logic/interactor/EntryInteractor';
import EntryDataManager from './modules/entry/logic/manager/EntryDataManager';
import EntryPresenter from './modules/entry/ui/presenter/EntryPresenter';
import EntryWireframe from './modules/entry/ui/wireframe/EntryWireframe';
import { EntryWireframeInterface } from './modules/entry/ui/wireframe/EntryWireframeInterface';

export default class AppModuleAssembler {
  entryWireframe?: EntryWireframeInterface;

  setupEntryModule() {
    const entryDataManager = new EntryDataManager();
    // const serverManager = new ServerManager();
    const entryInteractor = new EntryInteractor(
      entryDataManager,
      // serverManager
    );
    const entryPresenter = new EntryPresenter();
    this.entryWireframe = new EntryWireframe();

    entryPresenter.configureInteractor(entryInteractor);
    entryPresenter.configureRouter(this.entryWireframe);

    entryInteractor.configureInteractorOutput(entryPresenter);
    this.entryWireframe.configurePresenter(entryPresenter);
  }
}
