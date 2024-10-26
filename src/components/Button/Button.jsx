import './button.css'

export const Button = ({ label, size, style }) => {
    return ( 
        <>
        <button className={`button ${size} ${style}`}>
            {label}
        </button>
        </>
     );
}