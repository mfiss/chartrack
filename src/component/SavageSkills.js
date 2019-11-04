import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

export default class SavageSkills extends Component {

    render() {
        const { updateSkills, skills, possibleValues } = this.props
        const skillEntries = Object.entries(skills)
        return (
            <div>
                <h2>Skills</h2>
                <div>
                    {skillEntries.map(skill => {
                        const skillName = skill[0]
                        const skillvalue = skill[1]

                        return (
                            <div key={skillName}>
                                <Grid container spacing={3}>
                                    <Grid item xs={4}>
                                        {skillName}
                                    </Grid>
                                    <Grid item xs={2}>
                                        <span />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <select
                                            name={skillName}
                                            onChange={e => updateSkills(e)}
                                            defaultValue={skillvalue}
                                        >
                                            {possibleValues.map((dieType, i) =>
                                                <option
                                                    key={i}
                                                    value={dieType}
                                                >
                                                    {dieType}
                                                </option>)}
                                        </select>
                                    </Grid>
                                </Grid>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
