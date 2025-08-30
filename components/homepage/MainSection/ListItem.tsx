import {
  Collapsible,
  CollapsibleContent,
  CollapsibleProps,
  CollapsibleTrigger,
} from '@/components/Collapsible';

interface ListItemProps extends CollapsibleProps {
  title: string;
}

export const ListItem = ({ children, title, ...props }: ListItemProps) => {
  return (
    <Collapsible {...props} asChild>
      <CollapsibleTrigger asChild>
        <li className="group flex w-full cursor-pointer flex-col items-start justify-center gap-2 border-t-1 border-gray-200 px-4 py-2">
          <h5 className="group-data-[state=closed]:group-hover:text-accent">
            {title}
          </h5>
          <CollapsibleContent>
            <div className="px-1 py-2 pb-4">{children}</div>
          </CollapsibleContent>
        </li>
      </CollapsibleTrigger>
    </Collapsible>
  );
};
