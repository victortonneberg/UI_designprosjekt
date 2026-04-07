function MultipleChoice(props) {
  return (
    <div>
      <p>{props.question.question}</p>

      {props.question.options.map((option) => (
        <button key={option.id} onClick={() => props.onSvar(option.id)}>
          {option.id}: {option.text}
        </button>
      ))}

      {props.valgtSvar && (
        
        <p>
          {props.valgtSvar === props.question.correct
            ? "Riktig!"
            : `Ops, dette var ikke helt riktig! riktig svar er: ${props.question.correct}`}
        </p>
        
      )}
    </div>
  )
}

export default MultipleChoice