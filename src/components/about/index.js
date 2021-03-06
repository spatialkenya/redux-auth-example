import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setNavSubtitle} from '../../actions'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Footer from '../footer'
import './About.css';

const AboutDigischool = () => (
  <Card>
    <CardHeader title="What is Digischool ?" titleStyle={{
      fontSize: '20px',
      paddingBottom: '0px'
    }}/>
    <CardText>
      <p>DigiSchool is the brand name for the Digital Literacy Programme (DLP), a programme borne out of the Government of Kenya’s vision to make sure every pupil is prepared for today’s digital world. The programme introduces primary school children, beginning with those in lower primary, to the use of digital technology and communications in learning. DLP is targeted at learners in all public primary schools in Kenya and will cover all the 23,951 primary schools, and nearly 1 million 2016 className 1 pupils, with a combination of the use of technology, content and teaching, to transform learning in Kenya into a 21st century education system.</p>
      <p>DigiSchool is led by the Ministry of Information, Communications and Technology (ICT) and is executed through a multi stakeholder approach with the ICT Authority as the implementing body.</p>
      <ul>
        <h4>Key components of the Digital Learning Programme</h4>
        <li>Provision of digital devices for both learners and teachers.</li>
        <li>Capacity development for teacher and implementers</li>
        <li>Broadband connectivity devices</li>
        <li>Provision of content for digital learning.</li>
        <li>Establishment of local assembly for digital devices and related accessories</li>
      </ul>
      <ul>
        <h4>Objectives of the Digital Learning Programme:</h4>
        <li>Entrenching ICT in the teaching and learning process and management of education in primary schools.</li>
        <li>Equipping public primary schools with appropriate ICT infrastructure to support teaching and learning process.</li>
        <li>Developing capacity of education managers, primary school teachers and other stakeholders to enable them use the wide range of ICT tools in teaching-learning process and management of schools.
        </li>
        <li>Facilitating the development and accreditation of appropriate digital content that will enhance acquisition of 21st century skills.</li>
        <li>Promoting universal access and equitable distribution to ICT infrastructure in primary schools</li>
        <li>Integrating sustainable and affordable digital programme in Kenya education system</li>
      </ul>
      <ul>
        <h4>Programme Benefits</h4>
        <li>Development of skills for a knowledge economy</li>
        <li>Promoting research and development</li>
        <li>Promoting locally assembled/manufactured goods and services</li>
        <li>Enhancing job creation through digital content creation, e-waste management of worn devices, and local assembly of devices</li>
        <li>Enhanced connectivity to power and the internet for the large community</li>
        <li>Opening up participation in the education system to the community through school websites, emails, and blogs</li>
      </ul>
      <h4>More Information</h4>
      <p>For more information, please visit the DLP Project website</p>
      <p>
        <a href="http://icta.go.ke/digischool/" target="_blank" rel="noopener noreferrer">http://icta.go.ke/digischool/</a>
      </p>
    </CardText>
  </Card>
);

const AboutDiva = () => (
  <Card>
    <CardHeader title="What is DiVA ?" titleStyle={{
      fontSize: '20px',
      paddingBottom: '0px'
    }}/>
    <CardText>
      <p>DiVA stands for DigiSchool Visualization and Analytics.</p>
      <p>Jomo Kenyatta University of Agriculture and Technology (JKUAT) and POSTIVO-BGH consortium are implementing Lot 2 of the Kenya Digital Literacy Programme (DLP). They are expected to train users, supply, install, commission and support 356, 737 learning devices in 8, 688 public primary schools in 21 counties.</p>
      <p>The consortium took a multi-institutional approach that brought on board five key players namely:</p>
        <ol>
          <li><strong>GOIP</strong> - a call centre</li>
          <li><strong>WEEE Centre</strong> - e-waste management</li>
          <li><strong>COM21</strong> -Installation, Teacher training</li>
          <li><strong>Technology Partner LTD</strong> - installation, teacher training</li>
          <li> <strong>G4S</strong> - Distribution of devices to schools</li>
        </ol>
      <p>In order for these institutions to <strong>collaborate efficiently and effectively,</strong> there was need for a tool. JKUAT and POSTIVO-BGH also require the same tool to enable them dynamically capture current status of the project by use of visualization and analytics of the available data and information.</p>
      <p>Diva is a web application innovation that aims at addressing the major information needs of all stakeholders of the Digischool project.</p>
      <p>DiVA is developed to support the Kenya Digital Literacy Programme.(DLP). The application provides all project stakeholders visual representation of data and information supported with analytics, hence enabling efficient and effective management of the project. The application provides an enabling environment for collaboration among key stakeholders in optimizing resources as well as improving transparency and efficiency of project implementation.</p>
    </CardText>
  </Card>
);

const AboutFunctionalities = () => (
  <Card>
    <CardHeader title="What are the supported functionalities ?" titleStyle={{
      fontSize: '20px',
      paddingBottom: '0px'
    }}/>
    <CardText>
      <ol>
        <h4>The application supports the following functions:</h4>
        <li>
          <p>An interactive GIS map interface for visualizing all public schools in Kenya.</p>
          <p>The map currently shows primary schools under the LOT 2 Implemenation</p>
          <p>It also categorises the schools into two, those that have received the learning devices, and those that are yet to receive</p>
        </li>
        <li>
          <p>Detailed information of each schools, including the className one enrollment of the school and the present devices</p>
        </li>
        <li>
          <p>A summary of all the stakeholders in the consortium with information regarding their contribution and working, in each school and per County, thus providing collaborative working and monitoring between the members</p>
        </li>
        <li>Specific analysis of the DLP project variables per county</li>
      </ol>
    </CardText>
  </Card>
);


 class About extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(setNavSubtitle("About"))
  }

  render() {
    return (
      <div>
          <MuiThemeProvider>
            <div className="about-page container">
              <div className="row">
                <div className="col-lg-12">
                  <AboutDigischool/>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <AboutDiva/>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <AboutFunctionalities/>
                </div>
              </div>
            </div>
          </MuiThemeProvider>
          <Footer/>
        </div>
    );
  }
}

export default connect(null)(About)