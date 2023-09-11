import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export interface PreferGlobalBufferRule {
  /**
   * Enforce either `Buffer` or `require("buffer").Buffer`.
   *
   * @see [prefer-global/buffer](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/buffer.md)
   */
  'n/prefer-global/buffer': Rule<[RuleLevel, 'always' | 'never']>;
}
