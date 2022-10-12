*{
    font-family: Arial, Helvetica, sans-serif;
    color:  black;
}

html{
    background: white;
}

h1{
    font-size: 28px;
    text-transform: uppercase;
}

h2{
    font-size: 18px;
    text-transform: uppercase;
}

h3{
    font-size: 16;
    text-transform: uppercase;
}

button {
   
    border-radius: 20%;
    border-width: .75px;
    padding: .5rem 1.5rem; 
    text-transform: capitalize;
    font-size: 12px;
    background: red;
}

button:hover {
    background:red;
    color: white;
}

header{
    display: flex;
    padding-bottom: 5.5rem;
    background: white;

}

header .logo{
    padding-top: 24px;
    position: absolute;
    left: 4.5rem;
}




header .navbar2{
    position: absolute;
    right: 5%;
    padding-top: 34px;
}

header .logo img{
    width: 150px;
	height:120px;
}

header .navbar a,
header .navbar2 a{
    
   border-radius:10px;
    border-width: .75px;
    padding: .5rem 1.5rem; 
    text-decoration: none;
    
}

header .navbar a:hover,
header .navbar2 a:hover{
    background: red;
    color: white;    
}


.home{
    display: flex;
    flex: 1 1 45rem;
    flex-wrap: wrap; 
    gap: 1.5rem;
    align-items: center;
    padding-top: 3rem;
    background: white;
}


.home img{
    width: 800px;
    height: 550px;
}

.home .content{
    width: 500px;
}

.home .content h4,
.home .content p,
.home .content .btn{
    padding-left: 8.5rem;
}

.home .content h4{
    font-size: 35px;
}

.home .content p{
    font-size: 10px;
    width: 40%;
    
}

.line{
    display: flex;
    justify-content: center;
    background: black;
}
.line img{
    width: 670px;
    align-self: center;
}

.service{
    background: white;
}
.service .section1{
    display: flex;
    justify-content: center;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;

}

.service h1{
    text-align: center;
    background: white;
	
}
.service p{
    text-align: center;
    background: white;
	
}
.content h3{
	font-size:10px;
	font
}

.service .section1 .sectioncontent{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
.content button {
   
    border-radius: 20%;
    border-width: .75px;
    padding: .5rem 1.5rem; 
    text-transform: capitalize;
    font-size: 7px;
    background: red;
}


.service .section1 .sectioncontent{
    background: white;
}

.service .section1 .sectioncontent .container{
    border: white;
	box-shadow: 5px 6px 5px 6px lightgray;
    border: 5%;
    border-width: .75px;
    padding: .2rem;
	
}

.service .section1 .sectioncontent .container .content h3{
    text-align: center;
}
.service .section1 .sectioncontent .container .content button{
    display: flex;
    margin-left: 35%;
    
}

.service .section1 .sectioncontent .container .image img{
    width: 200px;
    height: 150px;
}

.about{
    background: white;
}
.about .container{
    display: flex;
	
}

.about .container .image{
    width: 600px;
	height:600px;
    margin-left: 3.5rem;
}

.about .container .image img{
    width: 500px;
	height:500px;
    margin-left: 4.5rem;
}

.about .container .content{
    width: 40%;
    height: 50%;
    margin-right: 8.5rem;
    margin-top: 7rem;
    border: white;
    padding: 1.5rem;
    border-width:;
    box-shadow: #eee;
    text-align:center;
	box-shadow: 3px 3px 3px 3px lightgray;
}

.about .container .content p{
    text-align: justify;
	
}




.faqs{
    background: white;
}


.faqs .container{
    justify-content: center;
    width: 800px;
    align-items: center;
    margin-left: 30%;
    margin-bottom: 3rem;

}

.faqs  h1{
    text-align: center;
}

.faqs .container .faq1,
.faqs .container .faq2{
    display: flex;
}

.faqs .container .faq1 a{
    border: #a46553 solid;
    padding-top: .5rem;
    padding-right: 1rem;
    padding-bottom: .5rem;
    padding-left: .5rem;
    margin-bottom: .5rem;
    text-decoration: none;
    width: 450px;
    border-width: .5px;
    background: white;

}

.faqs .container .faq1 button{
    background: #a46553;
    color: white;
    margin-left: -.3rem;
}

.faqs .container .faq2 a{
    border: #a46553 solid;
    padding-top: .5rem;
    padding-right: 1rem;
    padding-bottom: .5rem;
    padding-left: .5rem;
    margin-bottom: 1.5rem;
    text-decoration: none;
    width: 450px;
    border-width: .5px;
    background: white;
}

.faqs .container .faq3 a{
    border: #a46553 solid;
    padding-top: .5rem;
    padding-right: 1rem;
    padding-bottom: .5rem;
    padding-left: .5rem;
    margin-bottom: .5rem;
    margin-top: 1.5rem;
    text-decoration: none;
    width: 450px;
    border-width: .5px;
    background: white;
}

.faqs .container .faq4 a{
    border: #a46553 solid;
    padding-top: .5rem;
    padding-right: 1rem;
    padding-bottom: .5rem;
    padding-left: .5rem;
    margin-bottom: 1.5rem;
    text-decoration: none;
    width: 450px;
    border-width: .5px;
    background: white;
}

.faqs .container .faq2 button{
    background: #a46553;
    color: white;
    margin-left: -.3rem;
    height: 2.3rem;
}

.faqs .container .faq3 button{
    background: #a46553;
    color: white;
    margin-left: -.3rem;
    height: 2.3rem;
    margin-top: 1.5rem;
}

.faqs .container .faq4 button{
    background: #a46553;
    color: white;
    margin-left: -.3rem;
    height: 2.3rem;
}

.faqs .container .faq{
    border: #a46553 solid;
    width: 510px;
    padding-top: .2rem;
    padding-right: 1rem;
    padding-bottom: 1.5rem;
    padding-left: .5rem;
    border-width: .5px;
    background: black;
    
}

.faqs .container .faq a{
    text-decoration: none;
}

.faqs .container .faq #onthe{
    margin-left: 11rem;
    border-bottom: none;
    font-size: 50px;
    text-decoration: none;
}

.faqs .container .faq1 a:hover,
.faqs .container .faq2 a:hover,
.faqs .container .faq a:hover,
.faqs .container .faq3 a:hover,
.faqs .container .faq4 a:hover{
    color: aqua;
}

.faqs .container .faq3,
.faqs .container .faq4{
    display: flex;
    flex-wrap: wrap;
}

.faqs .container .faq1 p{
    border: #a46553 solid;
    border-width: .5px;

}

.faqs .container .faq1 button{
    height: 40px;
}



.contact{
    text-align: center;
    padding: 2.5rem;
    background:black;
}



.contact .cont{
    display: flex;
    padding: 1rem;
}




.contact .cont .left{
    text-align: left;
    width: 30%;
    margin-right: 5%;
    margin-left: 5%;
}


.contact .cont .center{
    width: 300px;
    margin-top: .5rem;
    font-size: 18px;

}

.contact .cont .center form input{
    font-size: 15px;
    background: none;

    border-right: none;
    padding: 15px 15px;
    width: 250px;
    border-left: none;
    border-top: none;
}

.contact .cont .center form .btn{
    width: 100px;
    border: #a46553 solid;
    text-align: center;
    font-size: 14px;
    padding: .5rem 1.5rem;
    margin-top: 1rem;
    border-radius: 5%;
    border-width: .5px;
}

.contact .cont .center form .btn:hover{
    background: #a46553;
    color: white;
}

.contact .cont .left .email,
.contact .cont .left .phone,
.contact .cont .left .address{
    width: 50%;
}


.contact  .cont .right{
    margin-left: 16rem;
    margin-top: 5rem;
}

.contact  .cont .right img{
    width: 30px;
}

.contact  .cont .right img:hover{
    border: #a46553 solid;
    padding: .5rem;
    border-radius: 100%;
    border-width: .3px;
}




.distributors{
    text-align: center;
}


.distributors .end{
    display: flex;
    flex-wrap: wrap;
    margin-left: 25%;
    gap: 1.5rem;
    position: relative;
}


.distributors .end .imagecont{
    width: 150px;
    height: 250%;
    border: #a46553 solid;
    border-radius: 5%;
    border-width: .75px;
    background: #272111;
    position: relative;
    text-align: center;
}


.distributors .end .imagecont img{
    width: 120px;
    padding: .5rem;
    background: none;

}




.widget {
    width:50px;
    margin-top: 2rem;
    margin-left: 5rem;

}


.widget .container{
    display: flex;
    padding: 2.5rem;
    gap: 5.5rem;
    margin-top: 2.5rem;
    border-left: none;
    border-right: none;
	background-color
}
.widget .container .next1 h3,
.widget .container .next2 h3,
.widget .container .next3 h3{
    font-size: 16px;
    text-transform: lowercase;
}

.widget .container .next1 h3:hover,
.widget .container .next2 h3:hover,
.widget .container .next3 h3:hover{
    color: aqua;
}

.widget .container .next3{
    width: 400px;
}

.widget .container .next3 .now #search{
    width: 300px;
    padding: .5rem;
    margin-right: 1rem;
    color: black;
    border: none;
}

.widget .container .next3 .now{
    display: flex;
}

.widget .container .next3 .now button{
    padding: .5rem 1.5rem;
    font-size: 10;
}
footer{
    font-size: 16px;
    text-align: center;
    padding: 2.5rem;
}