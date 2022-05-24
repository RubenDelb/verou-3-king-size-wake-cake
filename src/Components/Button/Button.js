import './Button.scss';

const Button = ({ btnName, onClick }) => {
    return (
        <button className="button">{ btnName }</button>
    )
}

export default Button