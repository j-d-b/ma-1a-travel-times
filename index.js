require('dotenv').config();
const got = require('got');

const { API_KEY } = process.env;
const BASE_URL = 'https://maps.googleapis.com/maps/api/directions/json?';

const ORIGIN = '42.390971,-71.013682'; // Just after Boardman Street on MA-1A S
const SUMNER_TUNNEL = '42.367552,-71.047537'; // Center of Sumner Tunnel
const WILLIAMS_TUNNEL = '42.353492,-71.028607'; // Center of Ted Williams Tunnel
const SUMNER_ROUTE_END = '42.363543,-71.057835'; // MA-1A S Gov Ctr exit ramp
const WILLIAMS_ROUTE_END = '42.361645,-71.054361' // I-93 N Gov Ctr exit (23) ramp

const buildReq = (dest, waypoints = []) => {
  const points = waypoints.join('|');
  return `${BASE_URL}origin=${ORIGIN}&destination=${dest}&${points && `waypoints=${points}&`}departure_time=now&key=${API_KEY}`;
};

const sendReq = (routeName, reqURL) => {
  got(reqURL).then(res => {
    const route = JSON.parse(res.body).routes[0];
    console.log(routeName + ': ' + route.legs[0].duration_in_traffic.text);
  }).catch(err => {
    console.log(err);
  });
};

const sumnerReq = buildReq(SUMNER_ROUTE_END, [`via:${SUMNER_TUNNEL}`]);
const williamsReq = buildReq(WILLIAMS_ROUTE_END, [`via:${WILLIAMS_TUNNEL}`]);

sendReq('Route A (Sumner)', sumnerReq);
sendReq('Route B (Williams)', williamsReq);
