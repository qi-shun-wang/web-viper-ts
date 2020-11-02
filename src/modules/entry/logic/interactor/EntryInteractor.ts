import { BaseInteractor } from '../../../../core/base/BaseInteractor';
// import { ServerManager } from '../../../../core/service/music_server/ServerManager';
import  EntryDataManager  from '../manager/EntryDataManager';
import { EntryInteractorOutput } from './EntryInteractorInput';
import { EntryInteractorIntput } from './EntryinteractorOutput';

export default class EntryInteractor
  implements BaseInteractor<EntryInteractorOutput>, EntryInteractorIntput {
  private output?: EntryInteractorOutput;

  private dataManager: EntryDataManager;

  // private serverManager: ServerManager;

  constructor(dataManager: EntryDataManager ) {
    this.dataManager = dataManager;
    
  }

  configureInteractorOutput(output: EntryInteractorOutput): void {
    this.output = output;
  }

  fetchData(): void {
    setTimeout(() => {
      this.output?.didPrepareDataSuccess();
    }, 4000);

    if (this.dataManager.serverStatus()) {
      this.dataManager.updateServerStatus(false);
    }
  }

  startServer() {
    this.dataManager.updateServerStatus(true);
    // this.serverManager.run(3000);
  }

  stopServer() {
    this.dataManager.updateServerStatus(false);
    // this.serverManager.shutdown();
  }

  getServerStatus(): boolean {
    return this.dataManager.serverStatus();
  }
}
