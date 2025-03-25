interface Props{
    onClick: () => void;
}

const Button = ({ onClick }: Props) => {
    return(
    <button  className="botao btn btn-success" onClick={onClick}>Solte!</button>
);
}

export default Button;