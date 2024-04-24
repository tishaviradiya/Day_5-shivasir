

const Card=({name,age,learning,img})=>{
    return(
        <div className="card">
            <img src={img} alt="" />
            <h2>Name :{name}</h2>
            <h2>Age: {age}</h2>
            <h2>Learning: {learning}</h2>
        </div>
    )
}
export default Card;