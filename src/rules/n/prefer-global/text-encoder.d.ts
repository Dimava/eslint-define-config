import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export interface PreferGlobalTextEncoderRule {
  /**
   * Enforce either `TextEncoder` or `require("util").TextEncoder`.
   *
   * @see [prefer-global/text-encoder](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/text-encoder.md)
   */
  'n/prefer-global/text-encoder': Rule<[RuleLevel, 'always' | 'never']>;
}
