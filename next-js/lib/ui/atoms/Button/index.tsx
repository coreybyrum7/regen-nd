import { Props } from "@/lib/types/components/button"
import { PrimaryButton } from "./variations/primary"
import { SecondaryButton } from "./variations/secondary"


/**
 * Primary UI component for user interaction
 */
export default function Button({ buttonType = 'primary', ...props }: Props) {
  switch (buttonType) {
    case 'primary':
      return <PrimaryButton {...props} />
    case 'secondary':
      return <SecondaryButton {...props} />
  }
}