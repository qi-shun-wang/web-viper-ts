/**
 * Routing contains navigation logic for describing which screens are shown in which order.
 *
 * Routes from one screen to another are defined in the wireframes created by an interaction designer.
 * In VIPER, the responsibility for Routing is shared between two objects: the Presenter, and the wireframe.
 * A wireframe object owns the Activity, Fragment, etc. It is responsible for creating a View/Activity/Fragment and installing it in the window.
 * Since the Presenter contains the logic to react to user inputs, it is the Presenter that knows when to navigate to another screen, and which screen to navigate to.
 * Meanwhile, the wireframe knows how to navigate.
 * So, the Presenter will use the wireframe to perform the navigation.
 * Together, they describe a route from one screen to the next.
 * The wireframe is also an obvious place to handle navigation transition animations.
 */

export interface BaseRouting<ParentView, Presenter> {
  configureParentView(parent: ParentView): void;
  configurePresenter(presenter: Presenter): void;
  presentViewFromParent(): void;
  dismissViewFromParent(): void;
}
