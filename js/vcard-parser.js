document.addEventListener("DOMContentLoaded", function() {
  const vcardContainer = document.querySelector('.vcard-box');
  if (!vcardContainer) return; // Only runs if contact card exists on page

  fetch('card/contact.vcf?v=' + new Date().getTime())
    .then(response => {
      if (!response.ok) throw new Error("Could not load contact.vcf");
      return response.text();
    })
    .then(vcardData => {
      // Parse Full Name
      const fn = vcardData.match(/^FN.*:(.*)$/im);
      if (fn && fn[1].trim()) {
        document.getElementById('vcard-fn').innerText = fn[1].trim();
      }

      // Parse Main Title
      const title = vcardData.match(/^TITLE.*:(.*)$/im);
      if (title && title[1].trim()) {
        document.getElementById('vcard-title').innerText = title[1].trim();
      }

      // Parse Subtitle
      const subtitle = vcardData.match(/^(?:SUBTITLE|X-SUBTITLE|NOTE)(?:;[^:]*)?:(.*)$/im);
      const subEl = document.getElementById('vcard-subtitle');
      if (subtitle && subtitle[1].trim() && subEl) {
        subEl.innerText = subtitle[1].trim();
        subEl.style.display = 'block';
      } else if (subEl) {
        subEl.style.display = 'none';
      }

      // Parse Organization
      const org = vcardData.match(/^ORG.*:(.*)$/im);
      if (org && org[1].trim()) {
        document.getElementById('vcard-org').innerText = org[1].trim().split(';')[0];
      }

      // Parse Email
      const email = vcardData.match(/^EMAIL.*:(.*)$/im);
      if (email && email[1].trim()) {
        document.getElementById('vcard-email').href = "mailto:" + email[1].trim();
      }

      // Parse Action Buttons
      const linkedin = vcardData.match(/^URL;TYPE=LinkedIn:(.*)$/im);
      if (linkedin && linkedin[1].trim()) {
        document.getElementById('vcard-linkedin').href = linkedin[1].trim();
      }

      const faculty = vcardData.match(/^URL;TYPE=Faculty:(.*)$/im);
      if (faculty && faculty[1].trim()) {
        document.getElementById('vcard-faculty').href = faculty[1].trim();
      }

      const ai4da = vcardData.match(/^URL;TYPE=AI4DA:(.*)$/im);
      if (ai4da && ai4da[1].trim()) {
        document.getElementById('vcard-ai4da').href = ai4da[1].trim();
      }

      // Parse Address & Phone
      const adrMatch = vcardData.match(/^ADR.*:(.*)$/im);
      const telMatch = vcardData.match(/^TEL.*:(.*)$/im);
      
      let addressHTML = "";
      if (adrMatch && adrMatch[1].trim()) {
        addressHTML = adrMatch[1]
          .replace(/\\;/g, ';')
          .split(';')
          .map(s => s.trim())
          .filter(Boolean)
          .join('<br>');
      }
      if (telMatch && telMatch[1].trim()) {
        addressHTML += (addressHTML ? "<br>" : "") + "Phone: " + telMatch[1].trim();
      }
      if (addressHTML) {
        document.getElementById('vcard-address').innerHTML = addressHTML;
      }
    })
    .catch(err => console.error("Error reading contact.vcf file:", err));
});
