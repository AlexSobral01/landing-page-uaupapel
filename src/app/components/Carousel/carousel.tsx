"use client";
import { useState } from "react";
import styles from "./styles.module.css"
import Image from "next/image";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Carousel() {

  const [ currentSlide, setCurrentSlide ] = useState(0);

  const comments = [
    { 
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde aliquam earum illum praesentium commodi! Totam autem delectus iste assumenda sit nemo, deleniti aliquam ab ratione! Deserunt doloribus optio dolores cumque.", 
      name: "Cristiane" 
    },
    { 
      description:"muito lindo amei", 
      name: "Fernanda" 
    },
    { 
      description:"Quando vou comprar caderno sempre peço a uau papel", 
      name: "Alex" 
    }
  ]

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }
  const handleNextSlide = () => {
    if (currentSlide < comments.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }
  return (
    <div>
      <div className={styles.carousel}>
        <div className={styles.slides} style={{ transform: `translateX(-${currentSlide * 100}%)` }} >
          {comments.map((comment, index) => (
            <div key={index} className={styles.slide}>
              <Image src={'/assets/aspas.png'} alt="quote_mark" width={50} height={50} />
              <p className="text-slate-800/70 m-auto">&ldquo; {comment.description} &rdquo;</p>
              <Image src={'/assets/commentsPic.jpg'} alt="CommentPic" width={60} height={60} className="h-[60px] rounded-full m-auto my-4" />
              <h5>{comment.name}</h5>
            </div>
          ))}
        </div>
        { currentSlide > 0 && (
          <button className={styles.prevBtn} onClick={handlePrevSlide}><FaArrowLeft color="gray" size={20} /></button>
        )}
        { currentSlide < 2 && (
          <button className={styles.nextBtn} onClick={handleNextSlide}><FaArrowRight color="gray" size={20} /></button>
        )}
      </div>
    </div>
  )
}
