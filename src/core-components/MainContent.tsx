import { cx } from "class-variance-authority"

interface Props extends
    React.ComponentProps<'main'> { }

export function MainContent({ children, className, ...props }: Props) {
    return (
        <main className={cx("(mt-4 md:mt-8", className)}  {...props} >\
            {children}
        </main >
    )
}