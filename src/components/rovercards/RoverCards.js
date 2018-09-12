import React  from 'react';

export default (props) => {
  const {rovers} = props;
  const displayCards = rovers.map(rover=>(
    <div className="card column" key={rover.id}>
      <div className={`card-content rover-${rover.slug}`}>
        <p className="subtitle">
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
  ))
  return (
    <div className="container roverSlideshow " style={{marginTop:-50}}>
      <div className="columns">


      {rovers && displayCards}


    </div>
  </div>
  )
}
