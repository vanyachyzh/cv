import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
type Props = {
    children: ReactNode
    className?: string
}

const Block = ({ className, children }: Props) => {
    return (
        <div
            className={twMerge(
                "w-full rounded-2xl bg-bgSecondary p-6",
                className
            )}
        >
            {children}
        </div>
    )
}

export default Block
