import AppModuleAssembler from './AppModuleAssembler';
import UIView from 'uikit/UIView';

export default class AppDependencies {
  assembler?: AppModuleAssembler;

  configure() {
    this.assembler = new AppModuleAssembler();
    this.assembler.setupEntryModule();
  }

  installRootView(root: UIView) {
    this.assembler?.entryWireframe?.configureParentView(root);
    this.assembler?.entryWireframe?.presentViewFromParent();
  }
}
