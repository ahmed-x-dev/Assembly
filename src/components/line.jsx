export default function  Line({letter, isGuessed, gameOver}) {
    return (
      <>
        <span
          style={{ color: !isGuessed && gameOver ? "#e91111" : "#fff" }}
          className="letter"
        >
          {isGuessed || gameOver ? letter : ""}
        </span>
      </>
    );
} 