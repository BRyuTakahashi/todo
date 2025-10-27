import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

export const iconVariants = cva("", {
    variants: {
        animate: {
            true: "animate-spin",
            false: ""
        }
    },
    defaultVariants: {
        animate: false
    }
})

interface Props extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
    svg: React.FC<React.ComponentProps<"svg">>
}

export function Icon({ svg: SvgComponent, animate, className, ...props }: Props) {


    return <SvgComponent className={iconVariants({ animate, className })} {...props} />
}
