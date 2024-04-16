import profilePic from "./assets/IMG_7207.jpg"

function Card(){

  return (
    <div className="card">
        <img className="card-image" src={profilePic} alt="profile picture" />
        <h2 className="card-title">Chang Suet Yan</h2>
        <p className="card-text">Undergraduate business analytic student</p>

    </div>
  )
}

export default Card