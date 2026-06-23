function Card(props) {
    return  (

          <div className="card">
            <img src="https://images.unsplash.com/photo-1777932761339-509e4fcff572?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" />
            <h1>Name:{props.user}</h1>
            <h2>Age:{props.age}</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>View Profile</button>
          </div>
    )  
}
export default Card;