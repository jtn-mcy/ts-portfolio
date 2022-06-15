import AntD from './antd.svg';
import AWS from './aws.svg';
import Bootstrap from './bootstrap.svg';
import CSS from './css.svg';
import Figma from './figma.svg';
import Gatsby from './gatsby.svg';
import Git from './git.svg';
import GitHub from './github.svg';
import Handlebars from './handlebars.svg';
import Heroku from './heroku.svg';
import Html5 from './html5.svg';
import Javascript from './javascript.svg';
import Jest from './jest.svg';
import JWT from './jwt.svg'
import LinkedIn from './linkedin.svg'
import Medium from './medium.svg'
import MongoDB from './mongodb.svg'
import MySQL from './mysql2.svg'
import NodeJS from './nodejs.svg'
import Postgres from './postgres.svg'
import Python from './python.svg';
import React from './react.svg';
import Resume from './resume.svg';
import SASS from './sass.svg';
import Sequelize from './sequelize.svg';
import SQL from './sql.svg';
import TypeScript from './typescript.svg'

type SocialSVG = {
  [key: string]: string
}

type SkillsSVG = {
  [key: string]: string
}

type BundledSVG = {
  socials: SocialSVG
  skills: SkillsSVG
}

const svgs: BundledSVG = {
  socials: {
    GitHub,
    LinkedIn,
    Resume,
    Medium
  },
  skills: {
    AntD,
    AWS,
    Bootstrap,
    CSS,
    Figma,
    Gatsby,
    Git,
    Handlebars,
    Heroku,
    Html5,
    Javascript,
    Jest,
    JWT,
    MongoDB,
    MySQL,
    NodeJS,
    Postgres,
    Python,
    React,
    SASS,
    Sequelize,
    SQL,
    TypeScript
  }
}

export default svgs