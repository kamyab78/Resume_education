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
class Landing extends Component {
    componentDidMount() {
        $(document).ready(function () {
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
            $("#hobbi").click(function () {
                var elmnt = document.getElementById("hobbi_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            })
            $("#linkedin").click(function () {
                window.open("https://www.linkedin.com/in/maryam-ghassemi-993085155/")
            })
            $(".yek").hover(function () {
                $(this).css("background-color", "white");
                $(".circle_one").css("background-color", "red");
                $(".circle_one").css("border", "4px solid red");
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
                $(".circle_two").css("background-color", "red");
                $(".circle_two").css("border", "4px solid red");
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
                $(".circle_three").css("background-color", "red");
                $(".circle_three").css("border", "4px solid red");
                $(".circle_three").css("z-index", "999");
                $(".triangle2").css("border-right", "30px solid  white");

            }, function () {
                $(this).css("background-color", "#f0f2f7");
                $(".circle_three").css("background-color", "gray");
                $(".circle_three").css("border", "4px solid gray");
                $(".triangle2").css("border-right", "30px solid transparent");
            });
            $(window).scroll(function () {
                var height = $(window).scrollTop();
                var sp = document.getElementById("skill_page");
                console.log(sp.offsetTop)
                console.log(height)
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
            <div class="row" style={{ backgroundColor: '#f7f7f7' }}>
                <div class="col-lg-2  nav_class">
                    <div class="nav flex-column nav-pills nav_class" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{ textAlign: 'center' }}>
                        <a class="nav-link" id="about" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="true">About</a>
                        <a class="nav-link" id="education" data-toggle="pill" role="tab" aria-controls="v-pills-profile" aria-selected="false">Education</a>
                        <a class="nav-link" id="work" data-toggle="pill" role="tab" aria-controls="v-pills-messages" aria-selected="false">Work Exprience</a>
                        <a class="nav-link" id="skill" data-toggle="pill" role="tab" aria-controls="v-pills-settings" aria-selected="false">Skills</a>
                        <a class="nav-link" id="hobbi" data-toggle="pill" role="tab" aria-controls="v-pills-settings" aria-selected="false">Hobbies</a>
                    </div>
                </div>
                <div class="col-lg-10 ">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" >

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
                                jbhvjgc
                            </div>
                            <div id='education_page' className='education'>
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
                                            <h1 style={{ fontSize: '20px' }}>Fanap . Jul2018 - Sep2018</h1>

                                        </div>
                                    </div>
                                    <div >
                                        <div className='circle_two'></div>
                                        <div className='triangle1'></div>
                                        <div className='do'><h1 style={{ fontSize: '38px', lineHeight: '50px', fontWeight: 'bold' }}>BackEnd Developer</h1>
                                            <h1 style={{ fontSize: '20px' }}>Awans . Oct2018 - Jan2020</h1>
                                        </div>
                                    </div>
                                    <div >
                                        <div className='circle_three'></div>
                                        <div className='triangle2'></div>
                                        <div className='se'>   <h1 style={{ fontSize: '38px', lineHeight: '50px', fontWeight: 'bold' }}>BackEnd Developer</h1>
                                            <h1 style={{ fontSize: '20px' }}>Tapsell . Apr2020 - Now</h1>
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
                            <p id='hobbi_page' className='hobbi'> Hobbi  Some text tSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                           </p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}
export default Landing