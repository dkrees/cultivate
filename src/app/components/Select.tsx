import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as RxSelect from "@radix-ui/react-select";

type ItemProps = {
  id?: string;
  itemGroup?: ItemProps[];
  text: string;
  value?: string;
};

interface Props {
  items: ItemProps[];
  placeholder?: string;
}

const Select = ({ items, placeholder }: Props) => {
  return (
    <RxSelect.Root>
      <RxSelect.Trigger className="inline-flex w-full items-center justify-between rounded border border-gray-400 px-2 py-1">
        <RxSelect.Value
          placeholder={placeholder ? placeholder : "Select an option"}
        />
        <RxSelect.Icon className="ml-1 text-gray-500">
          <ChevronDownIcon />
        </RxSelect.Icon>
      </RxSelect.Trigger>
      <RxSelect.Portal className="">
        <RxSelect.Content className="overflow-hidden rounded-md bg-white shadow-md">
          <RxSelect.ScrollUpButton className="flex h-6 cursor-default items-center justify-center bg-gray-100 text-gray-600">
            <ChevronUpIcon />
          </RxSelect.ScrollUpButton>
          <RxSelect.Viewport className="p-[5px]">
            {items.map((item) => (
              <RxSelect.Item
                key={item.id ? item.id : item.text}
                value={item.value ? item.value : item.text}
                className="relative flex select-none items-center rounded py-2 pl-6 pr-6 leading-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-100 data-[disabled]:text-gray-300 data-[highlighted]:text-gray-800 data-[highlighted]:outline-none"
              >
                <RxSelect.ItemText>{item.text}</RxSelect.ItemText>
                <RxSelect.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
                  <CheckIcon />
                </RxSelect.ItemIndicator>
              </RxSelect.Item>
            ))}
          </RxSelect.Viewport>
          <RxSelect.ScrollDownButton className="flex h-6 cursor-default items-center justify-center bg-gray-100 text-gray-600">
            <ChevronDownIcon />
          </RxSelect.ScrollDownButton>
        </RxSelect.Content>
      </RxSelect.Portal>
    </RxSelect.Root>
  );
};

export default Select;
