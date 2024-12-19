/* eslint-disable @typescript-eslint/no-explicit-any */
const Label = ({ className, children, ...props }:any) => (
    <label
        className={`${className} block font-medium text-lg text-gray-300`}
        {...props}>
        {children}
    </label>
)

export default Label
