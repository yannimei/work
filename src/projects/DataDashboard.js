import React from 'react';
import { Link } from 'react-router-dom';
import ProjectNav from '../ProjectNav';
import AllWorks from '../AllWorks';
import '../App.css';

import img00 from '../image/data/img00.png';
import img01 from '../image/data/img01.png';
import img03 from '../image/data/img03.png';

import img05 from '../image/data/img05.gif';
import img06 from '../image/data/img06.png';
import img from '../image/data/img.png';


const style = {
    styleTitle: {
        background: '#2b9348'
    },
   
}

class DataDashboard extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <div className="datadashboard">
                <ProjectNav style={style.styleTitle} name="NPS Dashboard" type="Desktop Application/ Business software" time="2019.10-2020.01" role="UX Design" firm="One mobile supplier in China" img={img00} imgwidth="140%" />

                <div className="project-content ">
                    <section className="summary grey">
                        <div className="body">
                            <div class="summary-content">
                                <div class="column content-text">
                                    <div className="content-title-second">Task</div>
                                    In this project, I designed a user feedback data dashboard for the internal product team. This product enables the staff to understand the user satisfaction and discover iteration opportunities of their in-house digital products. Now, this product is already internally used.
                                </div>
                                <div class="column content-text">
                                    <div className="content-title-second">Contribution</div>
                                    <li>Communicated with the project manager to decide the data strategy.</li>
                                    <li>Built up the UI design system, interface, user flow.</li>
                                    <li>Delivered a UX document for developers.</li>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="focus lightgrey">
                        <div className="body">
                            <div className="content-title">NDA</div>
                            <div className="content-text">Due to NDA, I cannot give detailed discription on UX design. Thus, I will focus on introducing my tasks. Also, all the data here is removed.</div>
                        </div>
                    </section>

                   <section className="show-img" >
                       <div className="content-figure-bg">
                            <img className="full-img" src={img06} />
                       </div>
                    </section>

                    
                    <section className="collaboration lightgrey">
                        <div className="body">
                            <div className="content-title">Collaboration</div>
                            <div className="content-title-second">1 Project Manager (Statistics Background)</div>
                            <div className="content-title-second">1 Developer (Full-Stack)</div>
                            <div className="content-title-second">1 UX Designer (Me)</div>
                        </div>
                    </section>

                    <section className="challenge grey">
                        <div className="body">
                            <div className="content-title">Problem</div>
                            <div className="content-title-second">Identify Factors behind lower customer stickiness</div>
                            <div className="content-text">One mobile device supplier company found that the customer stickiness of its in-house mobile applications is decreasing. They need a method for them scientifically to figure out the reason behind, and explore the opportunities for product improvement.</div>
                        </div>
                    </section>
                    S
                    <section className="approach white">
                        <div className="body">
                            <div className="content-title">Approach</div>

                            <div className="content-title-second">Sort Users based on Usage Lifecycle</div>
                            <div className="content-text">We tried to sort users based on their "position" on the usage lifecycle, from initial installation, low-active use, high-active interaction, and to final uninstallation. Then, we try to figure out what they feel about the product respectively.
                            </div>

                            <div className="content-title-second divide">Use NPS to Measure User Feedback </div>
                            <div className="content-text">We introduced the NPS (Net Promoter Score) as a metric for measuring user feedback. It is an effective measurement tool of customer loyalty, representing the motivation of customers to recommend a product.
                            </div>
                            <div className="content-figure">
                                <img className="shrink-img" src={img01} />
                            </div>
                            <div className="content-text">The project manager developed a set of NPS questionnaires to collect the NPS from the app users. Then, my task is to organize and visualize the collected data on the internal data dashboard.
                            </div>
                            
                        </div>
                    </section>

                    <section className="show green">
                        <div className="body">
                            <div className="content-title">My Task</div>
                        </div>

                        <div className="body-wide">
                            <div className="sub-task img-shadow">
                                <div className="content-title-second">Data Strategy</div>
                                <div className="content-text">I collaborated with the project manager to decide how to organize the NPS data (the NPS questionnaires results). We collaboratively defined:
                                    <ul>
                                        <li>Which data should be displayed on the dashboard</li>
                                        <li>The priority of the data to be read</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="sub-task img-shadow">
                                <div className="content-title-second">Wireframe</div>
                                <div className="content-text">I structured the interfaces with wireframe, for the dashboard users can understand the NPS data from the general to detail, under such hierarchy:
                                    <ul className="hierachy">
                                        <li>{"\uD83E\uDC2A"}The NPS comparison with competitors</li>
                                        <li>{"\xa0\xa0"}{"\uD83E\uDC2A"}The NPS overview of the in-house product</li>
                                        <li>{"\xa0\xa0\xa0\xa0"}{"\uD83E\uDC2A"}The NPS of each subdivided user group</li>
                                        <li>{"\xa0\xa0\xa0\xa0\xa0\xa0"}{"\uD83E\uDC2A"}The driven factors(i.e., ratings, quotations) behind the NPS</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="sub-task img-shadow">
                                <div className="content-title-second">Design system</div>
                                <div className="content-title-third">UI Components</div>
                                <div className="content-text">I defined the format of UI components including top bar, side navigation bar, filter bar, toggle box, option box, etc.</div>
                                <div className="content-figure">
                                    <img className="full-img" src={img03} />
                                </div>
                                

                                <div className="content-title-third divide">Visualization of different types of data</div>
                                <div className="content-text">I defined the visualization strategy based on data type.</div>
                                <div className="content-figure">
                                    <img className="full-img" src={img05} />
                                </div>
                            </div>

                            <div className="sub-task img-shadow">
                                <div className="content-title-second">UX Document</div>
                                <div className="content-text">I made the UX documents to communicate the UX requirements with the full-stack developers. In this project, I place more focus on explaining:
                                    <ul>
                                        <li>Data source and type </li>
                                        <li>Data process method</li>
                                        <li>Functionality of essential UI component</li>
                                    </ul>
                                </div>
                                <div className="content-figure">
                                    <img className="full-img" src={img} />
                                </div>
                            </div>
                        </div>
   
                    </section>

                    <section className="result white">
                        <div className="body">
                            <div className="content-title">Project Result</div>
                            <div className="content-text">This dashboard is already internally used by the product team. One month after launching, we collected data from 80,000 users, and successfully helped the client to identify the most essential factor of user loyalty for 4 in-house mobile products.</div>
                        </div>
                    </section>


                </div>

                <AllWorks selected="three" />

            </div>

            )

        }
}



export default DataDashboard;