import './Button.scss';

const Button = ({ btnName, onClick }) => {
    return (
        <button className="button" onClick={onClick}>{ btnName }</button>
    )
}

export default Button