import React from 'react';
import { Link } from 'react-router-dom';
import ProjectNav from '../ProjectNav';
import AllWorks from '../AllWorks';
import '../App.css';

import img00 from '../image/ultimaker/img00.png';
import img01 from '../image/ultimaker/img01.png';
import img02 from '../image/ultimaker/img02.png';
import img03 from '../image/ultimaker/img03.gif';
import img04 from '../image/ultimaker/img04.gif';
import img05 from '../image/ultimaker/img05.gif';
import img06 from '../image/ultimaker/img06.png';
import img07 from '../image/ultimaker/img07.png';
import img08 from '../image/ultimaker/img08.PNG';
import img09 from '../image/ultimaker/img09.png';
import img10 from '../image/ultimaker/img10.png';
import img11 from '../image/ultimaker/img11.gif';
import img12 from '../image/ultimaker/img12.PNG';
import img13 from '../image/ultimaker/img13.png';
import img14 from '../image/ultimaker/img14.png';
import img15 from '../image/ultimaker/img15.gif';
import img16 from '../image/ultimaker/img16.png';
import img17 from '../image/ultimaker/img17.png';
import img20 from '../image/ultimaker/img20.png';





const style = {
    styleTitle: {
        background: '#013a63'
    },
    styleTask: {
        backgroundImage: `url(${img20})`,
        backgroundPosition: 'center',
        backgroundSize: '1920px 500px', 
    },
    styleLayer: {
        background: 'rgba(0,0,0,0.6)'
    }
}

class Ultimaker extends React.Component {
 
    constructor(props) {
        super(props);

        this.state = {
            design1: 'activeToggle',
            design2: 'inactiveToggle',
            opt1: 'activeButton',
            opt2: 'inactiveButton'
        };

        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleClick(event) {
        if (event.target.classList[0] === 'opt1') {
            this.setState(
                {
                    design1: 'activeToggle',
                    design2: 'inactiveToggle',
                    opt1: 'activeButton',
                    opt2: 'inactiveButton',
                }
            );
        }

        if (event.target.classList[0] === 'opt2') {
            this.setState(
                {
                    design1: 'inactiveToggle',
                    design2: 'activeToggle',
                    opt1: 'inactiveButton',
                    opt2: 'activeButton',
                }
            );
        }
        
    }

    render(){
        return (
            <div className="ultimaker">
                <ProjectNav style={style.styleTitle} name="Ultimaker CuraFlow" type="Tablet Application/ Data Dashboard" time="2019.02-2019.06" role="Group Work" firm="Ultimaker.B.V." img={img00} imgwidth="120%" />



                <div className="project-content ">
                    <section className="summary grey">
                        <div className="body">
                            <div class="summary-content">
                                <div class="column content-text">
                                    <div className="content-title-second">Task</div>
                                    In this project, we designed and evaluated a tablet application for managing a fleet of 3d printers in the future 3d-printing factory.
                                </div>
                                <div class="column content-text">
                                    <div className="content-title-second">Contribution</div>
                                    <li>Conducted user research.</li>
                                    <li>Ideated solutions.</li>
                                    <li>Built up user interface with Adobe XD</li>
                                    <li>Did quantitative and qualitative analysis of user test results</li>
                                </div>
                            </div>
                            <div className="content-title-second divide">Project Workflow</div>
                            <div className="content-figure">
                                <img className="full-img" src={img01}/>
                            </div>
                        </div>
                    </section>

                    <section className="background white">
                        <div className="body">
                            <div className="content-title">background</div>
                            <div className="content-title-second">Cura Connect by Ultimaker<br />A 3D Printing Software for Managing Production Workflow    
                            </div>
                            <div className="content-text">Ultimaker, the Dutch 3D printer-manufacturing company, has its own desktop and mobile software, Cura Connect, for the 3d printing workflow management, such as assigning works to printers and checking working status.</div>
                            <div className="content-figure">
                                <img className="full-img" src={img02} />
                            </div>
                        </div>
                    </section>

                    <div style={style.styleTask} className="about ">
                        <section className="layer grey" style={style.styleLayer}>
                            <div className="body">
                                <div className="content-title">project task</div>
                                <div className="content-title-second">Transition: <br />Office {"\uD83E\uDC2A"} 3D Printing Factory <br />Maker {"\uD83E\uDC2A"} 3D Printer Operators
                                </div>
                                <div className="content-text">Previously, Ultimaker focused on the office or lab context in which individual makers use one or two 3d printers. Now, Ultimaker wanted a way for factories to work with fleets of 3D printers. Also, in this sense, the target group shifts to the 3D printer operators. However, Cura Connect is not built for large amounts of printers.</div>
                            </div>
                        </section> 
                    </div>
                   

                    <section className="research white">
                        <div className="body">
                            <div className="content-title">user research</div>
                            <div className="content-title-second">3D Printer Operators</div>
                            <div className="content-text">
                                We figured out the possible features of the target group:
                            </div>

                            <div className="content-title-third divide">Control 20-40 Printers</div>
                            <div className="content-text">3D printer operators usually need to manage 20-40 3d printers in the factory workshops at the same time.</div>
                            <div className="content-figure">
                                <img width="50%" src={img03} />
                            </div>

                            <div className="content-title-third divide"> Control Digitally and Physically</div>
                            <div className="content-text">The working task of 3d operators is making a printer fleet run smoothly and efficiently. Their job includes:
                                <li>use applications to assign printing jobs (3d models) to printers</li>
                                <li>do physical maintenance on 3d printers (i.e., supply printing material)</li>
                            </div>
                            <div className="content-figure">
                                <img className="full-img" src={img04} />
                            </div>

                            <div className="content-title-third divide">Control in Moving</div>
                            <div className="content-text">Usually, operators need to walk from machine to machine at work time.</div>
                            <div className="content-figure">
                                <img width="50%" src={img05} />
                            </div>
                        </div>
                    </section>

                    <section className="challenge grey">
                        <div className="body">
                            <div className="content-title-second">Design Challenge</div>
                            <div className="content-text">
                                How might we achieve a high level and feeling of control for 3d printer operators' work?     
                            </div>
                        </div>
                    </section>

                    <section className="concept white">
                        <div className="body">
                            <div className="content-title">concept exploration</div>
                            <div className="content-title-second">Two Ways of "Control"</div>
                            <div className="content-title-third divide">Method</div>
                            <div className="content-text">We generate two concepts, one desktop and one mobile, they which mostly differ in ways of giving the operators a feeling of control. </div>

                            <div className="toggleBar">
                                <div className={`opt1 toggleButton ${this.state.opt1}`} onClick={this.handleClick}>Concept A</div>
                                <div className={`opt2 toggleButton ${this.state.opt2}`} onClick={this.handleClick}>Concept B</div>
                            </div>

                            <div className={`toggleInfo ${this.state.design1}`}>
                                <div className="concept-gist">"I can control it anywhere and anytime."</div>
                                <div className="content-figure">
                                    <img className="full-img " src={img06} />
                                </div>
                            </div>

                            <div className={`toggleInfo ${this.state.design2}`}>
                                <div className="concept-gist">"I can control it with a God view."</div>
                                <div className="content-figure">
                                    <img className="full-img" src={img07} />
                                </div>
                            </div>

                            <div className="content-text">
                                The paper prototype was made for a user test, to discover what factors contribute to "a feeling of control" when interacting with 3d printers. 
                            </div>
                            <div className="content-figure">
                                <img className="full-img" src={img08} />
                            </div>

                            <div className="content-title-third divide">Result</div>
                            <div className="content-text">
                                In conclusion, participants prefer:
                                <ul>
                                    <li>Work on the go with mobile app</li>
                                    <li>Information overview offered by desktop big screen</li>
                                </ul>
                                Our next step is to combine these two concepts.
                            </div>
                           
                        </div>
                    </section>

                    <section className="design lightgrey">
                        <div className="body">
                            <div className="content-title">Design</div>
                            <div className="content-title-second">Three Design Decisions</div>

                            <div className="content-title-third divide">A New Tablet App <br />Name as "Cura FLow"</div>
                            <div className="content-text">
                                A tablet application is preferred for integrating an information overview (it has a bigger screen) with a high level of mobility (it is portable). We gave it a new name: <b>"Cura Flow"</b>.
                            </div>

                            <div className="content-title-third divide">Schedule-based Interface </div>
                            <div className="content-text">
                                Keeping track of which printer group is printing which model in what status, is the essential task of the 3d printer operator. Therefore, we decided to make the schedule system, with an 2D coordination, This diagram offer the essential information for an operator:
                                <ul>
                                    <li>how much time is devoted to this production line </li> 
                                    <li>which production line </li> 
                                    <li>how many printers is being used </li> 
                                    <li>which printer </li>
                                </ul>
                            </div>
                            <div className="content-figure">
                                <img width="50%" src={img09} />
                            </div>

                            <div className="content-title-third divide">Color-code Task List</div>
                            <div className="content-text">Additionally, identifying the coming task quicking is another big need. Hence, a clear tasklist with color coding is added. Each color is attached to a task type and working status of printers, such as "red" meaning "Clogged Nozzle Error".</div>
                            <div className="content-figure">
                                <img width="50%" src={img10} />
                            </div>
                            
                            <div className="content-title-second divide">Prototype</div>
                            <div className="content-text">As shown above, we made an initial prototype with Adobe XD, this prototype would be tested for the usability evaluation.</div>
                            <div className="content-figure-two">
                                <img src={img12} className="img-shadow" />
                                <img src={img11} className="img-shadow"  />
                            </div>

                        </div>  
                    </section>


                    <section className="test white">
                        <div className="body">
                            <div className="content-title">usability test</div>
                            <div className="content-text">The next step is to test the usability and qualities of our concept, we went to a few companies to test our prototype with operators in the real context of a factory workshop. In this text, we raised a question:
                                <ul>
                                    <li>Which interaction element impedes people from finishing tasks? How serious is it?
                                 </li>
                                </ul>
                            </div>
                            
                            <div className="content-title-second divide">Method</div>
                            <div className="content-text">Digital prototypes and cardboard 3D printers are utilized in this test. Participants were asked to use this prototype to perform three tasks.</div>
                            <div className="content-figure">
                                <img className="full-img" src={img13} />
                            </div>

                            <div className="content-title-second divide">Qualitative Analysis</div>
                            <div className="content-text">We did thematic analysis on the interview transcription, then, we found out the 10 usability problems (which you can check it at the final results). However, we had a question:
                                <ul>
                                    <li>
                                         Which of the 10 usability problems should be resolved first?
                                    </li>
                                </ul>
                                So, we did quantitative analysis to pritorize the usability problems.
                            </div>
                           

                            <div className="content-title-second divide">Quantitative Analysis</div>
                            <div className="content-text">For quanttative analysis, we focus on the severity of error and error rate. We did it in 3 steps.</div>
                            <div className="content-figure">
                                <img className="full-img" src={img14} />
                            </div>

                            <div className="content-title-second divide">Final Result</div>
                            <div className="content-text">We combined the quantitative and qualitative analysis to prioritize the 10 problems. We did it in 4 steps:
                                <ol>
                                    <li>Link each error to the usability problems which cause this error</li>
                                    <li>Evaluate the severity and frequency of each error</li>
                                    <li>Locate each problem on the Severity-Frequency Coordination, based on its correspondent error.</li>
                                    <li>The more closed to right-down, the more urgent the problem is.</li>
                                </ol>
                                With this results, we chose the five most urgent problem to fix, and finalized the user experience design.
                            </div>
                            <div className="content-figure divide img-shadow">
                                <img className="full-img" src={img15} />
                            </div>
                        </div>
                    </section>
                    
                    <section className="finalize-design grey">
                        <div className="body">
                            <div className="content-title">Finalized Design</div>
                            <div className="content-title-second">Interface</div>
                        </div>

                        <div className="content-figure">
                            <img className="full-img" src={img17} />
                        </div>

                        <div className="body">
                            <div className="content-title-second divide">Video Demo</div>
                            <div className="content-figure">
                               <iframe width="100%" height="500px" src="https://www.youtube.com/embed/abDWVI2FzjM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </section>
                </div>


                <AllWorks selected="two"/>

            </div>
        );
    }

}

export default Ultimaker;