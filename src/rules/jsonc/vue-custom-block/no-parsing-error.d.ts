import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export type VueCustomBlockNoParsingErrorRule = {
  /**
   * Disallow parsing errors in Vue custom blocks.
   *
   * @see [vue-custom-block/no-parsing-error](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/vue-custom-block/no-parsing-error.html)
   */
  'jsonc/vue-custom-block/no-parsing-error': Rule<[RuleLevel]>;
};
