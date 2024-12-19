/* eslint-disable @typescript-eslint/no-explicit-any */
const Input = ({ disabled = false, className, ...props }:any) => (
    <input
        disabled={disabled}
        className={`${className} shadow-sm border border-gray-300 `}
        {...props}
    />
)

export default Input
