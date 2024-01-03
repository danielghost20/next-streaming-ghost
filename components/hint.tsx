import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface HintProps {
    label: string,
    children: React.ReactNode,
    asChild?: boolean,
    side?: "top" | "bottom" | "left" | "right",
    aling?: "start" | "center" | "end"
}

export default function Hint ({label, children, asChild, side, aling} : HintProps) {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild={asChild}>
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side} align={aling} className="text-black bg-white">
                    <p className="font-semibold">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}