import './componente.css'
import  PropTypes  from 'prop-types'


//se borro el react porque igual sirve
export const PrimerComponente = ({titulo, sub, elvin="que te importa"}) => {
  return (
    //<></>: este se usa actualmente y es un padre donde
    //puede varios hijos osea etiqueta
    //antes se usaba div
    //se usaba frament
    <>
      <h1>props: {titulo}</h1>
      <h1>numero: {sub}</h1>
     
      <h1>elvin: {elvin}</h1>
    </>
  )
}



/*estp sirve como para que sea obligado la variable que lleve datos */
PrimerComponente.PropTypes={
  titulo: PropTypes.string.isRequired,
  sub: PropTypes.number.isRequired
}

/*poner en defecto si dado caso el valor venga vacio */
PrimerComponente.defaultProps = {
  titulo: 'por si venis vacio',
  sub: 74
}

