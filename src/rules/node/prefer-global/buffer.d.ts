import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export type PreferGlobalBufferRule = {
  /**
   * Enforce either `Buffer` or `require("buffer").Buffer`.
   *
   * @see [prefer-global/buffer](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/buffer.md)
   */
  'node/prefer-global/buffer': Rule<[RuleLevel, 'always' | 'never']>;
};
