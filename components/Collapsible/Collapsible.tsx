import {
  CollapsibleContent as CollapsibleContentPrimitive,
  CollapsibleContentProps,
} from '@radix-ui/react-collapsible';
import { twMerge } from 'tailwind-merge';

export {
  Collapsible,
  CollapsibleTrigger,
  type CollapsibleTriggerProps,
  type CollapsibleProps,
} from '@radix-ui/react-collapsible';

const CollapsibleContent = ({
  className,
  ...props
}: CollapsibleContentProps) => {
  return (
    <CollapsibleContentPrimitive
      {...props}
      className={twMerge('CollapsibleContent', className)}
    />
  );
};

export { CollapsibleContent, type CollapsibleContentProps };
