import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="grid-container">
 
 <div className="item-1">
 </div>
 <div className="item-2">
<h3>1.Movies</h3>
<div className="sopies">
</div>
<p>Theres lots and lots of movies out there but I mostly enjoy the animation type.</p>
<p>Don't get me wrong I still prefer all different types of genres in <strong>Movies</strong></p>
 </div>
 <div className="item-3">
<h2>2.music</h2>
<div className="songs"></div>
<p>Despite its intensions of distructing you music is one of the best way to set a beautiful mood either you studying, doing the dishes, chores,or even my personal favourite CODING you Can enjoy <strong>Music</strong> anywhere</p>
 </div>
 <div className="item-4">
<h3>3.Anime</h3>
<div className="cartoons"></div>
<p>Not a fan of all genres in anime gottta accept every human has their own expectations in things, But most times for it just depends on the story and anime graphics but im mostly a fan of action <strong>Anime</strong></p>
 </div>
  <footer>
   <div className="footer-content">
     <h3>Pass time suggestions</h3>
     <p>Just some ideas to pass time when bored i just thought i would suggest if ever you are in such positions</p>
     <ul className="socials">
       <li>
        <Link to='#'><i className="fa fa-facebook"></i></Link>
       </li>
       <li>
        <Link to='#'><i className="fa fa-whatsapp"></i></Link>
       </li>
       <li>
        <Link to='#'><i className="fa fa-linkedin"></i></Link>
       </li>
       <li>
        <Link to='#'><i className="fa fa-github"></i></Link>
       </li>
     </ul>
   </div>
   <div className="footer-bottom">
     <p>copyright &copy;2023 codecademyprojects. designed by <span>Priviledge Mukono</span></p>
   </div>
  </footer>
</div>

    </>
  )
}

export default Home
