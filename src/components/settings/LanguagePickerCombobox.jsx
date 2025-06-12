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

const languages = [
    {
        value: "en",
        label: "English",
        flag: "/assets/gb.png",
    },
    {
        value: "ru",
        label: "Русский",
        flag: "/assets/ru.png",
    },
    {
        value: "nl",
        label: "Nederlands",
        flag: "/assets/nl.png",
    },
    {
        value: "uk",
        label: "Українська",
        flag: "/assets/ua.png",
    },
]

export const LanguagePickerCombobox = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("en")

    const selectedLanguage = languages.find((language) => language.value === value)

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
                        {selectedLanguage ? (
                            <>
                                <img
                                    src={selectedLanguage.flag}
                                    alt={selectedLanguage.label}
                                    width={16}
                                    height={12}
                                    className="rounded-sm"
                                />
                                <span>{selectedLanguage.label}</span>
                            </>
                        ) : (
                            "Select language..."
                        )}
                    </div>
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full md:w-[400px] p-0">
                <Command>
                    <CommandList>
                        <CommandEmpty>No language found.</CommandEmpty>
                        <CommandGroup>
                            {languages.map((language) => (
                                <CommandItem
                                    key={language.value}
                                    value={language.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={language.flag}
                                            alt={language.label}
                                            width={16}
                                            height={12}
                                            className="rounded-sm"
                                        />
                                        <span>{language.label}</span>
                                    </div>
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === language.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}