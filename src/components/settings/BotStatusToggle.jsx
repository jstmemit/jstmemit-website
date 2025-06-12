import * as React from "react"
import { Button } from "@/components/ui/button"

export const BotStatusToggle = () => {
    const [isWorking, setIsWorking] = React.useState(true)

    const toggleStatus = () => {
        setIsWorking(!isWorking)
    }

    return (
        <div className="flex items-center justify-between rounded-md">
            <div className="flex items-center gap-2">
                <div
                    className={`w-5 h-5 rounded-full ${
                        isWorking ? "bg-green-600" : "bg-red-600"
                    }`}
                />
                <span className="text-white text-sm sm:text-md">
                    Bot is {isWorking ? "working" : "not working"} in this
                    channel!
                </span>
            </div>
            <Button
                onClick={toggleStatus}
                className={`${
                    isWorking
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-green-600 hover:bg-green-700"
                } text-white`}
            >
                {isWorking ? "Disable" : "Enable"}
            </Button>
        </div>
    )
}