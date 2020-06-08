---
title:
date: '2018-07-24T14:53:46+02:00'
draft: false
hidesidebar: true
---

<div class="services-page" >
  <section class="services-page-box itema">
    <div class=container-service-01>
      <img src="/images/uploads/031-01.jpg">
    </div>
  </section>
 <div class="services-page-box itemb">
      <h4 style="color:#665a5a;">Services</h4>
      Our agency offers time effective property management services:</br>
      <ul>
        <li>&#10003; Property marketing</li>
        <li>&#10003; Brokerage services</li>
        <li>&#10003; Rental management</li>
      </ul>
  </div>
  <section class="services-page-box itemc">
    <div class=container-service-02>
      <img src="/images/uploads/046-01.jpg">
    </div>
  </section>
  <div class="services-page-box itemd">
      <h4 style="color:#665a5a;">Are you looking for a home?</h4>
      We offer a one-stop shopping experience by:
      </br>
      <ul>
        <li>&#10003; Collecting your request</li>
        <li>&#10003; Suggesting our best matches</li>
        <li>&#10003; Conducting viewings</li>
        <li>&#10003; Taking you through paper work!</li>
      </ul>

  </div>
  <section class="services-page-box iteme">
    <div class=container-service-03>
      <img src="/images/uploads/090-03.jpg">
    </div>
  </section>
  <div class="services-page-box itemf">
    <h4 style="color:#665a5a;">Are you looking for a client? </h4>
      We always have clients looking for stunning properties throughout Kigali.
      Once your property is listed, we match it with current requests!  <br/><br/><br/>
      <h4 style="color:#665a5a;">Interested?</h4>
      Share your request below!
  </div>

  <div class="request-box itemg">
      <h3>Your Request</h3>
      <br/>
          <form style="width: 100%; " name="Request Availability" method="POST" netlify>
              <input id= "pageURL" type="hidden" name="Page URL" value=""/>
              <p><label>Your Name: <input type="text" name="name" /></label></p>
              <p><label>Your Email: <input type="email" name="email" /></label></p>
              <p><label>Your Question: <input type="reason" name="reason" /></label></p>
              <p><label>Message: <textarea name="message"></textarea></label></p>
              <p><button type="submit">Send</button></p>
          </form>
          <script type="text/javascript">
              var currentPageURL = "https://www.cocoonrwanda.com"+{{.URL}};
              document.getElementById("pageURL").value=currentPageURL;
          </script>
    </div>
  </div>
