declare module '@salesforce/design-system-react/components/icon-settings' {
  import React from 'react';
  type Props = {
    /**
     * Path to the root icon folder
     * example: `/assets/icons`
     */
    iconPath?: string;
    /**
     * Function to allow developers to return a custom icon path--for instance, on the same page with a local anchor (`#down`). This is helpful for when there are Cross-Origin Resource Sharing (CORS) issues with SVGs that are located on another domain such as a CDN. `({category, name}) => { return \`#${name}\` }`
     */
    onRequestIconPath?: (v: any) => any;
    /**
     * Path to the action sprite
     * example: '@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg';
     */
    actionSprite?: string;
    /**
     * Path to the custom sprite
     * example: '@salesforce-ux/design-system/assets/icons/custom-sprite/svg/symbols.svg';
     */
    customSprite?: string;
    /**
     * Path to the doctype sprite
     * example: '@salesforce-ux/design-system/assets/icons/doctype-sprite/svg/symbols.svg';
     */
    doctypeSprite?: string;
    /**
     * Path to the standard sprite
     * example: '@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg';
     */
    standardSprite?: string;
    /**
     * Path to the utility sprite
     * example: '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';
     */
    utilitySprite?: string;

    children: React.ReactElement;
  };
  /**
   * The Icon Settings component allows for the path to the icons to be specified in all child components and is recommended to be used at the root of the application. It's render function is `return this.props.children`, so it can only have one child node.
   *
   * **Individual sprites**
   * If you are using webpack it is advised to use the sprite properties
   * {actionSprite, standardSprite...} to specify the individual sprite paths so that webpack can
   * easily re-write the paths.
   * ```
   * import actionSprite from '......';
   *
   * <IconSettings actionSprite={actionSprite} ......>
   * ```
   * **Root icon path**
   * Otherwise use the iconPath to specify the root path to where the icon files will be located in you application
   * such as `/assets/icons`.
   */
  function Component(props: Props): React.ReactElement;
  export default Component;
}
