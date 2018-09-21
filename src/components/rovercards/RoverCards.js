import React  from 'react';


export default (props) => {
  const {rovers, mini} = props;

  const containerStyle = {
    marginTop: `${mini? '-20px': '-100px'}`,
    overflow: 'hidden',
    overflowX: 'scroll',
    overflowScrolling: 'touch',
    WebkitOverflowScrolling: 'touch',
  }

  const style = {
    borderRadius: '.5em',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minWidth: '25vw',
    body: {
      height: `${mini? '15vh':'30vh'}`,
    },
    footer: {
      marginTop: `${mini? '15vh':'5vh'}`,
    },
    title: {}
  }


  const displayCards = rovers.map(rover=>(
    <div className="column" key={rover.id}>
      <a onClick={()=>props.handler(rover)}>
      <div className="card"
        key={rover.id}
        style={{...style,  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%),
url(${rover.bg})`}}
      >
        <div className={`card-content has-text-centered has-text-weight-bold is-uppercase rover-${rover.slug}`} style={style.body}>
          <p className={`title has-text-light  ${mini? 'is-7': 'is-4'} `} >{rover.name}
          </p>
          <p className="subtitle has-text-warning is-7">Status: {rover.status}</p>
        </div>
        {props.mini? null:
        <footer className="card-footer" style={style.footer}>
          <p className="card-footer-item">
            <span>
            {`Sols: ${rover.max_sol}`}
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
        }
      </div></a>
    </div>
  ))

  return (
    <div className="container roverSlideshow " style={containerStyle}>
      <p className="has-text-grey subtitle is-6">Choose a Rover to explore:</p>
      <div className="columns is-mobile">
        {rovers && displayCards}
      </div>
    </div>
  )
}
