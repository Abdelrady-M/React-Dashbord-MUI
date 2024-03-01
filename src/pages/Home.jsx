import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InventoryIcon from '@mui/icons-material/Inventory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from '../components/Accordion';
import BarChart from '../charts/BarChart';
import CountUp from 'react-countup';

const Home = () => {
    return (
        <>

            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Stack spacing={2} direction="row">
                        <Card sx={{ minWidth: 49 + "%", height: 190 }} className='gradient'>
                            <CardContent>
                                <div>
                                    <CreditCardIcon />
                                </div>
                                <Typography gutterBottom variant="h5" component="div">
                                    $<CountUp end={500} delay={0.2} duration={0.3} />
                                </Typography>
                                <Typography gutterBottom variant="body2" component="div" color="#ccd1d1">
                                    Total Earning
                                </Typography>

                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 49 + "%", height: 190 }} className='gradientLight'>
                            <CardContent>
                                <div>
                                    <ShoppingBagIcon />
                                </div>
                                <Typography gutterBottom variant="h5" component="div">
                                    $<CountUp end={900} delay={0.2} duration={0.3} />
                                </Typography>
                                <Typography gutterBottom variant="body2" component="div" color="#ccd1d1">
                                    Total Odrers
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack spacing={2} >
                        <Card sx={{ maxWidth: 600 }} className='gradientLight'>
                            <CardContent>
                                <div className='RightHomeCard'>
                                    <InventoryIcon />
                                    <div className='RightHomeCardSpan'>
                                        <span className='spanRight'>$203K</span>
                                        <span>Total Income</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 600 }}>
                            <CardContent>
                                <div className='RightHomeCard'>
                                    <InventoryIcon />
                                    <div className='RightHomeCardSpan'>
                                        <span className='spanRight'>$203K</span>
                                        <span >Total Income</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                    </Stack>
                </Grid>
                <Box height={40} />
                <Grid item xs={8}>
                    <Card sx={{ height: 60 + "vh" }}>
                        <CardContent>
                            <BarChart />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ height: 60 + "vh" }}>
                        <CardContent>
                            <div className='RightHomeCardSpan'>
                                <span className='Popular'>Popular Products</span>
                            </div>
                            <AccordionDash />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </>
    )
}

export default Home