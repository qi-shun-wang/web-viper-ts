export interface ViewTransitionDelegate {
  shouldAttachToSuperview(): void;
  shouldRemoveFromSuperview(): void;
}
