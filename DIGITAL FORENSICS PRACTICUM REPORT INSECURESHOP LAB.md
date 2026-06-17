Project Update: Android Mobile Security Analysis

I just finished a static analysis report on the InsecureShop app. The focus of this 
analysis includes 5 main vulnerabilities:

- Hardcoded Credentials
- Insecure Logging
- Insecure Data Storage
- Insufficient URL Validation
- Weak Host Validation Check

This case study gave me an in-depth understanding of the real impact of bad 
coding practices, such as storing credentials in source code and letting 
WebView load external URLs without strict validation.

Thanks to Optiv for the interactive InsecureShop lab platform, and to 
Muhammad Fadin Ghandi (ItsFadinG) whose writeup documentation was very
helpful for me in exploring the process of exploiting and mitigating each 
loophole.

Maintaining application integrity in the digital age is a major challenge, and any 
analysis like this is an important step to deepen expertise in the field of 
Application Security.

The report can be accessed via the following link: **https://lnkd.in/gxQbdfXF**
