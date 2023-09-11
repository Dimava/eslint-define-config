import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export interface VueCustomBlockNoParsingErrorRule {
  /**
   * Disallow parsing errors in Vue custom blocks.
   *
   * @see [vue-custom-block/no-parsing-error](https://ota-meshi.github.io/eslint-plugin-yml/rules/vue-custom-block/no-parsing-error.html)
   */
  'yml/vue-custom-block/no-parsing-error': Rule<[RuleLevel]>;
}
