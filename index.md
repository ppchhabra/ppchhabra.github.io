---
layout: page
title: About Me
subtitle: Param Chhabra
cover-img: "/img/trial.png"
full-width: true
---

**A warm welcome to my webpage!** 

I am an Assistant Professor of [Operations Management](https://apps.ualberta.ca/directory/person/chhabra3) at the University of Alberta's [School of Business](https://www.ualberta.ca/business/index.html). I conduct empirical research in New Product Development, Crowdfunding, AI implementation in Operations, and Innovation with a specific focus on improving the outcomes of entrepreneurs and inventors. I teach the core course *Operations Management* to undergraduate students at the Alberta School of Business.

I have recently joined the [AI Cenre for Decision Analytics (AI4DA)](https://www.ualberta.ca/en/ai-centre-for-decision-analytics/index.html) at the University of Alberta as the Director of Outreach.

#### Media Mention
- [Designing the Best Reward Structure for Crowdfunding Campaigns](https://www.scheller.gatech.edu/centers-initiatives/business-analytics-center/research/posts/designing-the-best-reward-structure-for-crowdfunding-campaigns.html), Business Analytics Center, Scheller College of Business, February, 2020.

### Education
* Ph.D. in Operations Management, [Georgia Tech Scheller College of Business](https://www.scheller.gatech.edu/index.html), Atlanta, Georgia, USA
* M.S. in Management, [Georgia Tech Scheller College of Business](https://www.scheller.gatech.edu/index.html), Atlanta, Georgia, USA
* M.E. in Aerospace Engineering, [Indian Institute of Science](https://www.iisc.ac.in/), Bangalore, India
* B.Tech in Mechanical Engineering, [NIT Jalandhar](https://www.nitj.ac.in/), Jalandhar, India (Previously RECJ)

### Honors and Awards
- Advancement of Scholarship (EFF-SAS) Research Fund, University of Alberta - 2023-2024
- Departmental Undergraduate Research Funding, University of Alberta - 2023
- Faculty Startup Funding, University of Alberta - 2021 to 2026 
- Finalist, Chan Hahn Best Paper Award, OSCM Division - AOM 2019
- Doctoral Student Fellowship, Georgia Tech - 2016 to 2021
- Employee of the Month Award at GE Aviation - 2015
- Engineering Excellence Award at Infosys - 2009
- Winner, Science Day Paper Presentation Competition at DRDO - 2003 to 2005

### Service & Professional Activities
- Track Chair
  - DSI 2025 Annual Conference: Co-chaired the Project Management track with Dr. Mona Jabbari.
  - POMS 2025 Annual Conference: Co-chaired the Product Innovation and Technology Management track with Dr. Lakshminarayana Nittala.
  - POMS 2024 Annual Conference: Co-chaired the Product Innovation and Technology Management track with Dr. Sina Khorasani.
  - DSI 2022 Annual Conference: Co-chaired the Innovation and New Product Development track with Dr. Morvarid Rahmani.
- Session Chair
  - POMS 2023 Annual Conference: Chaired a session entitled ``Empirical Research in Innovation and Product Development'' in the Empirical Research in Operations Management track. 
  - INFORMS 2022 Annual Meeting: Chaired a session entitled ``Decision Making in Innovation Settings'' in the New Product Development track.
  - POMS 2022 Annual Conference: Chaired a session entitled ``Empirical Studies on Innovation Management'' in the PITM track.
  - DSI 2021 Annual Conference: Chaired a session entitled ``Business Analytics in Operations Management'' in the Business Analytics track.
  - POMS 2021 Annual Conference: Co-chair for the session entitled ``Entrepreneurship, Innovation and Crowdfunding'' with Dr. Morvarid Rahmani in the PITM track.
  - POMS 2020 Annual Conference: Co-chaired a session entitled ``Entrepreneurship, Innovation and Crowdfunding'' with Dr. Morvarid Rahmani in the PITM track (Finalized the session but the event got canceled due to COVID-19 pandemic).
- Assistant to Professor Cheryl Gaimon - June 2018 to July 2020
  - Provided support to Dr. Gaimon in her research activities and in her position as Department Editor, Production and Operations Management.
- Editorial Support for OM e-Newsletter, Scheller College of Business - 2018 to 2020
- Reviewer for AOM (annual meeting), DSI (annual meeting)
- Member of INFORMS, M&SOM, POMS, AOM, and DSI

<!--
### Contact Details
![Param](img/squaremug.png){: width="300" height="300"}

Alberta School of Business\\
University of Alberta\\
3-30G Business Building, 11203 Saskatchewan Drive NW, Edmonton
AB, Canada T6G 2R6\\
Email: [param.chhabra@ualberta.ca](mailto: param.chhabra@ualberta.ca)\\
Phone: +1(780)492-1145
-->

### Contact Details

<div class="vcard-box">
  <img src="img/squaremug.png" alt="Profile Photo" class="vcard-img">

  <!-- Placeholders populated automatically from contact.vcf -->
  <div class="vcard-title" id="vcard-fn">LOADING...</div>
  <div class="vcard-sub" id="vcard-title"></div>
  <div class="vcard-sub" id="vcard-org"></div>

  <!-- Download button linked directly to the same file -->
  <a href="card/contact.vcf" class="vcard-btn vcard-btn-primary" download>ADD TO CONTACTS</a>

  <!-- Button Grid -->
  <div class="vcard-grid">
    <a id="vcard-email" href="#" class="vcard-btn vcard-btn-outline">EMAIL</a>
    <a id="vcard-linkedin" href="#" target="_blank" rel="noopener noreferrer" class="vcard-btn vcard-btn-outline">LINKEDIN</a>
  </div>

  <div class="vcard-grid">
    <a id="vcard-faculty" href="#" target="_blank" rel="noopener noreferrer" class="vcard-btn vcard-btn-outline">FACULTY PAGE</a>
    <a id="vcard-ai4da" href="#" target="_blank" rel="noopener noreferrer" class="vcard-btn vcard-btn-outline">AI4DA</a>
  </div>

  <div class="vcard-label">OFFICE // ADDRESS</div>
  <div class="vcard-text" id="vcard-address">
    Loading address...
  </div>

  <div class="vcard-label">WEBSITE</div>
  <div class="vcard-text">
    <a href="https://www.paramchhabra.com" target="_blank" rel="noopener noreferrer" style="color: #212529; font-weight: 600;">www.paramchhabra.com</a>
  </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  fetch('card/contact.vcf')
    .then(response => response.text())
    .then(vcardData => {
      // Parse Full Name
      const fn = vcardData.match(/^FN:(.*)$/m);
      if (fn) document.getElementById('vcard-fn').innerText = fn[1].trim();

      // Parse Title & Organization
      const title = vcardData.match(/^TITLE:(.*)$/m);
      if (title) document.getElementById('vcard-title').innerText = title[1].trim();

      const org = vcardData.match(/^ORG:(.*)$/m);
      if (org) document.getElementById('vcard-org').innerText = org[1].trim();

      // Parse Email
      const email = vcardData.match(/^EMAIL.*:(.*)$/m);
      if (email) document.getElementById('vcard-email').href = "mailto:" + email[1].trim();

      // Parse URLs
      const linkedin = vcardData.match(/^URL;TYPE=LinkedIn:(.*)$/m);
      if (linkedin) document.getElementById('vcard-linkedin').href = linkedin[1].trim();

      const faculty = vcardData.match(/^URL;TYPE=Faculty:(.*)$/m);
      if (faculty) document.getElementById('vcard-faculty').href = faculty[1].trim();

      const ai4da = vcardData.match(/^URL;TYPE=AI4DA:(.*)$/m);
      if (ai4da) document.getElementById('vcard-ai4da').href = ai4da[1].trim();

      // Parse Address & Phone
      const adr = vcardData.match(/^ADR.*:;;(.*)$/m);
      const tel = vcardData.match(/^TEL.*:(.*)$/m);
      
      let addressHTML = "";
      if (adr) {
        addressHTML += adr[1].split(';').filter(Boolean).join('<br>');
      }
      if (tel) {
        addressHTML += "<br>Phone: " + tel[1].trim();
      }
      if (addressHTML) {
        document.getElementById('vcard-address').innerHTML = addressHTML;
      }
    })
    .catch(err => console.error("Error reading contact.vcf file:", err));
});
</script>
