import React  from 'react';

const containerStyle = {
  marginTop: -150,
  overflow: 'hidden',
  overflowX: 'scroll',
  overflowScrolling: "touch",
  WebkitOverflowScrolling: "touch",
}


const style = {
  borderRadius: '.5em',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  body: {
    height: '40vh',
  }
}

export default (props) => {
  const {rovers} = props;

  const displayCards = rovers.map(rover=>(
    <div className="column">
      <div className="card" key={rover.id} style={{...style,  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%),
url(${rover.bg})`}}>
        <div className={`card-content rover-${rover.slug}`} style={style.body}>
          <p className=" has-text-centered subtitle is-4 has-text-white has-text-weight-bold is-uppercase">
            <a onClick={()=>props.handler(rover.name)}>{rover.name}</a>
          </p>
        </div>

        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
            {`Sols: ${rover.sols}`}
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              {`Cameras: ${rover.cameras.length}`}
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              {`Collected: ${rover.slides.length}`}
            </span>
          </p>
        </footer>
      </div>
    </div>
  ))

  return (
    <div className="container roverSlideshow " style={containerStyle}>
      <div className="columns is-mobile">

      {rovers && displayCards}

    </div>
  </div>
  )
}
