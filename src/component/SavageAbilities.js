import React from 'react';
import Grid from '@material-ui/core/Grid';

const SavageAbilities = ({ updateAttributes, attributes, possibleValues, updateMaxEncumberance } = this.props) => (
            <div>
                <h2>Attributes</h2>
                <div>
                    {Object.entries(attributes).map(att => {
                        const key = att[0]
                        const value = att[1]
                        return (
                            <div key={key}>
                                <Grid container spacing={3}>
                                    <Grid item xs={3}>
                                        {key}
                                    </Grid>
                                    <Grid item xs={1}>
                                        <span />
                                    </Grid>
                                    <Grid item xs={7}>
                                        <select
                                            name={key}
                                            onChange={(e) => {
                                                updateAttributes(e); updateMaxEncumberance();
                                            }}
                                            defaultValue={value}
                                        >
                                            {possibleValues.map((item, i) =>
                                                <option
                                                    key={i}
                                                    value={item}
                                                >
                                                    {item}
                                                </option>)}
                                        </select>
                                    </Grid>
                                </Grid>
                            </div>
                        )
                    })}
                </div>
            </div>
)
export default SavageAbilities;