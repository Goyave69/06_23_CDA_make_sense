import React from 'react';
import "../Candidater/Candidater.css";
import rond from '../../assets/rond.png';




const Candidater = ({ onButtonClick}) => {
    return (
      <div className='Poste-area'>
        <div className='area-left'>
          <div className='haeder-poste'>
          <img className='imgRond' src={rond} alt="rond" />
              <h1>Candidater</h1> 
          </div>
       
         <h4>C'est le moment d'etre creatif: parlez de votre mission, de l'impact direct ou indirect de ce poste, des jalons que vous avez deja atteints</h4>
        </div>
        <div className='area-right'>
            <div>
                <form className="measure">
                <div className="mt3">
            <label
           
              htmlFor="Titre-annonce"
              style={{
                 textAlign: "left",
                 color: "rgb(190, 190, 190)",
             }}
            >
              Titre de l'annonce *
            </label>
            <input className='input-form'
    
              type="text"
              name="Titre-annonce"
              id="Titre-annonce"
              size="30"
              placeholder="Super job à Paris..."
            
            />
          </div>
          <br />
          <div className="mv3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="descriptif"
              style={{
              textAlign: "left",
              color: "rgb(190, 190, 190)", }}
            >
              Descriptif de l'offre *
            </label>
            <input className='input-form'
    
    type="text"
    name="descriptif"
    id="descriptif"
    size="30"
    placeholder="Descriptif"
  
  />

            {/* <template>
    <div class="my-component">
        <br />
       <mks-field name="editor" type="editor" label="Editor" placeholder="Placeholder" value=""></mks-field>
       </div>
</template> */}
   

          </div>
          <br />
          <div>
          <label
              className="db lh-copy f6 mb1"
              htmlFor="Profil-recherche"
              style={{
              textAlign: "left",
              color: "rgb(190, 190, 190)", }}
            >
              Profil recherché *
            </label>
            <input className='input-form'
    
    type="text"
    name="Profil-recherche"
    id="Profil-recherche"
    size="30"
    placeholder="Profil recherche"
  
  />
          </div>
          <br />
        <div>
          <input
       
            style={{
              borderStyle: "none",
              width: "100%",
              height: "40px",
              backgroundColor: "#9b084f",
              borderRadius: "10px",
          }}
            type="submit"
            value="Create Workspace"
            onClick={() => onButtonClick("Reglages")}
          />
        </div>
                </form>
            </div>
        </div>
      </div>
    );
};

export default Candidater;