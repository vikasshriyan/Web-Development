var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
    $scope.artists = [
    {
        "name": "Vikas Shriyan",
        "shortname": "Vikas_Shriyan",
        "reknown": "Northeastern University",
        "bio": "I’m Vikas Shriyan from India doing my Masters in Computer Science from Northeastern University in Boston. I was born and brought up in Mumbai, Maharashtra. I have lived in Mumbai all my life before coming to the states last summer. My family has always supported me in doing things, which I like, one important decision which was joining Northeastern University and coming to states. I hold my family and my friends at the very top.",
    },
    {
        "name": "Pankaj Tripathi",
        "shortname": "P_K",
        "reknown": "Northeastern University",
        "bio": "Hi, I am Pankaj Tripathi, a graduate student at Northeastern University. This website is my homepage developed as a part of Web Development Course (CS 5610) under the guidance of Prof. Jose Annunziato."
    },
    {
        "name": "Karthik Mahaley",
        "shortname": "Karthik_Mahaley",
        "reknown": "Northeastern University",
        "bio": "Hi, I am Karthik Mahaley, a graduate student at Northeastern University. This website is my homepage developed as a part of Web Development Course (CS 5610) under the guidance of Prof. Jose Annunziato."
    },
    {
        "name": "Abhishek Kumar",
        "shortname": "Abhi_Kumar",
        "reknown": "Northeastern University",
        "bio": " I am passionate about whatever I do. I am a dedicated and optimistic guy who takes responsibilities with utmost enthusiasm. I always try to complete my assigned tasks on time and follow discipline in whatever I do. My optimistic and planned approach in things I do is what drives me towards success. While at coop, I will try my best to learn new upcoming technologies and work culture so that it will help me to achieve my mid term goal. My midterm goal is to get job offer with some major  companies like Apple Inc., Google etc"
    },
    {
        "name": "Shakti Prasad",
        "shortname": "Shakti_Patro",
        "reknown": "Northeastern University",
        "bio": "Hi, I am Shakti. I am pursuing Masters in Computer Science at Northeastern University. I have keen interest in developing websites and working on latest web technologies. I have worked on Java, Spring Hibernate technologies along with jquery and Backbone.js. In the web development course I want to further my knowledge on MEAN stack."
    },
    ]
});