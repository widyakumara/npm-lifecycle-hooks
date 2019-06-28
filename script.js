const scripts = {
  prepublish: { desc: 'Run BEFORE the package is packed and published, as well as on local npm install without any arguments.' },
  prepare: { desc: 'Run both BEFORE the package is packed and published, on local npm install without any arguments, and when installing git dependencies. This is run AFTER prepublish, but BEFORE prepublishOnly.' },
  prepublishOnly: { desc: 'Run BEFORE the package is prepared and packed, ONLY on npm publish.' },
  prepack: { desc: 'run BEFORE a tarball is packed (on npm pack, npm publish, and when installing git dependencies).' },
  postpack: { desc: 'Run AFTER the tarball has been generated and moved to its final destination.' },
  publish: { desc: 'Run AFTER the package is published.' },
  postpublish: { desc: 'Run AFTER the package is published.' },
  preinstall: { desc: 'Run BEFORE the package is installed.' },
  install: { desc: 'Run AFTER the package is installed.' },
  postinstall: { desc: 'Run AFTER the package is installed.' },
  preuninstall: { desc: 'Run BEFORE the package is uninstalled.' },
  uninstall: { desc: 'Run BEFORE the package is uninstalled.' },
  postuninstall: { desc: 'Run AFTER the package is uninstalled.' },
  preversion: { desc: 'Run BEFORE bumping the package version.' },
  version: { desc: 'Run AFTER bumping the package version, but BEFORE commit.' },
  postversion: { desc: 'Run AFTER bumping the package version, and AFTER commit.' },
  pretest: { desc: 'Run by the npm test command.' },
  test: { desc: 'Run by the npm test command.' },
  posttest: { desc: 'Run by the npm test command.' },
  prestop: { desc: 'Run by the npm stop command.' },
  stop: { desc: 'Run by the npm stop command.' },
  poststop: { desc: 'Run by the npm stop command.' },
  prestart: { desc: 'Run by the npm start command.' },
  start: { desc: 'Run by the npm start command.' },
  poststart: { desc: 'Run by the npm start command.' },
  prerestart: { desc: 'Run by the npm restart command. ', note: 'npm restart will run the stop and start scripts if no restart script is provided.' },
  restart: { desc: 'Run by the npm restart command. ', note: 'npm restart will run the stop and start scripts if no restart script is provided.' },
  postrestart: { desc: 'Run by the npm restart command. ', note: 'npm restart will run the stop and start scripts if no restart script is provided.' },
  preshrinkwrap: { desc: 'Run by the npm shrinkwrap command.' },
  shrinkwrap: { desc: 'Run by the npm shrinkwrap command.' },
  postshrinkwrap: { desc: 'Run by the npm shrinkwrap command.' },
};

const err = (script) => {
  if (script) {
    console.log(`\x1b[31merror\x1b[0m Script "${script}" not found.`);
  } else {
    console.log('\x1b[31merror\x1b[0m Missing required “script” name');
  }
  console.log('\x1b[34minfo\x1b[0m Visit https://docs.npmjs.com/misc/scripts for documentation about this command.');
}

const log = (name, props) => {
    if (name || props.desc || props.note) {
      let line = '-'.repeat(40);
      let out  = [];
      out.push(line);
      if (name) {
        out.push(`\x1b[32merror\x1b[0m : ${name}`);
      }
      if (props.desc) {
        out.push(`\x1b[34merror\x1b[0m : ${props.desc}`);
      }
      if (props.note) {
        out.push(`\x1b[33merror\x1b[0m : ${props.note}`);
      }
      out.push(line);
      console.log(out.join('\n'));
    }
}

if (process.argv[2]) {
  const script = process.argv[2];
  if (script in scripts) {
    log(script, scripts[script]);
  } else {
  err(script);
  }
} else {
  err();
}
