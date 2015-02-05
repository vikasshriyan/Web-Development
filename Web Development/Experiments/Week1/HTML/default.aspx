<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset='utf-8' />

<title>Demo Home Page</title>

<style type="text/css">
    ul.master_navigation
    {
        font-size: 100%;
        font-weight: bold;
        text-align: center;
        list-style: none;
        margin: 0.5em 0;
        padding: 0;

        background-color:#df8109;
       
        
    }

    ul.master_navigation li
    {
        display: inline-block;
        padding: 0 0.5%;
        color:white;
    }

    a
    {
        color: white;
        font-weight: bold;
         text-decoration:none;
    }

    a:visited
    {
        color: white;
    }

    a:hover
    {
       
        color: #FFA319;
    }

    p
    {
        text-align: justify;
        color:grey;
        font-weight: bold;
    }
    .row3
    {
        background-color:#df8109;
        clear: both;
        width: 900px;
        position:absolute;
        bottom:80px;
        left: 0px;
    }
    .row4
    {
        font-size: 100%;
        font-weight: bold;
        text-align: center;
        position:absolute;
        bottom:-36px;
        left: 384px;
        color:grey;
       
    }
    .col-1,.col-2,.col-3
    {
        float:left;
        width: 900px;
        height: 850px;
        margin-left: 0px;
        margin-top: 130px;
    }
.col-1
    {
    width:450px;
        height: 502px;
        margin-top: 64px;
    }
</style>

<style type="text/css" media="screen">
    body {
        width:900px;
        max-width: 100%;
        margin: 0;
        padding: 0;
    }

    .pad {
        padding: 10px;
    }
    #text{
        float:left;
        position:absolute;
        margin-top:250px;
         font-family:Tahoma, Geneva, sans-serif;
         font-size: 100%;
         font-weight: bold;
        top: 164px;
        left: 420px;
        width: 419px;
        height: 200px;
    }
    .col-2
    {
        background-color:#DDDDDD;
    }
    
</style>

</head>

<body>
<div class="row1">

</div>
    <div class="row">
    </div>
<div class="row3">

<form id="form1" runat="server">

<div>

<ul class="master_navigation">
    <li><a href="sitestatistics/" target="_blank">SiteStatistics&nbsp;</a>|</li>
    <li><a href="statistics/" target="_blank">Statistics&nbsp;</a>|</li>
    <li><a href="source/" target="_blank">Source&nbsp;</a>|</li>
    <li><a href="search/" target="_blank">Search&nbsp;</a>|</li>
    <li><a href="searchtree/" target="_blank">SearchTree&nbsp;</a>|</li>
    <li><a href="textview/" target="_blank">TextView&nbsp;</a>|</li>
    <li><a href="filelist.aspx" target="_blank">FileList&nbsp;</a>| </li>
    <li><a href="autofile.aspx" target="_blank">AutoFile&nbsp;</a>|</li>
    <li><a href="images/autoimage.aspx" target="_blank">Images&nbsp</a>|</li>
    <li><a href="Experiments/" target="_blank">Experiments&nbsp;</a>|</li>
    <li><a href="blog/" target="_blank">Blog</a></li>
</ul>
</div><div class="row4">
        <p>Copyright @2015</p>
    </div>
    </form>
    </div>
    

<hr />
 
      
    <div class="col-2">
    <p id="text">Hi, I'm a Masters Student in Computer Science at Northeastern University.<br />
             I did my Bachelor's Engineering in Information Technology at University of Mumbai. <br />
            I took the Web Devlopment course under Prof. Jose Annunziato <br />and I'm pretty excited to learn new technologies and ideas.
        </p>
        </div>

  

            <br />
            <br />

     
   </body>
</html>
