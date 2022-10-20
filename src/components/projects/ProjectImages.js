import React from "react";
import 'tw-elements';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
//harusnya projet images jadi fungsi komponen dan {props.project.images[0].image} jadi return
//mungkin salah di usegetprojejctdetails.js
//errornya di reactredux/
//gak bisa nampilin {prop.project.images[0].image}
//tapi di folder projectsingle bisa ? wtf
//wis rasah diurus meneh ki carousel e
//ganti ngurus dashboard wae
//paling mirip dg techSingle.js , tapi sudah dicoba tetep gak nampil tampilannya, eror jg tak dikasi tau
export const ProjectImages = (props) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		

      
            
          

   
        <div
            id="carouselDarkVariant"
            class="carousel slide carousel-fade carousel-dark relative"
            data-bs-ride="carousel"
            >
                        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
                ></button>
                <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="1"
                aria-label="Slide 1"
                ></button>
                <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="2"
                aria-label="Slide 1"
                ></button>
            </div>

       <div class="carousel-inner relative w-full overflow-hidden">


                
                <div class="carousel-item active relative float-left w-full">
                        <img
                            // src={props.project.image[0].image}
                            src = "/images/project-13.png"
                            class="block w-full"
                            alt="Motorbike Smoke"
                        />
                    <div class="carousel-caption hidden md:block absolute text-center">
                        <h5 class="text-xl">{props.project.technologies}</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>


            {/* {props.project.images.map((img, key) => {
                return(
                    <div key={key}>
                        <Img img={img} />
                    </div>
                )
            })} */}



                
                <div class="carousel-item relative float-left w-full">
                    <img
                        // src={props.project.image[2].image}
                        src="/images/project-13.png"
                        class="block w-full"
                        alt="Mountaintop"
                    />
                    <div class="carousel-caption hidden md:block absolute text-center">
                        <h5 class="text-xl">{props.project.technologies}</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>

                
                <div class="carousel-item relative float-left w-full">
                    <img
                    
                        src="/images/project-14.png"
                        class="block w-full"
                        alt="Woman Reading a Book"
                    />
                    <div class="carousel-caption hidden md:block absolute text-center">
                        <h5 class="text-xl">{props.project.name}</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>


            </div>
                      <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>


    
    )
}


const Img = ( { img } ) => {
    return (
        <div class="carousel-item relative float-left w-full">
                    {/* <img
                        src={img.image}
                        // src="/images/project-13.png"
                        class="block w-full"
                        alt="Mountaintop"
                    /> */}
                    <div class="carousel-caption hidden md:block absolute text-center">
                        <h5 class="text-xl">asu</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
        </div>
    )
}


ProjectImages.propTypes = {
    project: PropTypes.object.isRequired,
  };

  
export default ProjectImages;