/**
 * View displays what it is told to by the Presenter and relays user input back to the Presenter.
 *
 * The View is passive.
 * It waits for the Presenter to give it content to display;
 * it never asks the Presenter for data.
 * Methods defined for a View should allow a Presenter to communicate at a higher level of abstraction,
 * expressed in terms of its content,
 * and not how that content is to be displayed.
 */

export interface BaseView {
  element: Element;
}
