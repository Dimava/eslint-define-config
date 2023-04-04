import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoArrowFunctionsInWatchRule = {
  /**
   * Disallow using arrow functions to define watcher.
   *
   * @see [no-arrow-functions-in-watch](https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html)
   */
  'vue/no-arrow-functions-in-watch': Rule<[RuleLevel]>;
};
