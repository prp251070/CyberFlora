async function printRoutes() {
  const appJs = await fetch('https://www.blockerzz.com/_app/immutable/entry/app.xweEGQhz.js').then(r => r.text());
  // Find routes array
  const routeIdx = appJs.indexOf('routes:');
  if (routeIdx !== -1) {
    console.log(appJs.slice(routeIdx, routeIdx + 2000));
  } else {
    // Find pattern: /create
    const p = appJs.indexOf('/create');
    console.log(appJs.slice(Math.max(0, p - 200), p + 500));
  }
}
printRoutes();
