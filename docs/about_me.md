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


<div class="about-intro">
  <p class="description section-title" style="margin-top: 0; margin-bottom: 0rem; color: #808080; font-style: italic; text-align: left; font-size: 1.15em; font-weight: 700;">Leadership, Teamwork & Communication</p>
  <p class="description">
Throughout university, I actively participated in student societies and volunteering initiatives, challenging myself to step into leadership roles and help guide other students. Being able to give back to the community and support others was one of the most rewarding parts of my university experience.
</p>
</div>

<div class="carousel-container">
  <div class="carousel-wrapper">
  <div class="description-container"> 
    <p class="description greytext" style="font-weight: 400;">Notable Experiences</p>
  </div>
    <div class="image-description-container carousel-slide active">
      <div>  
        <img src="../assets/img/cse_camp.jpg" alt="CSE Camp" class="about_img">
      </div>
      <div class="description-container"> 
        <p class="description bluetext" style="font-weight: 700; margin-bottom: 0.35rem;">CSEsoc First Year Camp Leader</p>
        <p class="description">Mentored first-year Computer Science students and helped them transition into university. Facilitated group activities and bonding events, developing strong communication, leadership, and teamwork skills while contributing to a positive and inclusive community.</p>
      </div>
    </div>
    <div class="image-description-container carousel-slide carousel-initial-right">
      <div class="description-container"> 
        <p class="description greentext" style="font-weight: 700; margin-bottom: 0.35rem;">Yellow Shirt O-Week <br>Return Volunteer</p>
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
        <p class="description bluetext" style="font-weight: 700; margin-bottom: 0.35rem;">Adventure Society VPO<br>(Vice President of Operations)</p>
        <p class="description">Worked with the executive team to oversee society operations, managing a 40+ member internal team of directors and subcommittees and a community of 700+ society members. Directed marketing operations which includes managing social media, upskilling marketing members, and guiding merchandise initiatives. Solely responsible for maintaining and updating the society website, making revisions where possible to future-proof it for non-technical successors.</p>
      </div>
    </div>
    <div class="image-description-container carousel-slide carousel-initial-right">
      <div class="description-container"> 
        <p class="description greentext" style="font-weight: 700; margin-bottom: 0.35rem;">Street Team Senior Volunteer</p>
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

<div class="about-intro">
  <p class="description section-title" style="margin-top: 0; margin-bottom: 0rem; color: #808080; font-style: italic; text-align: left; font-size: 1.15em; font-weight: 700;">Initiative & Creativity</p>
  <p class="description">
I've always been intrigued by sneakers, fashion, and collectibles because they bring together creativity, character, and community. Over time, I saw an opportunity to turn that interest into something more meaningful by <strong>starting my own e-commerce project</strong> focused on sourcing high-demand products for enthusiasts like myself. What began as a hobby sourcing and reselling sneakers has grown into designing original products, managing online platforms, and creating content around my brand, ARCA.
</p>
</div>

<div class="about-intro" style="display: flex; align-items: center; gap: 2rem; max-width: 800px; margin: 0 auto 40px auto;">
  <p class="description" style="flex: 1;">
Through ARCA, I've worked directly with customers and collaborators while managing branding, fulfilment, and digital storefronts. <strong>Leading these efforts developed my communication and problem-solving skills with a customer first mindset</strong>.
</p>
  <div class="split-image-container">
    <a href="https://www.arcacollab1.com/about-us" target="_blank" rel="noopener noreferrer" class="split-image-link">
      <div class="split-image-wrapper">
        <div class="split-part split-left"></div>
        <div class="split-part split-center"></div>
        <div class="split-part split-right"></div>
      </div>
    </a>
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
