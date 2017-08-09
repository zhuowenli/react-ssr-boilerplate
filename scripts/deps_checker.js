#!/usr/bin/env node

/**
 * deps_checker
 */

const fs = require('fs');
const path = require('path');

const rReEscape = /[-/\\^$*+?.()|[\]{}]/g;

const info = (...args) => {
    console.log(...args);
};

const args = process.argv.slice(2);
const exts = (args[0] || 'js').split(',').map(ext => {
    ext = ext.replace(/^\.+/, '');

    return ('.' + ext).toLowerCase();
});
const pkgPath = args[1] || './package.json';
const excludes = args[2] || '(^\\.[\\s\\S]+|^dist|node_modules)';
const rExcludes = new RegExp(excludes);

info('Pkgs:', pkgPath);
info('Exts:', exts);
info('Excludes:', rExcludes);

// process.exit(0);

const pkgs = require(path.resolve('.', pkgPath));

const deps = Object.assign({}, pkgs.dependencies);
const devDeps = Object.assign({}, pkgs.devDependencies);

const checkDep = (dep, content) => {
    const rDep = new RegExp('\\b' + dep.replace(rReEscape, '\\$&') + '\\b', 'ig');

    return rDep.test(content);
};

const checkFile = (p) => {
    const content = fs.readFileSync(p).toString();

    info('Check file:', p);

    Object.keys(deps).forEach(dep => {
        if(checkDep(dep, content)) {
            delete deps[dep];

            info('Dep checked:', dep);
        }
    });

    Object.keys(devDeps).forEach(dep => {
        if(checkDep(dep, content)) {
            delete devDeps[dep];

            info('DevDep checked:', dep);
        }
    });
};

const checkDir = (files, p) => {
    info('Check dir:', p);

    const dirs = fs.readdirSync(p);

    dirs.forEach(name => {
        const itemPath = path.join(p, name);

        if(rExcludes.test(itemPath)) {
            return;
        }

        const stats = fs.statSync(itemPath);

        if(stats.isFile()) {
            const ext = path.extname(name).toLowerCase();

            if(exts.indexOf(ext) > -1) {
                files.push(itemPath);
            }
        }
        else if(stats.isDirectory()) {
            checkDir(files, itemPath);
        }
    });
};

const main = () => {
    const files = [];
    const check = () => {
        const depsArr = Object.keys(deps);
        const devDepsArr = Object.keys(devDeps);

        if(!files.length || (!depsArr.length && !devDepsArr.length)) {
            info('\n');
            info('Check done, unrefed deps:');
            info('dependencies:', depsArr.join(' '));
            info('devDependencies:', devDepsArr.join(' '));

            return;
        }

        checkFile(files.shift());

        setTimeout(check, 32);
    };

    checkDir(files, '.');

    check();
};

main();
