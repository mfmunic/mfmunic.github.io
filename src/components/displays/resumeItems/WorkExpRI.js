import React, { Component } from 'react';
import { connect } from 'react-redux';

import workExp from '../texts/workExpText';

class WorkExpDisplay extends Component {
  render() {
    return (
      <div id='workExpTotal'>
        {workExp.map((job, index) => {
          const startString = new Date(job.start).toDateString();
          const startArr = startString.split(' ');
          const startMonth = startArr[1];
          const startYear = startArr[3];
          const endString = new Date(job.end).toDateString();
          const endArr = endString.split(' ');
          const endMonth = endArr[1];
          const endYear = endArr[3];
          return (
            <div key={index} className='workExp'>
              <div className='titleAndDates'>
                <p>
                  <strong>{job.title}</strong>
                </p>
                <div>
                  <p>
                    {`${startMonth} ${startYear} - ${endMonth !== 'Date' ? endMonth : 'Present'} ${
                      endYear ? endYear : ''
                    }`}
                  </p>
                </div>
              </div>
              <p className='company'>
                <i>{job.company}</i>
              </p>
              <ul className={`description ${job.description.length === 1 && 'oneLineList'}`}>
                {job.description.map((bulletPoint, index) => (
                  <li key={index}>{bulletPoint}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing,
    display: state.display,
  };
}

export default connect(mapStateToProps)(WorkExpDisplay);
