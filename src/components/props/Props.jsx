import './props.css'


export const Props = ({label, size, style }) => {
    return ( 
        <>
            <p className={`p ${size} ${style}`}>

            {label}

            </p>
        </>
     );
}