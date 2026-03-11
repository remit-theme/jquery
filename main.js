(function() {
    var startTime = new Date('2026-03-11T14:18:00+05:30');
    var endTime = new Date('2026-03-11T14:52:00+05:30');
    function formatDate(date) {
        let day = String(date.getDate()).padStart(2, '0');
        let month = String(date.getMonth() + 1).padStart(2, '0');
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = String(date.getMinutes()).padStart(2, '0');
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        hours = String(hours).padStart(2, '0');
        return `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
    }

    function showMaintenance() {
        var startFormatted = formatDate(startTime);
        var endFormatted = formatDate(endTime);
        document.documentElement.innerHTML = `
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Scheduled Maintenance</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<style>
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Poppins', sans-serif;
}

body {
height: 100vh;
background: linear-gradient(135deg, #ff8900 0%, #ff8900 100%);
display: flex;
justify-content: center;
align-items: center;
}

.container {
text-align: center;
background: #ffffff;
padding: 60px 50px;
border-radius: 20px;
width: 90%;
max-width: 600px;
box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
animation: fadeIn 0.8s ease-in-out;
}

.logo {
margin-bottom: 30px;
}

.logo img {
width: 250px;
}

h1 {
font-size: 30px;
margin-bottom: 20px;
font-weight: 600;
color: #ff8900;
}

p {
font-size: 15px;
color: #555;
margin-bottom: 15px;
line-height: 1.7;
}

.time {
font-weight: 600;
color: #ff8900;
}

.tz-note {
font-size: 20px;
display: block;
}

.loader {
margin: 30px auto 0;
border: 4px solid #eee;
border-top: 4px solid #ff8900;
border-radius: 50%;
width: 45px;
height: 45px;
animation: spin 1s linear infinite;
}

footer {
position: absolute;
bottom: 15px;
font-size: 13px;
color: #ffffff;
opacity: 0.9;
}

@keyframes spin {
100% {
transform: rotate(360deg);
}
}

@keyframes fadeIn {
from {
opacity: 0;
transform: translateY(20px);
}
to {
opacity: 1;
transform: translateY(0);
}
}

@media (max-width: 500px) {
.container {
padding: 40px 25px;
}

h1 {
font-size: 22px;
}

p {
font-size: 14px;
}
}
</style>

</head>

<body>

<div class="container">

<div class="logo">
<img src="assets/images/rhub-logo.jpg" alt="Company Logo">
</div>

<h1>🚧 Scheduled Maintenance <span class="tz-note">(Time Zone: UTC +05:30)</span></h1>

<p>
Portal is under scheduled maintenance from
<span class="time">${startFormatted}</span>
to
<span class="time">${endFormatted}</span>.
</p>
<p>
During this period, our services may be temporarily unavailable.
We apologize for the inconvenience and appreciate your patience.
</p>
<div class="loader"></div>
</div>
<footer>
© 2026 RemittancesHub. All Rights Reserved.
</footer>

</body>
`;
    }

    function checkMaintenance() {
        var now = new Date().getTime();
        var start = startTime.getTime();
        var end = endTime.getTime();
        if (now >= start && now <= end) {
            showMaintenance();
        }
    }
    checkMaintenance();
})();



