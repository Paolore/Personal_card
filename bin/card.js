#!/usr/bin/env node

const asciify = require('asciify-image')
const chalk = require('chalk')
const Table = require('cli-table3')
const path = require('path')

// Info
const data = {
  name: chalk.magenta.bold('Lorena Correa'),
  bio: chalk.magenta.bold('Web Developer with tools PHP, Node, React, Angular'),
  bio1: chalk.magenta.bold('"Nothin is impossible to the willing mind"'),
  handle: chalk.cyan('@lavadani'),
  work: chalk.white('Frontend Developer at Tekus'),
  twitter: chalk.cyan('https://twitter.com/lavadani'),
  github: chalk.cyan('https://github.com/paolore'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/1paolorena'),
  npx: chalk.white('npx paolorena'),
  labelWork: chalk.magenta.bold('      Work:'),
  labelTwitter: chalk.magenta.bold('   Twitter:'),
  labelGitHub: chalk.magenta.bold('    GitHub:'),
  labelLinkedIn: chalk.magenta.bold('  LinkedIn:'),
  labelCard: chalk.magenta.bold('      Card:')
}

const table = new Table()
const newline = '\n'
const heading = `${data.name} - ${data.handle}`
const bio = `${data.bio}`
const bio1 = `${data.bio1}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

const getAvatar = async () => {
  const image = path.join(__dirname, '..', 'assets', 'images.jpg')
  let img
  try {
    img = await asciify(image, {
      fit: 'box',
      width: '20%'
    })
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }

  return img
}

async function getOutput () {
  const avatar = await getAvatar()
  const output = newline + newline + heading + newline + bio + newline + bio1 + newline.repeat(2) + working + newline + twittering + newline + githubing + newline + newline + linkedining + newline + newline + carding

  table.push(
    [avatar, { content: output, vAlign: 'center' }]
  )

  console.log(table.toString())
}

getOutput()