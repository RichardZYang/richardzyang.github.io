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
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

I study computer science at UNSW.

I used to play [competitive soccer](https://websites.mygameday.app/team_info.cgi?action=PSTATS&pID=197536283&client=1-10179-150739-399133-20390196&ocompID=399133) until I got injured in 2021 =(

I like going on outdoor adventures.

These are some of my favourite initiatives I got to be a part of:

<div class="button-container">
  <button id="toggleButton" class="button-33">Turn Focus Off</button>
</div>
<br>

<div class="image-description-container animated-text">
  <div>  
    <img src="../assets/img/cse_camp.jpg" alt="CSE Camp" class="about_me_img">
  </div>
  <div class="description-container"> 
    <p class="description purples">CSEsoc First Year Camp Leader</p>
  </div>
</div>
<div class="image-description-container animated-text">
  <div class="description-container"> 
    <p class="description">Yellow Shirts O-Week Volunteer</p>
  </div>
  <div>  
    <img src="../assets/img/YS_photo.jpg" alt="Yellow Shirts" class="about_me_img">
  </div>
</div>

<div class="image-description-container animated-text">
  <div>  
    <img src="../assets/img/adsoc.JPG" alt="ADSOC" class="about_me_img">
  </div>
  <div class="description-container"> 
    <p class="description">Adventure Society Marketing Director</p>
  </div>
</div>

<div class="image-description-container animated-text">
  <div class="description-container"> 
    <p class="description">Street Team Senior</p>
  </div>
  <div>  
    <img src="../assets/img/ST_edited.jpg" alt="Street Term" class="about_me_img">
  </div>
</div>

<style>
.animated-text {
  opacity: 0;
  transition: opacity 0.1s ease-in;
  text-align: center; /* Center the text */
  font-size: 24px;
}

.animated-text.visible {
  opacity: 1;
}

.image-description-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
}

.image-description-container img {
  max-width: 45vw;
  margin: 1vw;
}

.description-container {
  width: 20vw;
  flex: 1;
  display: flex;
  align-items: center;
}

.description {
  font-size: 1rem;
  margin-right: 0;
}

/* CSS */
.button-33 {
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-33:hover {
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
</style>

<script>
  $(document).ready(function() {
    var fadeEnabled = true;

    function applyFading() {
      var windowHeight = $(window).height();
      var windowCenter = $(window).scrollTop() + (windowHeight / 2);

      $(".animated-text").each(function() {
        var $this = $(this);
        var elementTop = $this.offset().top;
        var elementHeight = $this.outerHeight();
        var elementCenter = elementTop + (elementHeight / 2);

        var distanceToCenter = Math.abs(windowCenter - elementCenter);
        var maxDistance = windowHeight / 2;

        var opacity = 1 - (distanceToCenter / maxDistance);
        opacity = Math.max(0, Math.min(1, opacity));

        $this.css("opacity", opacity);
      });
    }

    function updateButtonText() {
      if (fadeEnabled) {
        $('#toggleButton').text('Turn Focus Off');
      } else {
        $('#toggleButton').text('Turn Focus On');
      }
    }

    $(window).on('scroll resize', function() {
      if (fadeEnabled) {
        applyFading();
      }
    });

    $('#toggleButton').click(function() {
      fadeEnabled = !fadeEnabled;
      if (!fadeEnabled) {
        $('.animated-text').css('opacity', 1);
      } else {
        applyFading();
      }
      updateButtonText();
    });

    applyFading(); // Initial check
    updateButtonText(); // Initial button text
  });
</script>

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
