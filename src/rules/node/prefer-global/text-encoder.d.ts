import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export type PreferGlobalTextEncoderRule = {
  /**
   * Enforce either `TextEncoder` or `require("util").TextEncoder`.
   *
   * @see [prefer-global/text-encoder](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/text-encoder.md)
   */
  'node/prefer-global/text-encoder': Rule<[RuleLevel, 'always' | 'never']>;
};
