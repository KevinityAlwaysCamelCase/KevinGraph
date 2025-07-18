interface Props {
    children: string;
    goto: string
}

function MenuObject({ children, goto }: Props) {
    const handleClick = () => { }
    return (
        <>
            <button className="menuButton">{children}</button>
        </>
    )
}

export default MenuObject;