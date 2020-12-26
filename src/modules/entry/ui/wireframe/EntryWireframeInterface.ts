import { BaseRouting } from '../../../../core/base/BaseRouting';
import { EntryModuleInterface } from '../../mi/EntryModuleInterface';
import UIView from 'or-ui/kit/UIView'

export interface EntryWireframeInterface
  extends BaseRouting<UIView, EntryModuleInterface> {
  updateFocus(isFocus: boolean): void;
}
