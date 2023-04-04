import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NewlineAfterDescriptionRule = {
  /**
   * Enforces a consistent padding of the block description.
   *
   * @see [newline-after-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-newline-after-description)
   */
  'jsdoc/newline-after-description': Rule<[RuleLevel, 'always' | 'never']>;
};
