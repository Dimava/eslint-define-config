import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export interface PreferGlobalTextDecoderRule {
  /**
   * Enforce either `TextDecoder` or `require("util").TextDecoder`.
   *
   * @see [prefer-global/text-decoder](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/text-decoder.md)
   */
  'node/prefer-global/text-decoder': Rule<[RuleLevel, 'always' | 'never']>;
}
