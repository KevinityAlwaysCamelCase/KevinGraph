interface Props {
    children: string;
    id: string;
}

function Equation({ children, id }: Props) {
    return (
        <div id={id}>
            {children}
        </div>
    )
}

export default Equation