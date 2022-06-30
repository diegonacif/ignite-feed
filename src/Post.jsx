export function Post(props) {
  return (
    <>
      <strong>Autor: {props.author}</strong>    
      <p>{props.content}</p>
    </>
  )
}
