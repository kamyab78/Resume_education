import React, { Component } from 'react'
import './Landing.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import jQuery from 'jquery'
import Linkedin from './linkedin-icon.png'
import Email from './Other-Mail-Metro-icon.png'
import Phone from './Phone-icon.png'
import Skype from './Skype-icon.png'
import Particles from 'react-particles-js';
import Back from './header.png'
import { Navbar, Nav } from 'react-bootstrap';
var ip = ''
class Landing extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $.getJSON("https://api.ipify.org?format=json",
                function (data) {
                    console.log(data.ip);
                    ip = data.ip
                })
            setTimeout(function () {
                var settings = {
                    "url": "http://127.0.0.1:8000/create/",
                    "method": "POST",
                    "timeout": 0,
                    "headers": {
                        "accept": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "*",
                        "Content-Type": "application/json"
                    },
                    "data": JSON.stringify({
                        "ip_address": ip
                    }),
                };
                $.ajax(settings).done(function (response) {
                    console.log(response)
                });
            }, 2000);
            $("#about").click(function () {
                var elmnt = document.getElementById("about_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            })
            $("#education").click(function () {
                var elmnt = document.getElementById("education_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            })
            $("#work").click(function () {
                var elmnt = document.getElementById("work_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            })
            $("#skill").click(function () {
                var elmnt = document.getElementById("skill_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
                setTimeout(function () {
                    $('#title1').fadeIn('slow')
                }, 200);
                setTimeout(function () {
                    $('#row_one').fadeIn('slow')
                }, 400);
                setTimeout(function () {
                    $('#row_two').fadeIn('slow')
                }, 600);
                setTimeout(function () {
                    $('#row_three').fadeIn('slow')
                }, 800);
                setTimeout(function () {
                    $('#title2').fadeIn('slow')
                }, 1000);
                setTimeout(function () {
                    $('#row_four').fadeIn('slow')
                }, 1200);
                setTimeout(function () {
                    $('#row_five').fadeIn('slow')
                }, 1400);
                setTimeout(function () {
                    $('#row_six').fadeIn('slow')
                }, 1600);
                setTimeout(function () {
                    $('#row_seven').fadeIn('slow')
                }, 1800);
                setTimeout(function () {
                    $('#row_eight').fadeIn('slow')
                }, 2000);
            })

            $("#linkedin").click(function () {
                window.open("https://www.linkedin.com/in/maryam-ghassemi-993085155/")
            })
            $(".yek").hover(function () {
                $(this).css("background-color", "white");
                $(".circle_one").css("background-color", '#f3c623');
                $(".circle_one").css("border", "4px solid #f3c623");
                $(".circle_one").css("z-index", "999");
                $(".triangle").css("border-right", "30px solid  white");

            }, function () {
                $(this).css("background-color", "#f0f2f7");
                $(".circle_one").css("background-color", "gray");
                $(".circle_one").css("border", "4px solid gray");
                $(".triangle").css("border-right", "30px solid transparent");
            });
            $(".do").hover(function () {
                $(this).css("background-color", "white");
                $(".circle_two").css("background-color", "#f3c623");
                $(".circle_two").css("border", "4px solid #f3c623");
                $(".circle_two").css("z-index", "999");
                $(".triangle1").css("border-left", "30px solid  white");

            }, function () {
                $(this).css("background-color", "#f0f2f7");
                $(".circle_two").css("background-color", "gray");
                $(".circle_two").css("border", "4px solid gray");
                $(".triangle1").css("border-left", "30px solid transparent");
            });
            $(".se").hover(function () {
                $(this).css("background-color", "white");
                $(".circle_three").css("background-color", "#f3c623");
                $(".circle_three").css("border", "4px solid #f3c623");
                $(".circle_three").css("z-index", "999");
                $(".triangle2").css("border-right", "30px solid  white");

            }, function () {
                $(this).css("background-color", "#f0f2f7");
                $(".circle_three").css("background-color", "gray");
                $(".circle_three").css("border", "4px solid gray");
                $(".triangle2").css("border-right", "30px solid transparent");
            });
            $(".char").hover(function () {
                $(this).css("background-color", "white");
                $(".circle_four").css("background-color", "#f3c623");
                $(".circle_four").css("border", "4px solid #f3c623");
                $(".circle_four").css("z-index", "999");
                $(".triangle3").css("border-left", "30px solid  white");

            }, function () {
                $(this).css("background-color", "#f0f2f7");
                $(".circle_four").css("background-color", "gray");
                $(".circle_four").css("border", "4px solid gray");
                $(".triangle3").css("border-left", "30px solid transparent");
            });
            $(window).scroll(function () {
                var height = $(window).scrollTop();
                var sp = document.getElementById("skill_page");

                if (height >= sp.offsetTop - 500) {
                    setTimeout(function () {
                        $('#title1').fadeIn('slow')
                    }, 200);
                    setTimeout(function () {
                        $('#row_one').fadeIn('slow')
                    }, 400);
                    setTimeout(function () {
                        $('#row_two').fadeIn('slow')
                    }, 600);
                    setTimeout(function () {
                        $('#row_three').fadeIn('slow')
                    }, 800);
                    setTimeout(function () {
                        $('#title2').fadeIn('slow')
                    }, 1000);
                    setTimeout(function () {
                        $('#row_four').fadeIn('slow')
                    }, 1200);
                    setTimeout(function () {
                        $('#row_five').fadeIn('slow')
                    }, 1400);
                    setTimeout(function () {
                        $('#row_six').fadeIn('slow')
                    }, 1600);
                    setTimeout(function () {
                        $('#row_seven').fadeIn('slow')
                    }, 1800);
                    setTimeout(function () {
                        $('#row_eight').fadeIn('slow')
                    }, 2000);
                }
            })
        })
    }
    scroll_skill() {
        console.log(1212121212)
    }
    render() {
        return (
            <div class="row " style={{ backgroundColor: '#f7f7f7', width: '200vh' }}>
                <Navbar fixed="top" expand="lg" style={{ backgroundColor: 'rgb(128, 128, 128 , 0.5)' }}>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white', color: 'white' }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link id="about" style={{ color: 'rgb(0, 0, 0 , 0.7)', fontSize: '20px', marginLeft: '25vh' }}>About</Nav.Link>
                            <Nav.Link id="education" style={{ color: 'rgb(0, 0, 0 , 0.7)', fontSize: '20px', marginLeft: '25vh' }}>
                                Education
                                </Nav.Link>
                            <Nav.Link id="work" style={{ color: 'rgb(0, 0, 0 , 0.7)', fontSize: '20px', marginLeft: '25vh' }}>Work Exprience</Nav.Link>
                            <Nav.Link id="skill" style={{ color: 'rgb(0, 0, 0 , 0.7)', fontSize: '20px', marginLeft: '25vh' }}>
                                Skills
                                </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

                <div class="col-lg-12 main">

                    <div className='land'>

                        <div className='land_dark'>

                            <Particles height='100vh'

                                params={{

                                    "particles": {
                                        "number": {
                                            "value": 250
                                        },
                                        "size": {
                                            "value": 5
                                        },
                                        "color": {
                                            "value": "#95389e"
                                        },
                                    },
                                    "interactivity": {
                                        "events": {
                                            "onHover": {
                                                "enable": true,
                                                "mode": "repulse"
                                            }
                                        }
                                    }
                                }}
                            >

                            </Particles>
                            <div className='center'>


                                <h1 className='name'> I'm Maryam Ghassemi</h1>
                                <div >

                                    <img id='linkedin' src={Linkedin} className='icon'></img>
                                    <img src={Email} className='icon'></img>
                                    <img src={Skype} className='icon'></img>
                                    <img src={Phone} className='icon'></img>
                                </div>

                            </div>







                        </div></div>
                    <div id='about_page' className='about'>
                        <div className='col-12 about_page'></div>
                    </div>
                    <div id='education_page' className='education'>
                        <h1 style={{ borderBottomColor: 'black', borderBottomStyle: 'solid', marginLeft: '100px', paddingTop: '120px ', textAlign: 'center', width: '85%' }}>Education</h1>
                        <div className='one_edu'><h1>2015-2019</h1></div>
                        <div className='t1'></div>
                        <div className='h1_edu1'>
                            <h1 className='edu1'>B.Sc.in Computer Engineering (Software Engineering) </h1>
                            <h1 className='edu1_1' >Department of Electrical and Computer Engineering, Faculty of Engineering,  Shahid Beheshti University, Tehran, Iran</h1>
                            <h1 className='edu1_2' >Last two years gpa:  </h1>
                        </div>

                        <div className='two_edu'><h1>2011-2014</h1></div>
                        <div className='t2'></div>
                        <div className='h1_edu2'>

                            <h1 className='edu2'>Diploma</h1>
                            <h1 className='edu2_1'> Zohreh Tehrani High School</h1>
                            <h1 className='edu2_2'>Overall gpa : 19.33/20</h1>
                        </div>

                    </div>
                    <div id='work_page' className='work'>
                        <h1 style={{ borderBottomColor: 'black', borderBottomStyle: 'solid', marginLeft: '100px', paddingTop: '120px ', textAlign: 'center', width: '85%' }}>Work Exprience</h1>
                        <div class="vl">
                            <div >
                                <div className='circle_one'></div>
                                <div className='triangle'></div>
                                <div className='yek'>
                                    <h1 style={{ fontSize: '38px', lineHeight: '50px', fontWeight: 'bold' }}>Internship Trainee</h1>
                                    <h1 style={{ fontSize: '22px' }}>Fanap . Jul2018 - Sep2018</h1>
                                    <h1 style={{ fontSize: '18px' }}> which is one of the Pioneer in Iran
                                    online financial system
</h1>
                                    <h1 style={{ fontSize: '18px' }}>
                                        Started learning Spring Boot framework of Java</h1>

                                </div>
                            </div>
                            <div >
                                <div className='circle_two'></div>
                                <div className='triangle1'></div>
                                <div className='do'><h1 style={{ fontSize: '38px', lineHeight: '50px', fontWeight: 'bold' }}>BackEnd Developer</h1>
                                    <h1 style={{ fontSize: '22px' }}>Awans Startup . Oct2018 - Jan2020</h1>
                                    <h1 style={{ fontSize: '18px' }}> Server Implementor</h1>
                                    <h1 style={{ fontSize: '18px' }}> Developed a system for selling sort of short-term insurances</h1>
                                </div>
                            </div>
                            <div >
                                <div className='circle_three'></div>
                                <div className='triangle2'></div>
                                <div className='se'>   <h1 style={{ fontSize: '38px', lineHeight: '50px', fontWeight: 'bold' }}>Mobile Developer</h1>
                                    <h1 style={{ fontSize: '22px' }}>Awans Startup .Oct 2019 - Jan 2020</h1>
                                    <h1 style={{ fontSize: '18px' }}>Learned Mobile Developing from scratch Self-taught</h1>
                                </div>
                            </div>
                            <div >
                                <div className='circle_four'></div>
                                <div className='triangle3'></div>
                                <div className='char'>   <h1 style={{ fontSize: '38px', lineHeight: '50px', fontWeight: 'bold' }}>BackEnd Developer</h1>
                                    <h1 style={{ fontSize: '22px' }}>Tapsell . Apr2020 - Now</h1>
                                    <h1 style={{ fontSize: '18px' }}> which is the first Smart digital
advertising network in Iran as Backend Developer</h1>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div id='skill_page' className='skill' onScroll={this.scroll_skill} >

                        <h1 style={{ borderBottomColor: 'black', borderBottomStyle: 'solid', marginLeft: '100px', paddingTop: '120px ', textAlign: 'center', width: '85%' }}>Skills</h1>
                        <h1 style={{ fontSize: '25px', marginLeft: '160px', marginTop: '20px', display: 'none' }} id='title1'>Progamming Language</h1>
                        <div style={{ display: 'none' }} className='row_one' id='row_one'>
                            <div className='java'>
                                <h1>Java</h1>
                                <div className='one' style={{ marginLeft: '80px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four'></div>
                                <div className='five'></div>
                            </div>
                            <div className='kotlin'>
                                <h1>Kotlin</h1>
                                <div className='one' style={{ marginLeft: '40px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four'></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='cpp'>
                                <h1>C/C++</h1>
                                <div className='one' style={{ marginLeft: '70px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                        </div>
                        <div style={{ display: 'none' }} className='row_one' id='row_two'>
                            <div className='java'>
                                <h1>Python</h1>
                                <div className='one' style={{ marginLeft: '60px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='kotlin'>
                                <h1>Mathlab</h1>
                                <div className='one' style={{ marginLeft: '20px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='cpp'>
                                <h1>Assembly</h1>
                                <div className='one' style={{ marginLeft: '40px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                        </div>
                        <div style={{ display: 'none' }} className='row_one' id='row_three'>
                            <div className='java'>
                                <h1>Verilog</h1>
                                <div className='one' style={{ marginLeft: '63px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='kotlin'>
                                <h1>Vhdl</h1>
                                <div className='one' style={{ marginLeft: '50px' }}></div>
                                <div className='two'></div>
                                <div className='three' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>

                        </div>

                        <h1 style={{ fontSize: '25px', marginLeft: '160px', marginTop: '50px', display: 'none' }} id='title2' >Framework and Tecnical Program</h1>
                        <div style={{ display: 'none' }} className='row_one' id='row_four'>
                            <div className='intelij'>
                                <h1 >IntelijIDE</h1>
                                <div className='one' style={{ marginLeft: '53px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four'></div>
                                <div className='five'></div>
                            </div>
                            <div className='spring'>
                                <h1>Spring</h1>
                                <div className='one' style={{ marginLeft: '40px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four'></div>
                                <div className='five'></div>
                            </div>
                            <div className='cpp'>
                                <h1>DataBase</h1>
                                <div className='one' style={{ marginLeft: '30px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' ></div>
                                <div className='five' ></div>
                            </div>
                        </div>
                        <div style={{ display: 'none' }} className='row_one' id='row_five'>
                            <div className='intelij'>
                                <h1>WebStorm</h1>
                                <div className='one' style={{ marginLeft: '40px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four'></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='spring'>
                                <h1>Hibernate</h1>
                                <div className='one' ></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four'></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='cpp'>
                                <h1>Git</h1>
                                <div className='one' style={{ marginLeft: '95px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' ></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                        </div>
                        <div style={{ display: 'none' }} className='row_one' id='row_six'>
                            <div className='intelij'>
                                <h1>ReactNative</h1>
                                <div className='one' style={{ marginLeft: '27px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four'></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='spring'>
                                <h1>React</h1>
                                <div className='one' style={{ marginLeft: '43px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='cpp'>
                                <h1>Android</h1>
                                <div className='one' style={{ marginLeft: '50px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                        </div>
                        <div style={{ display: 'none' }} className='row_one' id='row_seven'>
                            <div className='intelij'>
                                <h1>Socket</h1>
                                <div className='one' style={{ marginLeft: '74px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='spring'>
                                <h1>Ubunto</h1>
                                <div className='one' style={{ marginLeft: '32px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='cpp'>
                                <h1>Arm</h1>
                                <div className='one' style={{ marginLeft: '80px' }}></div>
                                <div className='two'></div>
                                <div className='three' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                        </div>
                        <div style={{ display: 'none' }} className='row_one' id='row_eight'>
                            <div className='intelij'>
                                <h1>Prossecor Avr</h1>
                                <div className='one' ></div>
                                <div className='two'></div>
                                <div className='three' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        )
    }


}
export default Landing