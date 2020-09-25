/**
 * This Interface for NavItemClass
 */
export interface NavItemInterFace {
  /**
   * The Title text That will be shown inside Navigation Button
   *
   * and the Title should be UNIQUE
   */
  title: string | undefined;
  /**
   * Provide Icon name so it will be rendered inside Navigation Button
   * you can find more in {@link https://material.io/resources/icons Material-Icons}.
   */
  icon: string | undefined;
  /**
   * Provide your router link path
   */
  navLink: string | undefined;
  /**
   * Nested navigations
   */
  subNavs: NavItemInterFace[] | undefined;
}
