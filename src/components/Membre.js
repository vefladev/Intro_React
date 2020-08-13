import React, {Fragment} from 'react'


const Membre = ({nom , age ,  children, cacherNom, handleChange}) => {
    return(
        <Fragment>
        <h2 style={{ 
            backgroundColor: age < 40 ? 'yellow' : 'purple', 
             color: age < 40 ? 'black' : 'white', }}>
            {nom} : {age}
        </h2>
        <input value={nom} onChange={handleChange} type="text" />
        <button onClick={cacherNom}>X</button>
            {children ? <p>{children}</p> : <Fragment /> } 
        <p>{children}</p>
        </Fragment>
    )
}

export default Membre
