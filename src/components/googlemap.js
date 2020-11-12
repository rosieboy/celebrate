import React from "react";
import '../assets/main.css';

function GoogleMap({ long, lat }) {

    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4312.304104576195!2d13.517677238584728!3d59.36988656379126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssv!2sse!4v1605126402918!5m2!1ssv!2sse" 
            width="600" 
            height="450" 
            frameborder="0" 
            style="border:0;" 
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0">
        </iframe>
    );
  }
  
  export default GoogleMap;
