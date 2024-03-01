import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import GeoChart from '../charts/GeoChart';
import BiChart from '../charts/PiChart';
import HbarChart from '../charts/HbarChart';
import CountUp from 'react-countup';
const Analytics = () => {
    return (
        <>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Stack spacing={2} >
                        <Grid item xs={6}>
                            <Stack spacing={2} direction="row">
                                <Card sx={{ minWidth: 99 + "%", height: 160 }} className='gradient'>
                                    <CardContent>
                                        <div>
                                            Visitors
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <CountUp end={2200} delay={0.2} duration={0.3} />
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div" color="#ccd1d1">
                                            Since last week
                                        </Typography>

                                    </CardContent>
                                </Card>
                                <Card sx={{ minWidth: 99 + "%", height: 160 }} className='gradientLight'>
                                    <CardContent>
                                        <div>
                                            Visitors
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <CountUp end={12000} delay={0.2} duration={0.3} />
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div" color="#ccd1d1">
                                            Since last week
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={2} direction="row">
                                <Card sx={{ minWidth: 99 + "%", height: 160 }} className='gradient'>
                                    <CardContent>
                                        <div>
                                            Visitors
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <CountUp end={32000} delay={0.2} duration={0.3} />
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div" color="#ccd1d1">
                                            Since last week
                                        </Typography>

                                    </CardContent>
                                </Card>
                                <Card sx={{ minWidth: 99 + "%", height: 160 }} className='gradientLight'>
                                    <CardContent>
                                        <div>
                                            Visitors
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <CountUp end={24000} delay={0.2} duration={0.3} />
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div" color="#ccd1d1">
                                            Since last week
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                    </Stack>
                </Grid>
                <Grid item xs={8}>
                    <Stack spacing={2} >
                        <Card sx={{ maxWidth: 100 + "%", height: 36 + "vh" }} >
                            <CardContent>
                                <HbarChart />
                            </CardContent>
                        </Card>
                    </Stack>
                </Grid>
                <Box height={40} />
                <Grid item xs={8}>
                    <Card sx={{ height: 50 + "vh" }}>
                        <CardContent>
                            <GeoChart />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ height: 50 + "vh" }}>
                        <CardContent>
                            <BiChart />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </>
    )
}

export default Analytics