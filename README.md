# Construction-Website
Made a construction website using html,css and java
<!DOCTYPE html>
<html lang="en">

<head>
   
   <title>KOLEY Constructions - Years of Trust!</title>

   <link rel="stylesheet" href="css/style.css">

</head>

<body>

   <!-- header section starts  -->

   <header class="header">

      <a href="#" class="logo">KOLEY<span> &nbsp CONSTRUCTION</span></a>

      <nav class="navbar">
         <a href="#home">home</a>
         <a href="#about">about us</a>
         <a href="#projects">projects</a>
         <a href="#contact">contact us</a>
      </nav>

      <div class="icons">
         <div id="menu-btn" class="fas fa-info-circle"></div>
         <div id="info-btn" class="fas fa-info-circle"></div>
         <div id="login-btn" class="fas fa-user"></div>
      </div>

      <form action="" class="login-form">
         <h3>login form</h3>
         <input type="email" placeholder="enter your email" class="box">
         <input type="password" placeholder="enter your password" class="box">
         <input type="submit" value="login now" class="btn">
      </form>

   </header>

   <div class="contact-info">

      <div id="close-contact-info" class="fas fa-times"></div>

      <div class="info">
         <i class="fas fa-phone"></i>
         <h3>phone number</h3>
         <p>+91-6294374729</p>
         <p>+91-8145052380</p>
      </div>

      <div class="info">
         <i class="fas fa-envelope"></i>
         <h3>email address</h3>
         <p>koleysayan003@gmail.com</p>
         <p>koleysayan2020@gmail.com</p>
      </div>

      <div class="info">
         <i class="fas fa-map-marker-alt"></i>
         <h3>office address</h3>
         <p>Phagwara,Punjab, india - 144411</p>
      </div>

   </div>

   <!-- header section ends -->

   <!-- home section starts  -->

   <section class="home" id="home">

         <section class="slide" style="background: url(images/4.jpg) no-repeat;">
            <div class="content">
               <h3>we provide best service</h3>
            </div>

         </section>

   </section>

   <!-- home section ends -->

   <!-- about section starts  -->

   <section class="about" id="about">

      <h1 class="heading"> about us </h1>

      <div class="row">

         <div class="video">
            <video src="images/about-vid.mp4" loop muted autoplay></video>
         </div>

         <div class="content">
            <h3>We will provide you the best work which you dreamt for!</h3>
            <p>SBN Group brings the philosophy of innovation, sustainability, and excellence to the real estate
               industry. Each KOLEY Construction development combines a 125-year legacy of excellence and trust with a
               commitment to cutting-edge design and technology.</p>
         </div>

      </div>

   </section>

   <!-- about section ends -->

   <!-- projects section starts  -->

   <section class="projects" id="projects">

      <h1 class="heading"> our projects </h1>

      <div class="box-container">

         <a href="images/project-1.jpg" class="box">
            <div class="image">
               <img src="images/project-1.jpg" alt="">
            </div>
            <div class="content">
               <div class="info">
                  <h3>Duplex Villa</h3>
                  <p>Pune, Maharastra</p>
               </div>
            </div>
         </a>

         <a href="images/project-2.jpg" class="box">
            <div class="image">
               <img src="images/project-2.jpg" alt="">
            </div>
            <div class="content">
               <div class="info">
                  <h3>Building Construction</h3>
                  <p>Bengaluru, Karnataka
                  </p>
               </div>
            </div>
         </a>

         <a href="images/project-3.jpg" class="box">
            <div class="image">
               <img src="images/project-3.jpg" alt="">
            </div>
            <div class="content">
               <div class="info">
                  <h3>3BHK Flat</h3>
                  <p>Delhi</p>
               </div>
            </div>
         </a>

         <a href="images/project-4.jpg" class="box">
            <div class="image">
               <img src="images/project-4.jpg" alt="">
            </div>
            <div class="content">
               <div class="info">
                  <h3>Construction Site</h3>
                  <p>chennai, Tamil Nadu</p>
               </div>
            </div>
         </a>

         <a href="images/project-5.jpg" class="box">
            <div class="image">
               <img src="images/project-5.jpg" alt="">
            </div>
            <div class="content">
               <div class="info">
                  <h3>Shopping Mall</h3>
                  <p>Gurugram, Harayana</p>
               </div>
            </div>
         </a>

         <a href="images/project-6.jpg" class="box">
            <div class="image">
               <img src="images/project-6.jpg" alt="">
            </div>
            <div class="content">
               <div class="info">
                  <h3>Construction Site</h3>
                  <p>Ranchi, Jharkhand</p>
               </div>
            </div>
         </a>

      </div>

   </section>

   <!-- projects section ends -->

   <!-- contact section starts  -->

   <section class="contact" id="contact">

      <h1 class="heading"> contact us </h1>

      <div class="row">

         <iframe class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27287.301125655074!2d75.70063359999999!3d31.2508416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1669901129632!5m2!1sen!2sin"
            allowfullscreen="" loading="lazy"></iframe>
         <form action="">
            <h3>get in touch</h3>
            <input type="text" placeholder="name" class="box">
            <input type="email" placeholder="email" class="box">
            <input type="number" placeholder="phone" class="box">
            <textarea name="" placeholder="message" class="box" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="send message" class="btn">
         </form>

      </div>

   </section>

   <!-- contact section ends -->

   <!-- footer section starts  -->

   <section class="footer">

      <marquee behaviour="<button type="button" class="btn btn-secondary" data-toggle="popover" data-placement="top" title="Popup title" data-content="Popup content">This web site made by-</button>
         <div> &nbsp Sayan Koley</div>
      </marquee>

   </section>

   <!-- footer section ends -->

   <script src="js/script.js"></script>
</body>

</html>
