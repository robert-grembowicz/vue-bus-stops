# Bus stops interview task

## Required environment
`npm 8.11` and `node 16.15`

## Required open ports in environment
`8080` - for the Vue application <br/>
`3000` - for the API server

## How to start environment
1. `npm install` - install dependencies
2. `npm run api` - run the API
3. `npm run serve` - for the Vue application
4. `npm run test` - run tests

## User stories

1. As a user I can open the url `http://localhost:8080` and see entry page with listed lines
   1. User can see title "Timetable"
   2. User can see navigation with links "Bus Lines" and "Stops" ("Bus Lines" is active link)
   3. User can see listed "Bus Lines". The "Bus Lines" should be sorted in the ascending order
   4. User can see placeholder "Please select the bus line first"
   5. User can click at the line
      1. Placeholder for the "Bus Stops" disappears 
      2. Placeholder "Please select the bus stop first" is displayed for the "Time" list
      3. "Bus Stops" list is displayed
      4. "Bus Stops" should be sortable by clicking on the icon near the title (by field 'order')
      5. By default, "Bus Stops" should be sorted in the ascending order
   6. When line is selected, User can click at the stop
      1. Placeholder for the "Time" list disappears
      2. "Time" list is displayed
      3. "Time" list entries should be sorted in the ascending order

2. As a user I can open the url `http://localhost:8080/stops` and see "stops" page with listed stops
   1. User can see title "Timetable"
   2. User can see navigation with links "Bus Lines" and "Stops" ("Stops" is active link)
   3. User can see the search bar
      1. If search bar is empty all stops should be visible
      2. Once any search term is entered, "Bus Stops" list should be filtered
   4. User can see listed "Bus Stops". The "Bus Stops" should be sorted in the ascending order
   5. "Bus Stops" should be sortable by clicking on the icon near the title
