export default class PresentationTransition {
  static animate(view: HTMLElement, done: () => void) {
    const animation = view.animate(
      [
        { transform: `translateX(${document.body.clientWidth}px)` },
        { transform: 'translateX(0px)' },
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
