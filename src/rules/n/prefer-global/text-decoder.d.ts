import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export interface PreferGlobalTextDecoderRule {
  /**
   * Enforce either `TextDecoder` or `require("util").TextDecoder`.
   *
   * @see [prefer-global/text-decoder](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/text-decoder.md)
   */
  'n/prefer-global/text-decoder': Rule<[RuleLevel, 'always' | 'never']>;
}
