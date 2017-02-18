module.exports = {
  scripts: {
    contributors: {
      add: "all-contributors add",
      generate: "all-contributors generate"
    },
    dev: {
      default: 'nps -p dev.admin,dev.api',
      admin: 'cd admin && nps dev',
      api: 'cd api && nps dev',
    },
    lint: {
      default: 'nps lint.admin && nps lint.api',
      admin: 'cd admin && nps lint',
      api: 'cd api && nps lint',
    },
    install: {
      default: 'nps -p install.admin,install.api',
      admin: 'cd admin && npm install',
      api: 'cd api && npm install',
    },
    test: {
      default: 'nps test.admin && nps test.api',
      admin: 'cd admin && nps test',
      api: 'cd api && nps test',
    },
  },
}
