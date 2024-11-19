import "./input.css"



export const FormInput = ({ title, placeholder, type = "text", className, ...props }) => {
    return (
        <div className={`input-container `}>
            <label className="input-title">{title}</label>
            <input
                type={type}
                placeholder={placeholder}
                className={`input-field ${className}`}
                {...props}
            />
        </div>
    );
};