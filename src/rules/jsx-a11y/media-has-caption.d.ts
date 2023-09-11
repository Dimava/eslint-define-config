import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MediaHasCaptionRule {
  /**
   * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
   *
   * @see [media-has-caption](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/media-has-caption.md)
   */
  'jsx-a11y/media-has-caption': Rule<
    [
      RuleLevel,
      {
        audio?: string[];
        video?: string[];
        track?: string[];
        [k: string]: any;
      },
    ]
  >;
}
