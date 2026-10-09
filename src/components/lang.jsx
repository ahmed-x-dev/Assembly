export default function Lang({ title, color, backgroundcolor, isDead }) {
    const style = {
        backgroundColor: backgroundcolor,
        color: color,
        opacity: isDead ? 0.3 : 1
    }
    return (
        <span style={style} className="lang-pill">
            {title}
            {isDead && <span className="dead-icon">💀</span>}
        </span>
    )
}