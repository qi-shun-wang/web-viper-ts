/**
 * Interactor contains the business logic as specified by a use case.
 *
 * An Interactor represents a single use case in the app.
 * It contains the business logic to manipulate model objects (Entities) to carry out a specific task.
 * The work done in an Interactor should be independent of any UI.
 */

export interface BaseInteractor<Output> {
  configureInteractorOutput(output: Output): void;
}
