import React, { Component } from 'react'
import './Landing.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import jQuery from 'jquery'
import Linkedin from './linkedin-icon.png'
import Email from './Other-Mail-Metro-icon.png'
import Phone from './Phone-icon.png'
import Skype from './Skype-icon.png'
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
            })
            $("#hobbi").click(function () {
                var elmnt = document.getElementById("hobbi_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            })
        })
    }
    render() {
        return (
            <div class="row">
                <div class="col-2 nav_class">
                    <div class="nav flex-column nav-pills nav_class" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link" id="about" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="true">About</a>
                        <a class="nav-link" id="education" data-toggle="pill" role="tab" aria-controls="v-pills-profile" aria-selected="false">Education</a>
                        <a class="nav-link" id="work" data-toggle="pill" role="tab" aria-controls="v-pills-messages" aria-selected="false">Work Exprience</a>
                        <a class="nav-link" id="skill" data-toggle="pill" role="tab" aria-controls="v-pills-settings" aria-selected="false">Skills</a>
                        <a class="nav-link" id="hobbi" data-toggle="pill" role="tab" aria-controls="v-pills-settings" aria-selected="false">Hobbies</a>
                    </div>
                </div>
                <div class="col-10">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" >

                            <div id='about_page' className='about'>
                                <div className='about_dark'>
                                    <div className='center'>

                                        <h1 className='hi'>Hi</h1>
                                        <h1 className='name'> iam kimia</h1>
                                        <div >
                                            <img src={Linkedin} className='icon'></img>
                                            <img src={Email} className='icon'></img>
                                            <img src={Skype} className='icon'></img>
                                            <img src={Phone} className='icon'></img>
                                        </div>
                                    </div>

                                </div></div>
                            <p id='education_page'> Education  ScrolSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                             ggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcl down the page to see the result.</p>
                            <p id='work_page'>  Work  Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcccccccccccccccccccccccccusSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgc.</p>
                            <p id='skill_page'>Skill  Some text to enable scrolling.. Lorem ipsum dolor sit amet, Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcillum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                            <p id='hobbi_page'> Hobbi  Some text tSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgco enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                            <p>Some text to enable scrolling.ggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggysdcyudsgcuysgdcyusgdcuygsyudcgusydgcSome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus g
                            gggggggggggggggggggggggggggg. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>

                        </div>
                    </div>
                </div>
            </div>

        )
    }


}
export default Landing