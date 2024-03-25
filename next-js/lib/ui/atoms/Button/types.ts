import { ComponentPropsWithRef } from "react";
import { Theme, Dir } from "../../../types/generics/shared";

export type Variations = "primary" | "secondary" | "tertiary";

export type Sizes = "large" | "medium" | "small";

export interface Props extends ComponentPropsWithRef<"button"> {
  /**
   * What type of button is this?
   */
  buttonType?: Variations;
  /**
   * Should this special button include a fill?
   */
  includeFill?: boolean;
  /**
   * What theme is this button?
   */
  theme?: Theme;
  /**
   * How large should the button be?
   */
  size?: Sizes;
  /**
   * Should this button include an icon?
   */
  includeIcon?: boolean;
  /**
   * Should this icon display on the left or right of the button label?
   */
  iconPosition?: Dir;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
