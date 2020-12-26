import {CGRect,CGRectZero} from 'or-ui/kit/CGRect' 
export default class EntryDataManager {
  leftPannelFrame: CGRect = CGRectZero;

  updateServerStatus(isEnable: boolean) {
    this.leftPannelFrame = CGRectZero;
    localStorage.setItem('server_status', isEnable ? 'enable' : 'disable');
  }

  serverStatus(): boolean {
    const status = localStorage.getItem('server_status') ?? 'disable';
    const isEnable = status === 'enable';
    if (!isEnable) {
      this.updateServerStatus(false);
    }
    return isEnable;
  }
}
