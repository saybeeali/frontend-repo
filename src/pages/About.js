import {useState, useEffect} from 'react';


function About(props){
    const [about,setAbout]= useState(null);
    
        
    const getAboutData = () => {
        fetch(props.URL + "about")
        .then((res) => res.json())
       .then((json) => {
        setAbout(json)
       })
    }
		
    
    
   
  
  useEffect(() => getAboutData(), []);

  const loaded = () => (
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
    
  }
export default About