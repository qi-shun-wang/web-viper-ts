export default class DismissalTransition {
  static animate(view: HTMLElement, done: () => void) {
    const animation = view.animate(
      [
        { transform: `translateX(0px)` },
        { transform: `translateX(${document.body.clientWidth}px)` },
      ],
      {
        // timing options
        duration: 1000,
        iterations: 1,
      }
    );
    animation.onfinish = () => {
      done();
    };
  }
}
