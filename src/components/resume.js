import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../images/avatar.png';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img src={avatar} alt="avatar" style={{ height: '200px' }} />
            </div>
            <h2 style={{ paddingTop: '2em' }}>Ram Mahajan</h2>
            <h4 style={{ color: 'grey' }}>Software Engineer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>
              Ram Mahajan is a passionate technologist, life hacker and a
              minimalist. His passion goes beyond his profession. He has worked
              on a varied set of technologies and domains over the last decade
              and had learned a lot about the technology transition that occurs
              around software engineering best practices, patterns,
              architecture, Agile methodologies, DevOps, "how we code" and
              different tech stacks.
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Email</h5>
            <p>rammahajan7@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2001}
              endYear={2005}
              schoolName="BCET Punjab Technical University"
              qualification="Chemical Engineering"
            />
            <hr style={{ borderTop: '3px solid #e22947 ' }} />
            <h2>Experience</h2>
            <Experience
              startYear="Mar 2018"
              endYear="Feb 2019"
              jobName="BNP Paribas, Hong Kong"
              jobTitle="Senior Consultant"
              jobDescription="architect/design complex solutions including data/system security, sensors, IoT and communication channel connectors."
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills skill="JS" />
            <Skills skill="NodeJS" />
            <Skills skill="C#" />
            <Skills skill="DevOps" />
            <Skills skill="Java" />
            <Skills skill="Microservices" />
            <Skills skill="AWS" />
            <Skills skill="Docker" />
            <Skills skill="CI/CD" />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
