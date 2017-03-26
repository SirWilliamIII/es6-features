/**
 * Created by willcarpenter on 3/26/17.
 */

var locations = [];

locations.push({
    name: 'Denver',
    weather: 52
});

locations.push({
    name: 'Austin',
    weather: 74
});

locations.push({
    name: 'Singapore',
    weather: 88
});

for (let location of locations) {
    console.log(`It's ${location.weather} in ${location.name}`);
}

console.log(locations);



