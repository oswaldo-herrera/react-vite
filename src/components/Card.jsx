export default  function Card(props){
    return(
        <article className="card">
            <p>{props.image}</p>
            {/* <img src={props.image} alt="" /> */}
            <h3>{props.titulo}</h3>
            <p>{props.parrafo}</p>
            

        </article>
    );
}