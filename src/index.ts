 
import AppDependencies from './AppDependencies';
import UIWindow from 'uikit/UIWindow';



const appDependencies = new AppDependencies();

appDependencies.configure();
console.log("Run")
document.addEventListener('DOMContentLoaded', () => {
  const window = new UIWindow();
  window.setBackgroundColor('red');
  document.body.appendChild(window.element);
  appDependencies.installRootView(window);
});
