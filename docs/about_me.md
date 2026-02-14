---
layout: page
title: About Me
description: >
  Here you should be able to find everything you need to know to accomplish the most common tasks when blogging with Hydejack.
hide_description: true
sitemap: false
permalink: /about_me/
scss: _sass/my-style.scss
---
<link rel="stylesheet" href="{{ 'assets/img/css/img.css' | relative_url }}">
<link rel="stylesheet" href="{{ 'stylesheet/textstyle.css' | relative_url }}">
<link rel="stylesheet" href="{{ 'stylesheet/styles.css' | relative_url }}">
Learn more about me outside of tech.
{:.faded}

<div class="about-intro">
  <p class="description">
Throughout university, I actively participated in student societies and volunteering initiatives, challenging myself to step into leadership roles and help guide other students. Being able to give back to the community and support others was one of the most rewarding parts of my university experience.<br><br>

Working closely with diverse groups of people helped me build strong relationships and develop my leadership, teamwork, and communication skills. These experiences shaped me into an approachable, collaborative team player who enjoys contributing to supportive and positive environments. <br><br>

Since graduating, I have maintained the relationships I built and continue supporting community-based initiatives where I can. I value making a positive impact and strive to uphold this both professionally and personally.
</p>
</div>
<div class="carousel-container">
  <div class="carousel-wrapper">
  <div class="description-container"> 
    <p class="description greytext">Notable Experiences</p>
  </div>
    <div class="image-description-container carousel-slide active">
      <div>  
        <img src="../assets/img/cse_camp.jpg" alt="CSE Camp" class="about_img">
      </div>
      <div class="description-container"> 
        <p class="description bluetext">CSEsoc First Year Camp Leader</p>
        <p class="description">Mentored first-year Computer Science students and helped them transition into university. Facilitated group activities and bonding events, developing strong communication, leadership, and teamwork skills while contributing to a positive and inclusive community.</p>
      </div>
    </div>
    <div class="image-description-container carousel-slide carousel-initial-right">
      <div class="description-container"> 
        <p class="description greentext">Yellow Shirt O-Week <br>Return Volunteer</p>
        <p class="description">Collaborated with 200+ volunteers to deliver UNSW O-Week, one of the largest university orientation events in the Southern Hemisphere. Assisted new students by answering inquiries, leading campus tours, and promoting various university events.
        </p>
      </div>
      <div>  
        <img src="../assets/img/YS_photo.jpg" alt="Yellow Shirts" class="about_img">
      </div>
    </div>
    <div class="image-description-container carousel-slide carousel-initial-left">
      <div>  
        <img src="../assets/img/adsoc.JPG" alt="ADSOC" class="about_img">
      </div>
      <div class="description-container"> 
        <p class="description bluetext">Adventure Society VPO<br>(Vice President of Operations)</p>
        <p class="description">Worked with the executive team to oversee society operations, managing a 40+ member internal team of directors and subcommittees and a community of 700+ society members. Directed marketing operations which includes managing social media, upskilling marketing members, and guiding merchandise initiatives. Solely responsible for maintaining and updating the society website, making revisions where possible to future-proof it for non-technical successors.</p>
      </div>
    </div>
    <div class="image-description-container carousel-slide carousel-initial-right">
      <div class="description-container"> 
        <p class="description greentext">Street Team Senior Volunteer</p>
        <p class="description">Collaborated with 40+ volunteers to deliver weekly stalls promoting student life through initiatives such as interactive games, giveaways, and themed events. Helped foster a welcoming and inclusive environment by actively supporting Arc UNSW’s principles of Equity, Diversity, and Inclusion (EDI), contributing to culturally themed events and positive campus experiences.</p>
      </div>
      <div>  
        <img src="../assets/img/ST_edited.jpg" alt="Street Term" class="about_img">
      </div>
    </div>
  </div>
  
  <div class="carousel-controls">
    <button class="carousel-btn carousel-prev">❮</button>
    <div class="carousel-dots" id="dots">
      <button type="button" class="carousel-dot active" onclick="goToSlide(0)" aria-label="Go to slide 1"></button>
      <button type="button" class="carousel-dot" onclick="goToSlide(1)" aria-label="Go to slide 2"></button>
      <button type="button" class="carousel-dot" onclick="goToSlide(2)" aria-label="Go to slide 3"></button>
      <button type="button" class="carousel-dot" onclick="goToSlide(3)" aria-label="Go to slide 4"></button>
    </div>
    <button class="carousel-btn carousel-next">❯</button>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="{{ '/scripts/fadescript.js' | relative_url }}"></script>
<script src="{{ '/scripts/carousel.js' | relative_url }}" defer></script>

[install]: install.md
[upgrade]: upgrade.md
[config]: config.md
[basics]: basics.md
[writing]: writing.md
[scripts]: scripts.md
[build]: build.md
[advanced]: advanced.md
[LICENSE]: ../LICENSE.md
[NOTICE]: ../NOTICE.md
[CHANGELOG]: ../CHANGELOG.md
