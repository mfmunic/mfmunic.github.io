import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import skillsArr from '../texts/SkillsText';

class SkillsDisplay extends Component {
  pickColor(rating) {
    switch (rating) {
      case 1:
        return 'red';
      case 2:
        return 'orange';
      case 3:
        return 'yellow';
      case 4:
        return 'green';
      default:
        return 'blue';
    }
  }
  render() {
    const skillsArrOrdered = _.orderBy(skillsArr, ['skill']);
    return (
      <div id='skillsDisplay'>
        <table>
          <thead>
            <tr id='headerRow'>
              <th id='skillTitle'>
                <p>Skill</p>
              </th>
              <th id='level1Title' className='levelTitle'>
                <p>Heard of it</p>
              </th>
              <th id='level2Title' className='levelTitle'>
                <p>Have written in it</p>
              </th>
              <th id='level3Title' className='levelTitle'>
                <p>Competant</p>
              </th>
              <th id='level4Title' className='levelTitle'>
                <p>Expert</p>
              </th>
              <th id='level5Title' className='levelTitle'>
                <p>Can Teach It</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {_.map(skillsArrOrdered, (skill, index) => {
              return (
                <tr key={index}>
                  <td className='skillTable'>{skill.skill}</td>
                  <td className='tableBlock'>
                    <div
                      className={`${
                        skill.rating === 1 ? 'skillBlockHalf' : skill.rating > 1 ? 'skillBlockFull' : ''
                      } BG--${this.pickColor(skill.rating)}`}
                    />
                  </td>
                  <td className='tableBlock'>
                    <div
                      className={`${
                        skill.rating === 2 ? 'skillBlockHalf' : skill.rating > 2 ? 'skillBlockFull' : ''
                      } BG--${this.pickColor(skill.rating)}`}
                    />
                  </td>
                  <td className='tableBlock'>
                    <div
                      className={`${
                        skill.rating === 3 ? 'skillBlockHalf' : skill.rating > 3 ? 'skillBlockFull' : ''
                      } BG--${this.pickColor(skill.rating)}`}
                    />
                  </td>
                  <td className='tableBlock'>
                    <div
                      className={`${
                        skill.rating === 4 ? 'skillBlockHalf' : skill.rating > 4 ? 'skillBlockFull' : ''
                      } BG--${this.pickColor(skill.rating)}`}
                    />
                  </td>
                  <td className='tableBlock'>
                    <div
                      className={`${skill.rating === 5 ? 'skillBlockHalf' : ''} BG--${this.pickColor(skill.rating)}`}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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

export default connect(mapStateToProps)(SkillsDisplay);
