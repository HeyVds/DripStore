import "./input.css"



export const FormInput = ({ title, placeholder, type = "text", className, id, handleChange, ...props }) => {
    return (
        <div className={`input-container `}>
            <label className="input-title">{title}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={`input-field ${className}`}
                required
                onChange={handleChange}
                {...props}
            />
        </div>
    );
}; 