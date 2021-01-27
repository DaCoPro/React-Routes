require('dotenv').config();
require('./config/database');

const Route = require('./models/route');

(async function() {
  await Route.deleteMany({});
  const routes = await Route.create([
    {name: 'First Kiss ', grade: '5.7', description: '5 pitch route ranging from 5.4 - 5.8. Pitch 3 is a constant traverse left to anchors. 40m rope will JUST get you there.'},
    {name: 'Screaming Yellow Zonkers ', grade: '5.10b', description: 'Fun route up a slab. If you crap yourself, it will be on the first bolt. Crux is still at the top.'},
  ]);

  process.exit();
})();