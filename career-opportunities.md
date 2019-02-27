---
layout: page
title: Career Opportunities
---

## DRIVERS

### **\*\*\* Now Hiring \*\*\***

### **We are now accepting applications at all terminal locations.**

Thank you for your interest in the exciting career opportunities available at Florida Rock &amp; Tank Lines, Inc. We are always seeking professional, reliable drivers to join our team. Please read our [Driver Qualifications] before you complete an online application. At Florida Rock &amp; Tank Lines we understand that our employees are our greatest asset and we are proud to offer excellent benefits to include:

* Paid Time Off
* Paid Holidays
* [Rewards and Recognition Programs]
* Retirement Plan with a company match
* [Personal Benefits] such as Health, Dental and Vision Insurance

[Apply Now!]

<iframe allowfullscreen="" frameborder="0" height="315" src="http://www.youtube.com/embed/3m37OYtHvNc?rel=0" width="560"></iframe><br /><br />
<iframe allowfullscreen="" frameborder="0" height="315" src="https://www.youtube.com/embed/doh-oSvZOzc" width="560"></iframe><br /><br />
<iframe allowfullscreen="" frameborder="0" height="315" src="http://www.youtube.com/embed/KTOLhkycJP0?rel=0" width="560"></iframe><br /><br />

## MECHANIC AND SHOP OPPORTUNITIES

Thank you for your interest in the exciting career opportunities available at Florida Rock &amp; Tank Lines. Our fleet is one of the best in the industry, largely in part to our employees. We seek experienced and reliable Mechanics and Shop Personnel for our terminals located throughout the southeast.

We are currently accepting resumes for the following positions:

{% for position in site.data.positions %}
    {% if position.type contains 'shop' %}
* {{ position.title }} - {{ position.location }}
    {% endif %}
{% endfor %}

At Florida Rock &amp; Tank Lines, we understand that our employees are our biggest asset and therefore are proud to offer excellent [benefits][Personal Benefits].

To apply please fax resumes to (904) 858-9008 or email [bdavis@patriottrans.com].

## TERMINAL AND OFFICE OPPORTUNITIES

Thank you for your interest in the exciting career opportunities available here at Florida Rock & Tank Lines. We seek talented individuals with experience or interest in the transportation industry.

Currently, we are accepting resumes for the following positions:

{% for position in site.data.positions %}
    {% if position.type contains 'other' %}
* {{ position.title }} - {{ position.location }}
    {% endif %}
{% endfor %}

If you are interested in employment with one of our terminals located throughout the southeast, or at our corporate headquarters in Jacksonville, FL please send your resume in Word or PDF format to [bdavis@patriottrans.com].
	
[Rewards and Recognition Programs]: safety-driver-incentives.html
[Personal Benefits]: drivers-benefits.html
[bdavis@patriottrans.com]: mailto:bdavis@patriottrans.com
[Diver Qualifications]: drivers-qualifications.html
[Apply Now!]: https://ebe.floridarockandtanklines.com/Recruiting/Pages/DriverWelcome.aspx?referral=CorporateSite
