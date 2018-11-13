# MA-1A S to Gov Center Travel Times
The script will output the travel time in minutes using the [Google Maps Directions API](https://developers.google.com/maps/documentation/directions/start) from MA-1A S between Boardman Street and Winthrop Ave to Government Center, for two routes:

**Route A.** MA-1A S via the Sumner Tunnel

**Route B.** I-90 to I-93 via the Ted Williams Tunnel

## Usage
### Prerequisites
You must have the following installed
* [Node.js](https://nodejs.org/en/) JavaScript runtime
* [Yarn](https://yarnpkg.com/en/) package manager

### Setup
Create a `.env` file in the project root with an API_KEY key/value pair.
```
API_KEY=my_gmaps_api_key
```

Install dependencies
```
yarn install
```

### Run
Run the script with
```
node index
```

This will output travel times for both routes considering the current traffic (as if you left now).

Sample output:
```
Route A (Sumner): 6 mins
Route B (Williams): 9 mins
```

## Routes
Both routes **start at (42.395917, -71.009659)**, which is Between Boardman Street and Winthrop Ave on MA-1A S.

### Route A (MA-1A South via Sumner Tunnel)
**Route A.** sets a waypoint at the **center of the Sumner Tunnel, at (42.367552, -71.047537)** and ends at the end of the single-direction, **MA-1A S Gov Ctr exit ramp, at (42.363861, -71.058278)**.

It appears impossible (using Google Maps GUI) to get to this endpoint without going across the Sumner Tunnel, but the tunnel waypoint is included for clarity and consistency with **Route B**.

### Route B (I-90 S to I-93 N via Ted Williams Tunnel)
**Route B.** sets a waypoint at the **center of the Ted Williams Tunnel, at (42.353492, -71.028607)** and ends 36 feet from end of the single-direction, **I-93 N Gov Ctr exit ramp (Exit 23), at (42.361697, -71.054964)**.

It's impossible to get to this endpoint without getting on I-93 N from the Seaport District at the latest, and with the Ted Williams Tunnel waypoint, unreasonable to get to without going from I-90 S directly to I-93 N (which is the desired route).

---

<p align="center">Copyright (C) 2018 <a href="https://kcus.org/home">KCUS, Inc.</a></p>
