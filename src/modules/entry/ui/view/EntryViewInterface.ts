import { BaseView } from '../../../../core/base/BaseView';

export interface EntryViewInterface extends BaseView {
  present(): void;
  dismiss(): void;

  updateServerStatus(status: string): void;
}
