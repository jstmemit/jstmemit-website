import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  header,
                                  icon,
                              }) => {
    return (
        <div
            className={cn(
                "relative min-h-[10rem] overflow-hidden group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl bg-gray-background p-4 transition duration-200 dark:border-white/[0.2] bg-cover bg-center",
                className
            )}
            style={{
                backgroundImage: `url(${header || "/images/bento-bg.png"})`,
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black rotate-10 scale-150 via-black/30 to-transparent pointer-events-none -mb-1" />

            <div className="relative z-10 transition duration-200 group-hover/bento:translate-x-2 text-start mt-auto">
                {icon}
                <div className="mt-2 mb-2 font-bold text-xl text-white">{title}</div>
                <div className="text-md font-normal text-neutral-400">
                    {description}
                </div>
            </div>
        </div>
    );
};