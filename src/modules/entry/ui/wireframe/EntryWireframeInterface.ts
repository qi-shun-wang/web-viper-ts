import { BaseRouting } from '../../../../core/base/BaseRouting';
import UIView from 'uikit/UIView';
import { EntryModuleInterface } from '../../mi/EntryModuleInterface';

export interface EntryWireframeInterface
  extends BaseRouting<UIView, EntryModuleInterface> {
  updateFocus(isFocus: boolean): void;
}
