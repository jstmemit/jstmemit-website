import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const frequencies = [
    {
        value: "hardly-ever",
        label: "Hardly ever",
        emoji: "🟥",
        subtext: "Once every ~100 messages",
    },
    {
        value: "rarely",
        label: "Rarely",
        emoji: "🟧",
        subtext: "Once every ~50 messages",
    },
    {
        value: "sometimes",
        label: "Sometimes",
        emoji: "🟨",
        subtext: "Once every ~20 messages (recommended)",
    },
    {
        value: "often",
        label: "Often",
        emoji: "🟩",
        subtext: "Once every ~10 messages",
    },
]

export const FrequencyCombobox = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("sometimes")

    const selectedFrequency = frequencies.find(
        (frequency) => frequency.value === value
    )

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="default"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full md:w-[400px] h-12 justify-between border-2 border-ash-gray"
                >
                    <div className="flex items-center gap-2">
                        {selectedFrequency ? (
                            <>
                                <span className="text-lg">
                                    {selectedFrequency.emoji}
                                </span>
                                <span>{selectedFrequency.label}</span>
                            </>
                        ) : (
                            "Select frequency..."
                        )}
                    </div>
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full md:w-[400px] p-0">
                <Command>
                    <CommandList>
                        <CommandEmpty>No frequency found.</CommandEmpty>
                        <CommandGroup>
                            {frequencies.map((frequency) => (
                                <CommandItem
                                    key={frequency.value}
                                    value={frequency.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue)
                                        setOpen(false)
                                    }}
                                    className="flex-col items-start py-3"
                                >
                                    <div className="flex items-center gap-2 w-full">
                                        <span className="text-lg">
                                            {frequency.emoji}
                                        </span>
                                        <div className="flex flex-col">
                                            <span className="font-medium">
                                                {frequency.label}
                                            </span>
                                            <span className="text-sm text-muted-foreground">
                                                {frequency.subtext}
                                            </span>
                                        </div>
                                        <Check
                                            className={cn(
                                                "ml-auto",
                                                value === frequency.value
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            )}
                                        />
                                    </div>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}