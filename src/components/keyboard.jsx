export default function Keyboard({ letter, status, disabled ,onClick }) {

    const style = {
        backgroundColor:
            status === "correct"
                ? "#10A95B"
                : status === "wrong"
                ? "#EC5D49"
                : ""
    }

    return (
        <button
            style={style}
            disabled={status !== "" || disabled}
            className="key"
            onClick={onClick}
        >
            {letter}
        </button>
    )
}